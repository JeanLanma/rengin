<?php

namespace App\Repository\Booking;

class Quote {

    public $distribution;
    public $iva;
    public $municipal;

    /**
     * Get Distribution collection and return a quote
     */
    public function __construct($DistributionCollection)
    {
        $this->distribution = $DistributionCollection;
    }

    /**
     * Get the quote with the total price before taxes
     */
    public function beforeTaxes(){

    }

    public function get(){

    }

    public function getItemized(){

    }

    public function applyTax(){

    }

    public function setTaxes()
    {
        # code...
    }
}