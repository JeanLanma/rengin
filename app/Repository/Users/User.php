<?php

namespace App\Repository\Users;

use App\Models\User as UserModel;
use Illuminate\Support\Facades\Hash;

class User {

    public static function get($limit)
    {
        return UserModel::with('roles')->paginate($limit);
    }

    public static function getById($id)
    {
        return UserModel::with('roles')->find($id);
    }

    public static function store($data)
    {
        $user = UserModel::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
        ]);
        $user->assignRole($data['role'] ?? 'general');
        return $user;
    }

}