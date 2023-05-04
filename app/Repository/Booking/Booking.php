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

        $distributionResult = $distribution->groupBy('room_id')->map(function ( $roomDistribution, $roomDistributionKey ) {
            $canBeBooked = !$roomDistribution->contains('availability', 0);
            $roomDistributionResult = [];
            if($canBeBooked)
            {
                $roomDistributionResult = $roomDistribution->reduce(function ($acc, $r){
                    $acc['price'] += $r->price;
                    return [
                        'canBeBooked' => true,
                        'roomTypeId' => $r->room_id,
                        'availability' => $r->availability,
                        'price' => $acc['price'],
                        'price_string' => $this->formatPrice($acc['price']),
                        'room' => [
                            'name' => $r->name,
                            'type' => $r->type,
                            'description' => $r->description,
                            'cover' => $this->getCoverUrl($r->cover),
                            'baseCapacity' => $r->base_capacity,
                            'maxCapacity' => $r->max_capacity,
                        ]
                    ];
                }, [
                    'roomTypeId' => null,
                    'canBeBooked' => true,
                    'availability' => 0,
                    'price' => 0,
                    'price_string' => 0,
                    'room'=> [],
                ]);
            } else 
            {
                $r = $roomDistribution->first();
                $roomDistributionResult = [
                    'canBeBooked' => false,
                    'roomTypeId' => $r->room_id,
                    'availability' => $r->availability,
                    'price' => $r->price,
                    'price_string' => $this->formatPrice($r->price),
                    'room' => [
                        'name' => $r->name,
                        'type' => $r->type,
                        'description' => $r->description,
                        'cover' => $this->getCoverUrl($r->cover),
                        'baseCapacity' => $r->base_capacity,
                        'maxCapacity' => $r->max_capacity,
                    ]
                ];
            }

            return $roomDistributionResult;
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