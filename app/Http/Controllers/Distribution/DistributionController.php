<?php

namespace App\Http\Controllers\Distribution;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DistributionController extends Controller {  
    
    public function index()
    {
        request()->validate([
            'date' => 'date_format:Y-m-d',
        ]);
        $rate = new \App\Repository\Distribution\Distribution();

        return Inertia::render('Rate/Show', [
            'rate' => $rate->getDistributionForTwoWeeks(4, date('Y-m-d')),
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
