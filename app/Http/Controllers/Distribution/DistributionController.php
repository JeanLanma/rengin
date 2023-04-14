<?php

namespace App\Http\Controllers\Distribution;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DistributionController extends Controller {  
    
    public function index()
    {
        $rate = new \App\Repository\Distribution\Distribution();

        return Inertia::render('Rate/Show', [
            'rate' => $rate->getDistributionForTwoWeeks(4, date('Y-m-d')),
        ]);
    }

    public function getByRoomId($roomId, $date = null)
    {
        $rate = new \App\Repository\Distribution\Distribution();
        $date = $date ?? date('Y-m-d');

        return Inertia::render('Rate/Show', [
            'rate' => $rate->getDistributionForTwoWeeks($roomId, date('Y-m-d')),
        ]);
    }

}
