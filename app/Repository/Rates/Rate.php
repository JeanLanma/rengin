<?php

namespace App\Repository\Rates;

use Illuminate\Support\Facades\DB;

class Rate {

    public function find($id)
    {
        return DB::table('rooms')->where('id', $id)->first();
    }

    public static function getPaginate($limit = 5)
    {
        return DB::table('rooms')->paginate($limit);
    }

    public function save($room)
    {
        // Save room
        DB::table('rooms')->insert($room);           
    }

    public function findAndUpdate($roomId, $room)
    {
        // Update room
        DB::table('rooms')->where('id', $roomId)->update($room);
    }

}