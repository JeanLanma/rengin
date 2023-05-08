<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    

    public function index()
    {
        return inertia('User/Show', [
            'users' => \App\Repository\Users\User::get(10),
        ]);
    }

    public function edit($userID)
    {
        return inertia('User/Edit', [
            'user' => \App\Repository\Users\User::getById($userID),
        ]);
    }
}
