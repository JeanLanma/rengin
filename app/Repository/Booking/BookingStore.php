<?php

namespace App\Repository\Booking;

use App\Repository\Distribution\Distribution;
use App\Models\Booking as BookingModel;
use App\Models\Guest as GuestModel;
use App\Repository\Booking\Guest;

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

        return true;
    }

    public function insertBooking($data,GuestModel $guest, $summary)
    {
        $folio = $this->generateBookingFolio($data['room_type_id'], $guest->id, $data['checkin'], $data['checkout'], $data['rooms']);
        return BookingModel::create([
            'room_id' => $data['room_type_id'],
            'guest_id' => $guest->id,
            'folio' => $folio,
            'internal_reference' => '',
            'adults' => $data['adults'],
            'children' => $data['children'],
            'infants' => $data['children'] ?? 0,
            'status' => 'pending',
            'guest_hotel_requests' => $data['guest_hotel_requests'] ?? '',
            'number_of_rooms' => $data['rooms'],
            'check_in' => date('Y-m-d', strtotime($data['checkin'])) ?? date('Y-m-d'),
            'check_out' => date('Y-m-d', strtotime($data['checkout'])) ??  date('Y-m-d'),
            'nights' => $data['nights'],
            'total_price' => $summary['total'],
            'subtotal_price' => $summary['subtotal'],
        ]);
    }

    public function saveGuest($data)
    {
        return $this->guest->insertOrGet($data);
    }

    public function updateDistribution($roomId, $start_date, $end_date, $rooms_to_reserve)
    {
        $data['start_date'] = $start_date;
        $data['end_date'] = $end_date;
        $data['availability'] = $rooms_to_reserve;

        return $this->distribution->decrementAvailability($roomId, $data);
    }

    public function generateBookingFolio($roomId, $guestId, $startDate, $endDate, $rooms) {
        $folio = 'HCP'. $rooms . $roomId . '-' . $guestId . '-' . strtotime($startDate) . '-' . strtotime($endDate);
        return $folio;
      }
}