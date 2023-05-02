<?php

namespace App\Http\Controllers\Booking;

use App\Http\Requests\GetBookingRequest;
use App\Http\Controllers\Controller;
use App\Repository\Booking\Booking;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    /**
     * Get rooms availability and price for a booking
     */
    public function index(GetBookingRequest $request, Booking $booking)
    {
        return response()->json([
            'data' => $booking->getAvailabilityDate($request->validated())
        ]);
        dd($booking->getAvailabilityDate($request->validated()));
    }
}
