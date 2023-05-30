<?php

namespace App\Repository\Booking;

use App\Models\Booking as BookingModel;

class BookingStore {

    public function storeBooking($data)
    {
        $guest = new Guest();
        $guest = $guest->storeGuest($data);

        $booking = BookingModel::create([
            'guest_id' => $guest->id,
            'checkin' => $data['checkin'],
            'checkout' => $data['checkout'],
            'adults' => $data['adults'],
            'children' => $data['children'],
            'status' => 'pending'
        ]);

        foreach($data['rooms'] as $room){
            $booking->rooms()->attach($room['id'], [
                'price' => $room['price'],
                'quantity' => $room['quantity'],
                'subtotal' => $room['subtotal']
            ]);
        }

        return $booking;
    }
}