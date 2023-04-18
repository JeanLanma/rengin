<?php

namespace App\Repository\Distribution;
use Illuminate\Support\Facades\DB;


class Distribution {

    # Getters

    public function GetDistribution($room_id, $start_date, $end_date)
    {
        return DB::table('distribution')->where('room_id', $room_id)->where('date', '>=', $start_date)->where('date', '<=', $end_date)->get();
    }

    public function getDistributionForTwoWeeks($room_id, $start_date)
    {
        $end_date = date('Y-m-d', strtotime($start_date . ' +13 day'));
        return self::formatDistributionDates(self::GetDistribution($room_id, $start_date, $end_date));
    }

    public function formatDistributionDates($distribution)
    {
        $fmt = new \IntlDateFormatter(
            'es_ES',
            \IntlDateFormatter::FULL,
            \IntlDateFormatter::FULL,
            'America/Mexico_City',
            \IntlDateFormatter::GREGORIAN,
            'EEE'
        );
        $formatted = [];

        foreach ($distribution as $key => $value) {
            
            $formatted[] = $value;
            # extract day from date
            $value->day = date('d', strtotime($value->date));
            # extract day name from date
            $value->day_name = ucfirst(datefmt_format($fmt, strtotime($value->date)));

        }

        return $formatted;
    }

    public function getDistributionByDateLimit($room_id, $start_date, $limit)
    {
        return DB::table('distribution')->where('room_id', $room_id)->where('date', '>=', $start_date)->limit($limit)->get();
    }

    # Setters

    public static function RegisterNewRoomDistributionForOneYear($room_id, $start_date, $price, $availability, $status = 'available')
    {
        $data = [];

        for ($i = 0; $i < 365; $i++) {
            $data[] = [
                'room_id' => $room_id,
                'price' => $price,
                'status' => $status,
                'date' => $start_date,
                'availability' => $availability,
                'created_at' => date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s'),
            ];
            $start_date = date('Y-m-d', strtotime($start_date . ' +1 day'));
        }

        return DB::table('distribution')->insert($data);
    }

    public static function SetDistributionByDates($roomId, $price, $start_date, $end_date)
    {
        $data = [];
        $dateAccumulator = $start_date;

        $dateDiff = date_diff(date_create($start_date), date_create($end_date));

        for ($i = 0; $i < $dateDiff->format('%a'); $i++) {
            $data[] = [
                'room_id' => $roomId,
                'price' => $price,
                'date' => $dateAccumulator,
            ];
            $dateAccumulator = date('Y-m-d', strtotime($dateAccumulator . ' +1 day'));
        }

        return DB::table('distribution')->insert($data);
    }

    public function RegisterRoom($room_id, $start_date, $price, $availability, $status = 'available')
    {
        return self::RegisterNewRoomDistributionForOneYear($room_id, $start_date, $price, $availability, $status);
    }

    # Updaters

    public function updateSingleRoomPrice($room_id, $date, $price)
    {
        return DB::table('distribution')->where('room_id', $room_id)->where('date', $date)->update(['price' => $price]);
    }

    public function updateRoomPrice($room_id, $prcie, $start_date, $end_date)
    {
        $distribution = DB::table('distribution')->where('room_id', $room_id)->where('date', '>=', $start_date)->where('date', '<=', $end_date)->get();

        if ($distribution->count() > 0) {
            return DB::table('distribution')->where('room_id', $room_id)->where('date', '>=', $start_date)->where('date', '<=', $end_date)->update(['price' => $prcie]);
        } else {
            return self::SetDistributionByDates($room_id, $prcie, $start_date, $end_date);
        }
    }

    public function updateRoomAvailability($room_id, $availability, $start_date, $end_date)
    {
        $distribution = DB::table('distribution')->where('room_id', $room_id)->where('date', '>=', $start_date)->where('date', '<=', $end_date)->get();

        if ($distribution->count() > 0) {
            return DB::table('distribution')->where('room_id', $room_id)->where('date', '>=', $start_date)->where('date', '<=', $end_date)->update(['availability' => $availability]);
        } else {
            return self::SetDistributionByDates($room_id, 0, $start_date, $end_date);
        }
    }

    public function updateRoomPriceAndAvailability($room_id, $price, $availability, $start_date, $end_date)
    {
        $distribution = DB::table('distribution')->where('room_id', $room_id)->where('date', '>=', $start_date)->where('date', '<=', $end_date)->get();

        if ($distribution->count() > 0) {
            return DB::table('distribution')->where('room_id', $room_id)->where('date', '>=', $start_date)->where('date', '<=', $end_date)->update(['price' => $price, 'availability' => $availability]);
        } else {
            return false;
        }
    }

    public function updateMultipleById($data)
    {
        $response = [];
        foreach ($data as $key => $value) {
            $response[] = ['id' => $value['id'], 'price' => $this->formatPrice($value['price']), 'success' => DB::table('distribution')->where('id', $value['id'])->update(['price' => $value['price'], 'availability' => $value['availability']])];
        }

        return $response;
    }

    public function formatPrice($price)
    {
        return number_format($price, 2, '.', ',');
    }

    # Validators

    public function isDateValid($date)
    {
        $date = date('Y-m-d', strtotime($date));
        $date = date_create($date);
        $now = date_create(date('Y-m-d'));
        $diff = date_diff($date, $now);

        if ($diff->format('%R%a') < 0) {
            return true;
        } else {
            return false;
        }
    }
}