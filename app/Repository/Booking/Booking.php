<?php

namespace App\Repository\Booking;

use App\Enums\BookingStatus;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\GetBookingRequest;
use App\Repository\Image\GetImage;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Carbon;
use Illuminate\Http\Request;
use App\Traits\NumberFormat;

class Booking {

    use NumberFormat;

    public function setBookingReference($id, $reference)
    {
        return DB::table('bookings')->where('id', $id)->update(['internal_reference' => $reference, 'status' => BookingStatus::Confirmed->value]);
    }

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
            ->leftJoin('images as gallery', 'room.id', '=', 'gallery.gallery_id')
            ->get(['dis.room_id','dis.date', 'dis.availability', 'dis.price', 'dis.status', 'room.name', 'room.type', 'room.description', 'room.cover', 'room.base_capacity', 'room.max_capacity', 'room.extra_person_price', 'gallery.image_src']);

        $distributionResult = [];

        $distributionResult = $distribution->groupBy('room_id')->map(function ( $roomDistribution, $roomDistributionKey ) use ($data) {
            
            $canBeBooked = $this->canBeBook($roomDistribution);
            $nights = $this->getNights($data['checkin'], $data['checkout']);
            $r = $roomDistribution->first();
            $price = 0;
            $itemizedPrice = [];
            $gallery = [
                [
                    'id' => null,
                    'image_src' => $this->getCoverUrl($r->cover),
                    'image_alt' => $r->name,
                    'sort_order' => 0
                ]
            ];
            $gallery = array_merge($gallery, GetImage::getImagesStatic(['gallery_id' => $r->room_id])->toArray());
            if($canBeBooked){
                $items = $this->getComputedPriceItemized($roomDistribution, $nights);
                $price = $items['total'];
                $itemizedPrice = $items['items'];
            } else {
                $price = $r->price;
            }

            return [
                'canBeBooked' => $canBeBooked,
                'roomTypeId' => $r->room_id,
                'availability' => $r->availability,
                'price' => $price,
                'price_string' => $this->formatPrice($price),
                'nights' => $nights,
                'itemized_price' => $itemizedPrice,
                'room' => [
                    'name' => $r->name,
                    'type' => $r->type,
                    'description' => $r->description,
                    'cover' => $this->getCoverUrl($r->cover),
                    'baseCapacity' => $r->base_capacity,
                    'maxCapacity' => $r->max_capacity,
                    'extra_person_price' => $r->extra_person_price,
                    'gallery' => $gallery ?? '',
                ]
            ];

        });
        return $distributionResult;
    }

    public function getBookingRoomCheckout($data)
    {
        $dates = [$data['checkin'], $data['checkout']];
        $roomDistribution = DB::table('distribution as dis')
            ->whereBetween('date', $dates)
            ->where('status', 'available')
            ->where('room_id', $data['room_type_id'])
            ->leftJoin('rooms as room', 'dis.room_id', '=', 'room.id')
            ->get(['dis.room_id','dis.date', 'dis.availability', 'dis.price', 'dis.status', 'room.name', 'room.type', 'room.description', 'room.cover', 'room.base_capacity', 'room.max_capacity', 'room.extra_person_price']);
            
        $canBeBooked = $this->canBeBook($roomDistribution);
        $nights = $this->getNights($data['checkin'], $data['checkout']);
        $r = $roomDistribution->first();
        $price = 0;
        $itemizedPrice = [];
        if($canBeBooked){
            $items = $this->getComputedPriceItemized($roomDistribution, $nights);
            $price = $items['total'];
            $itemizedPrice = $items['items'];
        } else {
            $price = $r->price;
        }

        return [
            'canBeBooked' => $canBeBooked,
            'roomTypeId' => $r->room_id,
            'availability' => $r->availability,
            'total_availability_for_period' => $roomDistribution->sum('availability'),
            'price' => $price,
            'price_string' => $this->formatPrice($price),
            'nights' => $nights,
            'itemized_price' => $itemizedPrice,
            'room' => [
                'name' => $r->name,
                'type' => $r->type,
                'description' => $r->description,
                'cover' => $this->getCoverUrl($r->cover),
                'baseCapacity' => $r->base_capacity,
                'maxCapacity' => $r->max_capacity,
                'extra_person_price' => $r->extra_person_price,
            ]
        ];
    }

    public static function formatPriceStatic(int $price)
    {
        return '$' . number_format($price, 2, '.', ',');
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
    public function getComputedPriceItemized($price, $nights)
    {
        $acc = 0.00;
        $items = [];
        $prices = $price->pluck('price');
        $extraPersonPrice = $price->first()->extra_person_price;
        for($i = 0; $i < $nights; $i++)
        {
            $acc += $prices[$i];
            $items[] = [
                'night' => $i + 1,
                'price' => $prices[$i],
                'price_string' => '$'.number_format($prices[$i], 2, '.', ','), 'accumulated' => '$'.number_format($acc, 2, '.', ','),
                'string' => 'noche x'. $i + 1 .' costo $' . number_format($prices[$i], 2, '.', ','). (($extraPersonPrice) != null && ($extraPersonPrice > 0) ? ' persona extra $' . number_format($extraPersonPrice, 2,'.', ',') : '')
            ];
        }
        return ['total' => $acc, 'items' => $items];
    }

    /**
     * A room can be book when all days except last day are available
     * 
     * @param Collection $roomDistribution
     * @return bool
     */
    public function canBeBook($roomDistribution)
    {
        // Exept last day
        $roomDistribution->pop();
        return !$roomDistribution->contains('availability', '<=', 0);
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


    public function isValidRequest($data)
    {
        return !Validator::make($data, $this->getBookingRules())->fails();
    }

    public function getBookingRules()
    {
        $today = Carbon::today()->format('Y-m-d');
        $tomorrow = Carbon::tomorrow()->format('Y-m-d');
        return [
            'adults' => ['required', 'integer', 'min:1'],
            'children' => ['required', 'integer', 'min:0'],
            'checkin' => ['required', 'date', 'after_or_equal:' . $today],
            'checkout' => ['required', 'date', 'after_or_equal:' . $tomorrow],
        ];   
    }


    /**
     * Get booking data
     * Merge booking data with room data
     * 
     * @param GetBookingRequest $request
     * @return array
     */
    public static function BookingRoomAdapter($settings, $room_type){
        $settings['room_type'] = $room_type;
        return $settings;
    }
}