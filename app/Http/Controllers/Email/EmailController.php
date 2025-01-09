<?php

namespace App\Http\Controllers\Email;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Mail;
use Illuminate\Http\Request;
use App\Models\Booking as BookingModel;

class EmailController extends Controller
{
    public function guestBooking(BookingModel $booking)
    {
        // $To = $booking->email;
        $To = request()->has('to') ? request()->to : 'desarrollo.software@pcbtroniks.com';
        // Mail::to($To)->queue(new \App\Mail\GuestBookingMakeMail($booking));
        return view('emails.guest-booking', [
            'data' => $booking,
        ]);
    }

    public function adminBooking(BookingModel $booking)
    {
        dd($booking);
        return view('emails.admin-booking', [
            'data' => $booking,
        ]);
    }
}
