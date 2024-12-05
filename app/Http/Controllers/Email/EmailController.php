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
        return view('emails.guest-booking', [
            'data' => $booking,
        ]);
        // return Mail::to('desarrollo.software@pcbtroniks.com')->send(new \App\Mail\GuestBookingMakeMail($booking));
    }

    public function getAdministrativeEmails(): array
    {
        return [
            ''
        ];
    }
}
