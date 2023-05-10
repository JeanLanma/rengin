<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class UserController extends Controller
{
    

    public function index()
    {
        return inertia('User/Show', [
            'users' => \App\Repository\Users\User::get(),
        ]);
    }

    public function edit($userID)
    {
        return inertia('User/Edit', [
            'user' => \App\Repository\Users\User::getById($userID),
        ]);
    }

    public function create()
    {
        return inertia('User/Create', [
            'user' => \App\Repository\Users\User::getById(auth()->user()->id),
        ]);
    }

    public function store()
    {
        $user = \App\Repository\Users\User::store(request()->all());
        return redirect()->route('users.index');
    }
}
