<?php

namespace App\Traits;

trait NumberFormat {

    /**
     * Format decimal 1000.00 number to string like "$1,000.00"
     * 
     * @param double $price
     * @return string
     */
    public function formatPrice($price)
    {
        return '$'.number_format($price, 2, '.', ',');
    }
}