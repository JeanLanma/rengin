<?php

namespace App\Http\Middleware\Booking;

use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Validator;
use App\Services\BookingService;
use Illuminate\Support\Carbon;
use Illuminate\Http\Request;
use Closure;


class HandleDirectBookingRequest
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $queryParams = $request->query->all();
        $normalizedParams = $this->normalizeParams($queryParams, $this->getBookingParams());
        if ($queryParams != $normalizedParams) {
            $request->query->replace($normalizedParams);
            return redirect()->route('booking', $request->query->all());
        }
        return $next($request);
    }

    private function normalizeParams($requestParams, $defaultParams) 
    {
        return array_merge($defaultParams, $requestParams);
    }

    private function getBookingParams(){
        return BookingService::DefaultSettings();
    }

    private function hasBookingParams($data)
    {
        return !Validator::make($data, $this->getBookingRules())->fails();
    }

    private function getBookingRules()
    {
        $today = Carbon::today()->format('Y-m-d');
        $tomorrow = Carbon::tomorrow()->format('Y-m-d');
        return [
            'adults' => ['required', 'integer', 'min:1'],
            'children' => ['required', 'integer', 'min:0'],
            'checkin' => ['required', 'date', 'after_or_equal:' . $today],
            'checkout' => ['required', 'date', 'after_or_equal:' . $tomorrow],
        ];   
    }
}
