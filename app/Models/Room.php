<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Room extends Model
{
    use HasFactory;

    // Relationships

    public function Booking()
    {
        return $this->hasMany(Booking::class);
    }

    public function gallery(): MorphMany
    {
        return $this->morphMany(Image::class, 'gallery');
    }
}
