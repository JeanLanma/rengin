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
            'checkin' => date('Y-m-d'),
            'checkout' => date('Y-m-d', strtotime('+1 day')),
            'nights' => 1
        ];
    }

    public function hasBookingParams($params)
    {
        $params = $params ?? $this->getDefaultSettings();
        $params['checkin'] = $params['checkin'] ?? date('Y-m-d');
        $params['checkout'] = $params['checkout'] ?? date('Y-m-d', strtotime('+1 day'));
        return $params;
    }
}