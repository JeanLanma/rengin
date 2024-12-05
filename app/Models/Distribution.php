<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Distribution extends Model
{
    use HasFactory;

    // Relationships

    public function booking()
    {
        return $this->belongsTo(Booking::class);
    }
}
