<?php

namespace App\Services;

class PriceServie {

    
    /**
     * Format decimal price to string like "1,000.00"
     */
    public static function formatPrice($price)
    {
        return number_format($price, 2, '.', ',');
    }

    public static function formatPriceWithCurrency($price, $currency = '$')
    {
        return $currency . ' ' . self::formatPrice($price);
    }

    /**
     * Apply iva and municipal taxes to price
     * 
     * $taxes must be an array with iva and municipal keys ['iva' => 0.16, 'municipal' => 0.03]
     * 
     * @param double $price
     * @param array $taxes
     * @return double
     */
    public static function applyTaxes($price, $taxes)
    {
        if(!is_array($taxes) || !isset($taxes['iva']) || !isset($taxes['municipal'])) {
            throw new \Exception('Taxes can not be applied, invalid taxes count');
        }
        $taxes = $taxes ?? ['iva' => 0.16, 'municipal' => 0.03];
        return $price + (($price * $taxes['iva']) + ($price * $taxes['iva']));
    }

    /**
     * This method compute the price of a distribution per night
     * 
     */
    public function compute($distribution, $nights){
        return dd($distribution, $nights);
    }
}