<?php

namespace App\Repository\Rooms;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class Room {

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

    public static function UpdateImage($roomId, $image)
    {
        // Delete old cover
        $oldCover = DB::table('rooms')->where('id', $roomId)->first()->cover;
        
        Storage::disk('public')->delete($oldCover);

        // Update cover
        return Storage::disk('public')->put('rooms', $image);
    }

}