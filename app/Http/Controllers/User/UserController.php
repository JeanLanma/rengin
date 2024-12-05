<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreUserRequest;
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
        return inertia('User/Create');
    }

    public function store(StoreUserRequest $request)
    {
        $user = \App\Repository\Users\User::store($request->all());
        return redirect()->route('users.index');
    }

    public function delete($user)
    {
        if(auth()->user()->can('delete.users')){
            $user = \App\Repository\Users\User::delete($user);
            return redirect()->route('users.index')->banner('El usuario ha sido eliminado correctamente.');
        } else {
            return redirect()->route('users.index')->banner('Lo sentimos, no tienes permisos para realizar esta acción.');
        }
    }
}
