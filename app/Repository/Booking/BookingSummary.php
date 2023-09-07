<?php

namespace App\Repository\Booking;

use Illuminate\Support\Carbon;
use App\Traits\NumberFormat;

class BookingSummary {
    use NumberFormat;

    public $distribution;
    public $request;

    public $iva;
    public $municipal;
    public $taxes;

    private $cleanPrice;
    private $subtotalPrice;
    private $totalPrice;
    private $extraPersonPrice;
    private $extraGuests;

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
        $this->totalRoomsAvailable = $this->distribution['total_availability_for_period'];
        $this->totalRoomsNeededByPax = $this->getRoomsNeededByPax();
        $this->totalRoomsNeeded = $this->calculateNecessaryRooms();
        $this->extraPersonPrice = $this->calculateExtraPersonPrice() ?? 00.0;
    }

    public function getSummary()
    {

        $this->cleanPrice = $this->calculateSubtotalPrice();
        $this->subtotalPrice = $this->addExtraPersonPriceTo($this->calculateSubtotalPrice());
        $this->totalPrice = $this->calculateTotalPrice();
        return [
            'has_enough_rooms' => $this->hasEnoughRooms(),
            'total_rooms_needed_by_pax' => $this->totalRoomsNeededByPax,
            'total_rooms_needed' => $this->totalRoomsNeeded,
            'total_rooms_available' => $this->distribution['availability'],
            'itemized' => [
                'has_extra_person' => ($this->extraGuests > 0) ? true : false,
                'number_of_extra_guests' => $this->extraGuests,
                'itemized_price' => $this->setItemized(),
            ],
            'extra_person_price' => $this->extraPersonPrice,
            'extra_person_price_string' => $this->formatPrice($this->extraPersonPrice),
            'total_price_string' => $this->formatPrice($this->totalPrice),
            'subtotal_price_string' => $this->formatPrice($this->subtotalPrice),
            'total_pax' => $this->totalPax,
            'total_price' => $this->totalPrice,
            'subtotal_price' => $this->subtotalPrice,
            'taxed_price_string' => $this->formatPrice($this->calculateTaxPrice()),
            'clean_price' => $this->cleanPrice,
            'clean_price_string' => $this->formatPrice($this->cleanPrice),
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
        $beforeTaxes = $this->subtotalPrice;
        return $beforeTaxes;
    }

    public function setItemized(){
        $recalculated = [];
        if($this->extraGuests > 0){
            foreach($this->distribution['itemized_price'] as $item){
                
                $itemized = $item;
                $itemized['string'] = $item['string'] . ' mas ' . $this->extraGuests . ' persona(s)';;
                $recalculated[] = $itemized;
                
            }
        }
        return $recalculated;
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

    /**
     * Get the number of rooms needed by the total pax
     * @return int
     * 
     * Eg. 5 pax, 2 max capacity per room = 3 rooms
     */
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

    public function getExtraPersonPrice()
    {
        return $this->extraPersonPrice;
    }

    public function addExtraPersonPriceTo($price)
    {
        return $price += $this->extraPersonPrice;
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

    public function calculateExtraPersonPrice()
    {
        $baseCapacity = ($this->distribution['room']['baseCapacity'] * $this->totalRoomsNeeded);
        $this->extraGuests = ($this->totalPax - $baseCapacity);
        if ($this->extraGuests <= 0) {
            return 0;
        }
        $extraPersonPrice = (($this->distribution['room']['extra_person_price'] * $this->extraGuests) * $this->request['nights']);
        return $extraPersonPrice;
    }

    //  Helpers

    /**
     * Check if the distribution has enough rooms for the request
     * totalRoomsNeededByPax * nights <= totalRoomsAvailable
     * @return bool
     * example: 2 rooms for 2 nights = 4, 4 rooms available = true
     * example: 2 rooms for 2 nights = 4, 3 rooms available = false
     */
    public function hasEnoughRooms()
    {
        return (($this->totalRoomsNeededByPax * $this->request['nights']) <= $this->totalRoomsAvailable);
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