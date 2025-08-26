<?php

namespace App\Http\Controllers\Booking;

use App\Services\PropertySettingsService;
use App\Http\Controllers\Controller;

class BookingPoliciesController extends Controller
{
    public function index()
    {
        return inertia('BookingPolicies/Index',[
            'property' => PropertySettingsService::PropertyData(),
        ]);
    }

    public function policies()
    {
        return view('front.policies.index');
    }
}