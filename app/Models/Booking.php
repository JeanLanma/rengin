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
        'children',
        'minors',
        'internal_reference',
        'check_in',
        'check_out',
        'nights',
        'number_of_rooms',
        'total_price',
        'subtotal_price',
        'status',
        'guest_hotel_requests',
    ];
}
