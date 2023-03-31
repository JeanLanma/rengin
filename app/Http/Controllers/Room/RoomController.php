<?php

namespace App\Http\Controllers\Room;

use App\Repository\Rooms\Room as RoomRepository;
use App\Http\Requests\StoreRoomRequest;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class RoomController extends Controller
{
    
    public function index()
    {
        return inertia('Rooms/Index');
    }

    public function create()
    {
        return inertia('Rooms/Create');
    }

    public function store(StoreRoomRequest $request, RoomRepository $roomRepository)
    {
        $room = $request->validated();

        $room['cover'] = $request->file('cover')->store('rooms');

        $roomRepository->save($room);

        return redirect()->route('rooms.index')->banner('¡Habitación creada con éxito!');
    }

}
