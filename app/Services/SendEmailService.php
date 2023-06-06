<?php

namespace App\Services;

use Illuminate\Support\Facades\Mail;

class SendEmailService {

    public static function sendGuestBooking($booking)
    {
        dd($booking['guest']['email']);
        self::sendNewBooking($booking);
        try {
            return Mail::to($booking['guest']['email'])->send(new \App\Mail\GuestBookingMakeMail($booking));
        } catch (\Throwable $th) {
            return;
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
            return;
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