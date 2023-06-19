<?php

namespace App\Repository\Booking;

use App\Enums\BookingStatus;
use App\Repository\Distribution\Distribution;
use App\Models\Booking as BookingModel;
use App\Models\Guest as GuestModel;
use App\Repository\Booking\Guest;
use Carbon\Carbon;

class BookingStore {

    public $guest;
    public $guestModel;
    public $distribution;

    public function __construct()
    {
        $this->guest = new Guest();
        $this->guestModel = new GuestModel();
        $this->distribution = new Distribution();
    }

    public function storeBooking($data)
    {
        $guest = $this->saveGuest($data['guest']);
        $booking = $this->insertBooking($data['booking'], $guest, $data['summary']);
        $distribution = $this->updateDistribution($data['booking']['room_type_id'], $data['booking']['checkin'], $data['booking']['checkout'], $data['booking']['rooms']);

        return $booking;
    }

    public function insertBooking($data,GuestModel $guest, $summary)
    {
        $folio = $this->generateBookingFolio($data['room_type_id'], $guest->id, $data['checkin'], $data['nights'], $data['rooms']);
        return BookingModel::create([
            'room_id' => $data['room_type_id'],
            'guest_id' => $guest->id,
            'folio' => $folio,
            'internal_reference' => '',
            'adults' => $data['adults'],
            'children' => $data['children'],
            'infants' => $data['children'] ?? 0,
            'status' => BookingStatus::Pending->value,
            'items' => $data['items'],
            'guest_hotel_requests' => $data['guest_hotel_requests'] ?? '',
            'number_of_rooms' => $data['rooms'],
            'check_in' => date('Y-m-d', strtotime($data['checkin'])) ?? date('Y-m-d'),
            'check_out' => date('Y-m-d', strtotime($data['checkout'])) ??  date('Y-m-d'),
            'nights' => $data['nights'],
            'total_price' => $summary['total'],
            'subtotal_price' => $summary['subtotal'],
            'card_name' => $data['card_name'],
            'card_number' => $data['card_number'],
            'card_expiration' => $data['card_expiration_year'] . '/' . $data['card_expiration_month'],
            'card_cvc' => $data['card_cvc'],
        ]);
    }

    public function saveGuest($data)
    {
        return $this->guest->insertGuest($data);
    }

    public function updateDistribution($roomId, $start_date, $end_date, $rooms_to_reserve)
    {
        $data['start_date'] = $start_date;
        $data['end_date'] = $this->subtractOneDay($end_date);
        $data['availability'] = $rooms_to_reserve;

        return $this->distribution->decrementAvailability($roomId, $data);
    }

    public function generateBookingFolio($roomId, $guestId, $startDate, $nights, $rooms) {
        $folio = 'HCP-R'. $roomId . 'G' . $guestId . 'Q' . $rooms . '-' . strtotime($startDate) . 'N' . $nights . '-' . rand(1000, 9999);
        return $folio;
    }

    public function subtractOneDay($dateString)
    {
        $date = Carbon::parse($dateString);
        $previousDay = $date->subDay()->format('Y-m-d');
        return $previousDay;
    }

    public function saveItemized($itemized)
    {

    }
}