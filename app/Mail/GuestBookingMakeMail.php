<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class GuestBookingMakeMail extends Mailable
{
    use Queueable, SerializesModels;

    public $subject;

    public $data;

    /**
     * Create a new message instance.
     */
    public function __construct($data)
    {
        $this->data = $data;
        $this->subject = 'Confirmación de su reserva - ' . config('app.name');
    }


    /**
     * Build the message.
     */
    public function build()
    {
        return $this->view('emails.guest-booking');
    }
}
