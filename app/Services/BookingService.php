<?php

namespace App\Services;

class BookingService {


    public function getDefaultSettings()
    {
        return [
            'currency' => 'MXN',
            'currency_symbol' => '$',
            'adults' => 1,
            'children' => 0,
            'infants' => 0,
            'checkin' => date('Y-m-d'),
            'checkout' => date('Y-m-d', strtotime('+1 day')),
            'nights' => 1,
            'rooms' => 1,
        ];
    }

    public function hasBookingParams($params)
    {
        return $params['checkin'] && $params['checkout'] && $params['adults'] && $params['children'];
    }
}