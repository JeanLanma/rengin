<?php

namespace App\Services;

class BookingService {


    /**
     * Default Settings to booking a room
     * @return Array
     */
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

    public static function DefaultSettings() 
    {
        return  (new static)->getDefaultSettings();
    }

    public function hasBookingParams($params)
    {
        return $params['checkin'] && $params['checkout'] && $params['adults'] && $params['children'];
    }
}