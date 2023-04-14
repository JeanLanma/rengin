<?php

namespace App\Http\Controllers\Rate;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RateController extends Controller
{
    
    public function index()
    {
        $rate = new \App\Repository\Distribution\Distribution();

        return Inertia::render('Rate/Show', [
            'rate' => $rate->getDistributionForTwoWeeks(3, '2023-04-25'),
        ]);
    }

}
