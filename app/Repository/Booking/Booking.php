<?php

namespace App\Repository\Booking;

use App\Http\Requests\GetBookingRequest;
use Illuminate\Support\Facades\DB;

class Booking {

    /**
     * Get rooms availability and price for a booking
     */
    public function getAvailabilityDate($data)
    {
        $dates = [$data['checkin'], $data['checkout']];
        $distribution = DB::table('distribution as dis')
            ->whereBetween('date', $dates)
            ->where('status', 'available')
            ->leftJoin('rooms as room', 'dis.room_id', '=', 'room.id')
            ->get(['dis.room_id','dis.date', 'dis.availability', 'dis.price', 'dis.status', 'room.name', 'room.type', 'room.description', 'room.cover', 'room.base_capacity', 'room.max_capacity']);
        // dd($distribution);
        $distributionResult = [];

        $distributionResult = $distribution->groupBy('room_id')->map(function ( $roomDistribution, $roomDistributionKey ) use ($data) {
            
            $canBeBooked = !$roomDistribution->contains('availability', 0);
            $nights = $this->getNights($data['checkin'], $data['checkout']);
            $r = $roomDistribution->first();

            $price = $canBeBooked 
                    ? $this->getComputedPrice($roomDistribution, $nights) 
                    : $r->price;

            return [
                'canBeBooked' => $canBeBooked,
                'roomTypeId' => $r->room_id,
                'availability' => $r->availability,
                'price' => $price,
                'price_string' => $this->formatPrice($price),
                'nights' => $nights,
                'room' => [
                    'name' => $r->name,
                    'type' => $r->type,
                    'description' => $r->description,
                    'cover' => $this->getCoverUrl($r->cover),
                    'baseCapacity' => $r->base_capacity,
                    'maxCapacity' => $r->max_capacity,
                ]
            ];

        });

        return $distributionResult;
    }

    /**
     * Format price to string "$ 10,000.00"
     * 
     * @param int $price
     * @return string
     */
    public function formatPrice(int $price)
    {
        return '$ ' . number_format($price, 2, '.', ',');
    }

    public static function formatPriceStatic(int $price)
    {
        return '$ ' . number_format($price, 2, '.', ',');
    }

    public function getComputedPrice($price, $nights)
    {
        $acc = 0;
        $prices = $price->pluck('price');
        for($i = 0; $i < $nights; $i++)
        {
            $acc += $prices[$i];
        }
        return $acc;
    }

    /**
     * Get URL image from cover room
     * 
     * @param string $cover
     * @return string
     */
    public function getCoverUrl(string $cover)
    {
        return url('storage/' . $cover);
    }

    /**
     * Get Nights
     * 
     * @param string $checkin
     * @param string $checkout
     * @return int
     */

    public function getNights(string $checkin, string $checkout)
    {
        $checkin = new \DateTime($checkin);
        $checkout = new \DateTime($checkout);
        $interval = $checkin->diff($checkout);
        return $interval->format('%a');
    }

}