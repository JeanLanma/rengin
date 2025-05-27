<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $user = \App\Models\User::factory()->create([
            'name' => 'Desarrollo Software',
            'email' => 'desarrollo.software@pcbtroniks.com',
            'password' => Hash::make('123123123'),
        ]);

        $this->call(PermissionSeeder::class);

        $user->assignRole('admin');
    }
}
