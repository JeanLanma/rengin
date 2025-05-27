<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class NewBookingMakeMail extends Mailable
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
        $this->subject = 'Reservación web rengin ' . $this->data['folio'];
    }


    /**
     * Build the message.
     */
    public function build()
    {
        return $this->view('emails.guest-booking');
    }
}
