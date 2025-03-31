<?php

namespace App\Services;

use App\Repository\Property\Settings as PropertySettingsRepository;

class PropertySettingsService
{
    public static function PropertyData()
    {
        return [
            'name' => config('app.name'),
            'url' => config('app.url'),
            'contact_email' => config('app.property.contact_email'),
            'address' => config('app.property.address'),
        ];
    }
}