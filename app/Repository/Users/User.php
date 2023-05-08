<?php

namespace App\Repository\Users;

use App\Models\User as UserModel;

class User {

    public static function get($limit)
    {
        return UserModel::with('roles')->paginate($limit);
    }

}