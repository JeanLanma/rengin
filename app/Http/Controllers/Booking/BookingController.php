<?php

namespace App\Http\Controllers\Booking;

use App\Http\Requests\GetBookingRequest;
use App\Http\Controllers\Controller;
use App\Repository\Booking\Booking;
use App\Repository\Booking\BookingStore;
use App\Repository\Booking\BookingSummary;
use App\Services\BookingService;
use App\Repository\Booking\BookingGet;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    /**
     * Get rooms availability and price for a booking
     */
    public function index(BookingGet $booking)
    {
        return inertia('Booking/Index', [
            'bookings' => $booking->getBookings()
        ]);
    }

    public function show()
    {
        return inertia('Booking/Show');
    }

    public function booking( Booking $booking )
    {
        $rooms = $booking->getAvailabilityDate(request()->all());
        return inertia('BookingShow/Show', [
            'settings' => request()->all(),
            'distribution' => $rooms
        ]);
    }

    public function checkout(Booking $booking)
    {        
        $room_type = $booking->getBookingRoomCheckout(request()->all());
        $summary = new BookingSummary($room_type, request()->all());
        return inertia('Checkout/Show', [
            'booking' => $booking::BookingRoomAdapter(request()->settings, $room_type),
            'summary' => $summary->getSummary()
        ]);
    }

    public function store()
    {
        $booking = new BookingStore();
        $booking = $booking->storeBooking(request()->all());
        return response()->json([
            'message' => 'Booking created successfully',
            'booking' => request()->all(),
            'booked' => $booking
        ], 201);
    }

    public function bookingService()
    {
        return new BookingService;
    }
}
