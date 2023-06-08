<?php

namespace App\Repository\Booking;

use App\Enums\BookingStatus;
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

    public function getBookingsFromMostRecentWithFilters(int $limit = 10, $request) : object
    {
        $query = BookingModel::with('guest')->with('room')->orderBy('created_at', 'desc');

        $query->when($request->has('status'), function($q) use ($request) {
            return $q->where('status', $request->status);
        });

        return $query->paginate($limit);
    }

    public function getDefaultQueryFilters() : array
    {
        return [
            'status' => BookingStatus::Pending->value,
            'page' => 1
        ];
    }

}