<?php

namespace App\Http\Controllers\Permissions;

use Spatie\Permission\Models\Permission;
use App\Http\Controllers\Controller;
use App\Repository\Permissions\Permission as PermissionsPermission;
use Illuminate\Http\Request;

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
        if(PermissionsPermission::userCan('users.update'))
        {
            $role = PermissionsPermission::syncUserRole($user, $role);
    
            return response()->json([
                'user' => $user,
                'role' => $role,
                'success' => 'Rol asignado correctamente',
                'status' => 'ok',
                'code' => '200'
            ]);
        } else {
            return response()->json([
                'error' => 'No tienes permisos para realizar esta acción',
                'status' => 'error',
                'role' => null,
                'code' => '403'
            ]);
        }

    }
}
