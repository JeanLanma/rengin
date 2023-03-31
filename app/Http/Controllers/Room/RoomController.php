<?php

namespace App\Http\Controllers\Room;

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

    public function store(Request $request)
    {
        return $request->all();
    }

}
