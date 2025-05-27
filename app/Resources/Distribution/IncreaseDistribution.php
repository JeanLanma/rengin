<?php

namespace App\Resources\Distribution;

use App\Repository\Distribution\Distribution;
use Illuminate\Support\Facades\DB;

class IncreaseDistribution {

    public static function increaseDistribution($room_id)
    {
        $Distribution = DB::table('distribution')->where('room_id', $room_id)->orderBy('date', 'desc')->first();
        $LastDistributionDate = $Distribution ? $Distribution->date : date('Y-m-d');

        $NewDistributionDate = date('Y-m-d', strtotime($LastDistributionDate . ' +1 day'));
        $NewDistributionDateEnd = date('Y-m-d', strtotime($NewDistributionDate . ' +365 day'));
        return [
            'LastDistributionDate' => $LastDistributionDate,
            'NewDistributionDate' => $NewDistributionDate,
            'NewDistributionDateEnd' => $NewDistributionDateEnd,
            'Distribution' => $Distribution,
            'result' => Distribution::RegisterNewRoomDistributionForOneYear($room_id, $NewDistributionDate, $Distribution->price, 0)
        ];
    }

}