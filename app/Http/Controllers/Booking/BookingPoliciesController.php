<?php

namespace App\Http\Controllers\Booking;

use App\Http\Controllers\Controller;

class BookingPoliciesController extends Controller
{
    public function index()
    {
        return inertia('BookingPolicies/Index');
    }

    public function policies()
    {
        return view('front.policies.index');
    }
}