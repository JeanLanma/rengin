<?php

namespace App\Http\Controllers\Rate;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class RateController extends Controller
{
    
    public function index()
    {
        return Inertia::render('Rate/Show');
    }

}
