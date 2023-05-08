<?php

namespace App\Http\Controllers\Permissions;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;

class PermissionsController extends Controller
{
    public function index()
    {
        return response()->json([
            'permissions' => Permission::all(),
            'roles' => \Spatie\Permission\Models\Role::all(),
        ]);
    }

    public function sync($user, $role)
    {
        $user = \App\Models\User::find($user);
        $role = \Spatie\Permission\Models\Role::find($role);


        $user->syncRoles($role);

        return response()->json([
            'user' => $user,
            'role' => $role,
            'success' => 'Rol asignado correctamente',
            'status' => 'ok'
        ]);
    }
}
