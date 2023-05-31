<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;

class Guest extends Model
{
    use HasFactory;

    protected $appends = [
        'full_name',
    ];

    protected $fillable = [
        'name',
        'lastname',
        'email',
        'phone',
    ];

    // Accessors
    protected function fullName(): Attribute
    {
        return Attribute::make(
            get: fn () => $this->name . ' ' . $this->lastname
        );
    }

    // Relationships

    public function booking()
    {
        return $this->hasMany(Booking::class);
    }
}
