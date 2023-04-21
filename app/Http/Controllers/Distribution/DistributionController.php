<?php

namespace App\Http\Controllers\Distribution;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DistributionController extends Controller {

    private $distribution;

    public function __construct()
    {
        $this->distribution = new \App\Repository\Distribution\Distribution();
    }
    
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

    public function update($roomId, $date)
    {
        dd(request()->all());
        $distribution = new \App\Repository\Distribution\Distribution();
        $date = $distribution->isDateValid($date) ? $date : date('Y-m-d');

        $distribution->updateSingleRoomPrice($roomId, $date, request()->price);

        return redirect()->route('distribution.getByRoomId', ['roomId' => $roomId, 'date' => $date]);
    }

    public function updateMultiple()
    {
        $this->distribution->updateMultipleById(request()->data);
        return redirect()->route('distribution.getByRoomId', ['roomId' => request()->data[0]['room_id']])->withBanner('Distribución actualizada');
    }

    public function updatePeriod()
    {
        dd(request()->all());
        $this->distribution->updatePeriod(request()->data);
    }
}
