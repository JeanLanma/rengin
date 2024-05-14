<?php

namespace App\Http\Controllers\Booking;

use App\Http\Requests\GetBookingRequest;
use App\Http\Controllers\Controller;
use App\Repository\Booking\Booking;
use App\Repository\Booking\BookingStore;
use App\Repository\Booking\BookingSummary;
use App\Services\BookingService;
use App\Repository\Booking\BookingGet;
use App\Services\SendEmailService;
use App\Http\Requests\Booking\StoreBookingRequest;
use App\Models\Booking as ModelsBooking;
use App\Repository\Users\User;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    /**
     * Get rooms availability and price for a booking
     */
    public function index(BookingGet $booking)
    {
        //get query params
        return inertia('Booking/Index', [
            'bookings' => $booking->getBookingsFromMostRecentWithFilters(10, request()),
            'queryFilters' => request()->query() ?? $booking->getDefaultQueryFilters()
        ]);
    }

    public function show(BookingGet $BookingGet, $booking)
    {
        return inertia('Booking/Show',[
            'booking' => $BookingGet->getBookingById($booking),
        ]);
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
        if(!$room_type['canBeBooked']){return redirect()->route('booking');};
        return inertia('Checkout/Show', [
            'booking' => $booking::BookingRoomAdapter(request()->settings, $room_type),
            'summary' => $summary->getSummary()
        ]);
    }

    public function store(StoreBookingRequest $request)
    {
        $booking = new BookingStore();
        $booking = $booking->storeBooking(request()->all());
        SendEmailService::sendGuestBooking($booking);
        return redirect()->back()->with('booking',[
            'message' => 'Booking created successfully',
            'booking' => request()->all(),
            'booked' => $booking,
            'successContent' => [
                'title' => 'Reservación Realizada',
                'description' => $this->setBookingSuccessMessage($booking['guest']['email'])
            ]
        ], 201);
    }

    public function setBookingSuccessMessage($BookingEmail)
    {
        return 'Muchas gracias su reservación ha sido realizada con éxito. En breve enviaremos un correo electrónico a ' . $BookingEmail . ' con los detalles.';
    }

    public function bookingService()
    {
        return new BookingService;
    }

    public function reference($booking, $reference, Booking $bookingRepository)
    {
        $response = $bookingRepository->setBookingReference($booking, $reference);
        return response()->json($response, 200);
    }
}
