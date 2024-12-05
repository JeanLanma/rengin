<?php

namespace App\Http\Controllers\Distribution;

use App\Http\Controllers\Controller;
use App\Resources\Distribution\IncreaseDistribution;
use Illuminate\Http\Request;

class IncreaseDistributionController extends Controller
{
    public function increaseDistribution(Request $request, $room_id, $years = 1)
    {
        return response()->json([
            'message' => 'Increase distribution',
            'room_id' => $room_id,
            'years' => $years,
            'data' => IncreaseDistribution::increaseDistribution($request->room_id)
        ]);
    }
}
