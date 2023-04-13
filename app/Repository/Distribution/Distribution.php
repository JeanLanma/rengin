<?php

namespace App\Repository\Distribution;
use Illuminate\Support\Facades\DB;


class Distribution {

    public function GetDistribution($room_id, $start_date, $end_date)
    {
        return DB::table('distribution')->where('room_id', $room_id)->where('date', '>=', $start_date)->where('date', '<=', $end_date)->get();
    }

    public function getDistributionForTwoWeeks($room_id, $start_date)
    {
        $end_date = date('Y-m-d', strtotime($start_date . ' +14 day'));
        return self::GetDistribution($room_id, $start_date, $end_date);
    }

    public function getDistributionByDateLimit($room_id, $start_date, $limit)
    {
        return DB::table('distribution')->where('room_id', $room_id)->where('date', '>=', $start_date)->limit($limit)->get();
    }

    public static function RegisterNewRoomDistributionForOneYear($room_id, $price, $start_date)
    {
        $data = [];

        for ($i = 0; $i < 365; $i++) {
            $data[] = [
                'room_id' => $room_id,
                'price' => $price,
                'date' => $start_date,
            ];
            $start_date = date('Y-m-d', strtotime($start_date . ' +1 day'));
        }

        return DB::table('distribution')->insert($data);
    }

    public function RegisterRoom($room_id, $price, $start_date)
    {
        return self::RegisterNewRoomDistributionForOneYear($room_id, $price, $start_date);
    }

    public function UpdateRoom($room_id, $price, $start_date)
    {
        $distribution = DB::table('distribution')->where('room_id', $room_id)->where('date', '>=', $start_date)->get();

        if ($distribution->count() > 0) {
            $data = [];
            foreach ($distribution as $item) {
                $data[] = [
                    'id' => $item->id,
                    'price' => $price,
                ];
            }
            return DB::table('distribution')->update($data);
        } else {
            return self::RegisterNewRoomDistributionForOneYear($room_id, $price, $start_date);
        }
    }

}