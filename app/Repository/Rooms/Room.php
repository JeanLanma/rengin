<?php

namespace App\Repository\Rooms;

use Illuminate\Support\Facades\DB;

class Room {

    public function save($room)
    {
        // Save room
        DB::table('rooms')->insert($room);           
    }

}