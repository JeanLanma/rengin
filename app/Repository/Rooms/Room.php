<?php

namespace App\Repository\Rooms;

use Illuminate\Support\Facades\DB;

class Room {

    public static function getPaginate($limit = 5)
    {
        return DB::table('rooms')->paginate($limit);
    }

    public function save($room)
    {
        // Save room
        DB::table('rooms')->insert($room);           
    }

}