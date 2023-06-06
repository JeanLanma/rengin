<?php

namespace App\Services;

use Illuminate\Support\Facades\Mail;

class SendEmailService {

    public static function sendGuestBooking($booking)
    {
        self::sendNewBooking($booking);
        try {
            return Mail::to($booking['guest']['email'])->send(new \App\Mail\GuestBookingMakeMail($booking));
        } catch (\Throwable $th) {
            dd($th);
        }
    }

    public static function sendNewBooking($booking)
    {
        $success = null;
        try {
            $administrativeEmails = self::getAdministrativeEmails();
            Mail::to($administrativeEmails)
                ->send(new \App\Mail\NewBookingMakeMail($booking));
            $success = true;
        } catch (\Throwable $th) {
            $success = false;
            dd($th);
        }
        return $success;
    }

    public static function getAdministrativeEmails(): array
    {
        return [
            'reservas-gdl@hotelcasinoplaza.mx',
            'jean.langarica@pcbtroniks.com'
        ];
    }
}