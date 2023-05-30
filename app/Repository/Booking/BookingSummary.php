<?php

namespace App\Repository\Booking;

use Illuminate\Support\Carbon;

class BookingSummary {

    public $distribution;
    public $municipal;
    public $request;
    public $iva;
    public $taxes;

    private $subtotalPrice;
    private $totalPrice;

    private $totalPax;
    private $totalRoomsNeededByPax;
    private $totalRoomsAvailable;
    private $totalRoomsNeeded;

    /**
     * Get Distribution collection and return a quote
     */
    public function __construct($DistributionCollection, $request)
    {
        $this->distribution = $DistributionCollection;
        $this->request = $request;

        $this->iva = .16;
        $this->municipal = .03;
        $this->summarize();
    }

    public function summarize()
    {
        $this->totalPax = $this->getTotalPax();
        $this->totalRoomsAvailable = $this->distribution['availability'];
        $this->totalRoomsNeededByPax = $this->getRoomsNeededByPax();
        $this->totalRoomsNeeded = $this->calculateNecessaryRooms();

    }

    public function getSummary()
    {

        $this->subtotalPrice = $this->calculateSubtotalPrice();
        $this->totalPrice = $this->calculateTotalPrice();

        return [
            'has_enough_rooms' => $this->hasEnoghRooms(),
            'total_rooms_needed_by_pax' => $this->totalRoomsNeededByPax,
            'total_rooms_needed' => $this->totalRoomsNeeded,
            'total_rooms_available' => $this->distribution['availability'],
            'itemized' => [

            ],
            'total_price_string' => $this->formatPrice($this->totalPrice),
            'subtotal_price_string' => $this->formatPrice($this->subtotalPrice),
            'total_pax' => $this->totalPax,
            'total_price' => $this->totalPrice,
            'subtotal_price' => $this->subtotalPrice,
            'taxed_price_string' => $this->formatPrice($this->calculateTaxPrice()),
            'taxes' => [
                'iva' => $this->iva,
                'municipal' => $this->municipal,
                'total' => $this->getTax(),
            ],
            'checkin_string' => $this->formatCheckoutDate($this->request['checkin']),
            'checkout_string' => $this->formatCheckoutDate($this->request['checkout']),
            'checkin' => $this->request['checkin'],
            'checkout' => $this->request['checkout'],
            'nights' => $this->request['nights'],
            'currency' => 'MXN',
            'adults' => $this->request['adults'],
            'children' => $this->request['children'],
            'infants' => $this->request['infants'],
            'rooms' => $this->request['rooms'],
        ];
    }

    /**
     * Get the quote with the total price before taxes
    */
    public function beforeTaxes()
    {
        return $this->subtotalPrice;
    }

    public function getItemized(){

    }

    public function getTax(){
        return ($this->iva + $this->municipal);
    }

    //  Getters

    public function getDistribution()
    {
        return $this->distribution;
    }

    public function getTotalPax()
    {
        return ($this->request['adults'] + $this->request['children']);
    }

    public function getRoomsNeededByPax()
    {
        return ceil($this->totalPax / $this->distribution['room']['maxCapacity']);
    }

    public function getTotalPrice()
    {
        return $this->totalPrice;
    }

    public function getSubtotalPrice()
    {
        return $this->subtotalPrice;
    }

    // setters

    public function setTaxes($iva, $municipal)
    {
        $this->iva = $iva;
        $this->municipal = $municipal;
    }

    public function setIva($iva)
    {
        $this->iva = $iva;
    }

    public function setMunicipal($municipal)
    {
        $this->municipal = $municipal;
    }

    //  Calculations

    public function calculateNecessaryRooms()
    {
        return ($this->totalRoomsNeededByPax > $this->request['rooms'])
                                ? $this->totalRoomsNeededByPax
                                : $this->request['rooms'];
    }

    public function calculateSubtotalPrice()
    {
        return $this->distribution['price'] * $this->totalRoomsNeeded;
    }

    public function calculateTotalPrice()
    {
        return $this->subtotalPrice + $this->calculateTaxPrice();
    }

    public function calculateTaxPrice()
    {
        return ($this->subtotalPrice * $this->getTax());
    }

    //  Helpers

    public function hasEnoghRooms()
    {
        return ($this->totalRoomsNeededByPax <= $this->totalRoomsAvailable);
    }

    public function formatPrice(int $price)
    {
        return '$' . number_format($price, 2, '.', ',');
    }

    /**
     * Format a date to string "Vier, 28 de Mayo, 2023"
     * 
     * @param string $date
     * @return string
     */
    public function formatCheckoutDate($date)
    {
        return Carbon::parse($date)->locale('es')->isoFormat('ddd D [de] MMMM, YYYY');
    }

}