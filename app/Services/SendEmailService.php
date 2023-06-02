<?php

namespace App\Services;

use Illuminate\Support\Facades\Mail;

class SendEmailService {

    public static function sendGuestBooking($booking)
    {
        return Mail::to($booking['guest']['email'])->send(new \App\Mail\GuestBookingMakeMail($booking));
    }
}