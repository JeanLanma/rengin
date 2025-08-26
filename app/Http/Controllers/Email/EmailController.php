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
        Mail::to($To)->queue(new \App\Mail\GuestBookingMakeMail($booking));
        return view('emails.guest-booking', [
            'data' => $booking,
        ]);
    }

    public function adminBooking(BookingModel $booking)
    {
        $To = request()->has('to') ? request()->to : 'desarrollo.software@pcbtroniks.com';
        if(request()->has('cc')){
            Mail::to($To)->cc(request()->cc)->queue(new \App\Mail\AdminConfirmationBooking($booking));
        }
        if(request()->has('send') && request()->send == true){
            Mail::to($To)->queue(new \App\Mail\AdminConfirmationBooking($booking));
            return redirect()->back()->with('success', 'Email enviado correctamente');
        }
        return view('emails.admin-booking', [
            'data' => $booking,
        ]);
    }
}
