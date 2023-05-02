<?php

namespace App\Repository\Booking;

use App\Http\Requests\GetBookingRequest;
use Illuminate\Support\Facades\DB;

class Booking {

    /**
     * Get rooms availability and price for a booking
     */
    public function getAvailabilityDate($data)
    {
        $dates = [$data['checkin'], $data['checkout']];
        $distribution = DB::table('distribution')
                    ->whereIn('date', $dates)
                    ->where('availability', '>', 0)
                    ->where('status', 'available')
                    ->get(['room_id','date', 'availability', 'price', 'status']);

        return $distribution;
        if ($distribution->count() !== count($dates)) {
            // Al menos una de las fechas no está disponible
            // Aquí puedes manejar esta situación, por ejemplo:
            return response()->json([
                'error' => 'Al menos una de las fechas no está disponible.',
            ], 400);
        }
    }

}