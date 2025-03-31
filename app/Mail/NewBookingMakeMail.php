<?php

namespace App\Mail;

use App\Services\PropertySettingsService;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class NewBookingMakeMail extends Mailable
{
    use Queueable, SerializesModels;

    protected $property;
    public $subject;
    public $data;

    /**
     * Create a new message instance.
     */
    public function __construct($data)
    {
        $this->data = $data;
        $this->subject = 'Reservación web rengin ' . $this->data['folio'];
        $this->property = PropertySettingsService::PropertyData();
    }


    /**
     * Build the message.
     */
    public function build()
    {
        return $this->view('emails.guest-booking');
    }
}
