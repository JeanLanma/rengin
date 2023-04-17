<?php

namespace App\Http\Controllers\Distribution;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DistributionController extends Controller {  
    
    public function index()
    {

        $room = new \App\Repository\Rooms\Room();

        return Inertia::render('Rate/ListRooms', [
            'rooms' => $room->getPaginate(),
        ]);
    }

    public function getByRoomId($roomId, $date = null)
    {
        $rate = new \App\Repository\Distribution\Distribution();
        $room = new \App\Repository\Rooms\Room();
        $date = $rate->isDateValid($date) ? $date : date('Y-m-d');

        return Inertia::render('Rate/Show', [
            'rate' => $rate->getDistributionForTwoWeeks($roomId, $date),
            'room' => $room->find($roomId),
            'start_date' => $date,
        ]);
    }

}
