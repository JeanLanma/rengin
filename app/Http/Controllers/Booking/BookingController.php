<?php

namespace App\Http\Controllers\Booking;

use App\Http\Requests\GetBookingRequest;
use App\Http\Controllers\Controller;
use App\Repository\Booking\Booking;
use App\Services\BookingService;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    /**
     * Get rooms availability and price for a booking
     */
    public function index(GetBookingRequest $request, Booking $booking)
    {
        return [
            'distribution' => $booking->getAvailabilityDate($request->validated()),
            'settings' => [
                'currency' => 'MXN',
                'currency_symbol' => '$',
                'adults' => $request->adults,
                'children' => $request->children,
                'checkin' => $request->checkin,
                'checkout' => $request->checkout,
                'nigths' => $booking->getNights($request->checkin, $request->checkout)
            ]
        ];
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
        return inertia('Checkout/Show', [
            'booking' => $booking::BookingRoomAdapter(request()->settings, $room_type),
            'summary' => $booking->getBookingRoomCheckout(request()->all())
        ]);
    }

    public function bookingService()
    {
        return new BookingService;
    }
}
