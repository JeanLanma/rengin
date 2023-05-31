<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;
use App\Models\Distribution;
use App\Models\Guest;
use App\Models\Room;
use Carbon\Carbon;
class Booking extends Model
{
    use HasFactory;

    protected $appends = [
        'check_in_formatted',
        'check_out_formatted',
        'total_price_formatted',
    ];

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
        'card_name',
        'card_number',
        'card_expiration',
        'card_cvc',
        'status',
        'guest_hotel_requests',
    ];

    // Helpers

    /**
     * Format check in date to "Mier, 31 de Mayo, 2024"
     */
    protected function checkInFormatted(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => ucfirst(Carbon::parse($value)->isoFormat('ddd D [de] MMMM [de] YYYY'))
        );
    }
    /**
     * Format check in date to "Mier, 31 de Mayo, 2024"
     */
    protected function checkOutFormatted(): Attribute
    {
        return Attribute::make(
            get: fn ($value) => ucfirst(Carbon::parse($value)->isoFormat('ddd D [de] MMMM [de] YYYY'))
        );
    }

    protected function totalPriceFormatted(): Attribute
    {
        return Attribute::make(
            get: fn () => '$' . number_format($this->total_price, 2)
        );
    }

    // Relatonships

    public function room()
    {
        return $this->belongsTo(Room::class);
    }

    public function guest()
    {
        return $this->belongsTo(Guest::class);
    }

    public function distribution()
    {
        return $this->hasMany(Distribution::class);
    }
}
