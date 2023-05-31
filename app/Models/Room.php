<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    use HasFactory;

    // Relationships

    public function Booking()
    {
        return $this->hasMany(Booking::class);
    }
}
