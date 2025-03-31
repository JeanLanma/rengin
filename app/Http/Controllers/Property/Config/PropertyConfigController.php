<?php

namespace App\Http\Controllers\Property\Config;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PropertyConfigController extends Controller
{
    public function index()
    {
        return inertia('Property/Config/Show');
    }
}
