<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\MorphMany;

class Room extends Model
{
    use HasFactory;

    // Attributes

    public function images(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->gallery()->get(),
        );
    }
    
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
