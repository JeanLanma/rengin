<?php

namespace App\Services;

use Illuminate\Support\Facades\Mail;

class SendEmailService {

    public static function sendGuestBooking($booking)
    {
        self::sendNewBooking($booking);
        return Mail::to($booking['guest']['email'])->send(new \App\Mail\GuestBookingMakeMail($booking));
    }

    public static function sendNewBooking($booking)
    {
        $administrativeEmails = self::getAdministrativeEmails();
        foreach ($administrativeEmails as $email) {
            Mail::to($email)->send(new \App\Mail\NewBookingMakeMail($booking));
        }
        return;
    }

    public static function getAdministrativeEmails(): array
    {
        return [
            'jean.langarica@pcbtroniks.com'
            //'reservas-gdl@hotelcasinoplaza.mx'
        ];
    }
}