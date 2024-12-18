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
        return inertia('Rooms/Index', [
            'rooms' => RoomRepository::getPaginate()
        ]);
    }

    public function create()
    {
        return inertia('Rooms/Create');
    }

    public function store(StoreRoomRequest $request, RoomRepository $roomRepository)
    {

        $room = $request->validated();

        $room['cover'] = $request->file('cover')->store('rooms', 'public');

        $roomRepository->save($room);

        return redirect()->route('rooms.index')->banner('¡Habitación creada con éxito!');
    }

    public function edit(RoomRepository $roomRepository, $roomId)
    {
        $room = $roomRepository->find($roomId);

        return inertia('Rooms/Edit', [
            'room' => $room
        ]);
    }

    public function update(StoreRoomRequest $request, RoomRepository $roomRepository, $roomId)
    {
        $room = $request->validated();
        if($request->hasFile('cover') && $room['cover'] != null) {
            $room['cover'] = RoomRepository::UpdateImage($roomId, request()->file('cover'));
        }
        if ($room['cover'] === null) {
            unset($room['cover']);
        }
        $roomRepository->findAndUpdate($roomId, $room);
        return redirect()->route('rooms.index')->banner('¡Habitación actualizada con éxito!');
    }

    public function destroy(RoomRepository $roomRepository, $roomId)
    {
        $roomRepository->findAndDelete($roomId);
        return redirect()->route('rooms.index')->banner('¡Habitación eliminada con éxito!');
    }
}
