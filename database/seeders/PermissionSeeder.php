<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Spatie\Permission\PermissionRegistrar;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Reset cached roles and permissions
        app()[PermissionRegistrar::class]->forgetCachedPermissions();

        // Create Roles
        $admin = Role::create(['name' => 'admin']);
        $ventas = Role::create(['name' => 'ventas']);
        $general = Role::create(['name' => 'general']);

        // create permissions
        Permission::create(['name' => 'bookings.show'])->syncRoles([$general, $ventas]);
        Permission::create(['name' => 'bookings.confirm'])->assignRole($ventas);
        Permission::create(['name' => 'bookings.update'])->assignRole($ventas);

        Permission::create(['name' => 'distribution.show'])->syncRoles([$general, $ventas]);
        Permission::create(['name' => 'distribution.update'])->assignRole($ventas);
        
        Permission::create(['name' => 'dashboard.show'])->assignRole($ventas);

        Permission::create(['name' => 'rooms.show'])->syncRoles([$general, $ventas]);
        Permission::create(['name' => 'rooms.create'])->assignRole($ventas);
        Permission::create(['name' => 'rooms.update'])->assignRole($ventas);
        Permission::create(['name' => 'rooms.edit'])->assignRole($ventas);
        Permission::create(['name' => 'rooms.delete'])->assignRole($ventas);

        Permission::create(['name' => 'users.show']);
        Permission::create(['name' => 'users.update']);
        Permission::create(['name' => 'users.create']);
        Permission::create(['name' => 'users.delete']);

        // create roles and assign existing permissions
        $admin->givePermissionTo(Permission::all());
    
    }
}
