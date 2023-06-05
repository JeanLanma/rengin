<?php

namespace App\Repository\Booking;

use App\Models\Booking as BookingModel;

class BookingGet {

    public function getBookings(int $limit = 10) : object
    {
        return BookingModel::with('guest')->with('room')->paginate($limit);
    }

    public function getBookingsFromMostRecent(int $limit = 10) : object
    {
        return BookingModel::with('guest')->with('room')->orderBy('created_at', 'desc')->paginate($limit);
    }

}