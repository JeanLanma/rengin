<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;

    protected $fillable = [
        'room_id',
        'guest_id',
        'folio',
        'adults',
        'minors',
        'internal_reference',
        'check_in',
        'check_out',
        'currency',
        'number_of_rooms',
        'total_price',
        'subtotal_price',
        'status',
    ];
}
