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
        \App\Models\User::factory()->create([
            'name' => 'Jean Langarica',
            'email' => 'jean.langarica@pcbtroniks.com',
            'password' => Hash::make('123123123'),
        ]);
        \App\Models\User::factory()->create([
            'name' => 'Daniel Rivera',
            'email' => 'daniel.rivera@pcbtroniks.com',
            'password' => Hash::make('123123123'),
        ]);
        \App\Models\User::factory()->create([
            'name' => 'Recepcion Hotel',
            'email' => 'ejecutivaventas@hotelcasinoplaza.mx',
            'password' => Hash::make('Recepcion@2700'),
        ]);

        $this->call(PermissionSeeder::class);
    }
}
