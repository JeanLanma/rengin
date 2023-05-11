<?php

namespace App\Repository\Permissions;

class Permission {

    public static function userCan($permission)
    {
        if(!auth()->user()) 
        {
            return false;
        }

        return auth()->user()->can($permission);
    }

    public static function syncUserRole($user, $role)
    {
        $user = \App\Models\User::find($user);
        $role = \Spatie\Permission\Models\Role::find($role);

        $user->syncRoles($role);

        return $role;
    }
}