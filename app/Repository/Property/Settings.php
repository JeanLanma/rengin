<?php

namespace App\Repository\Property;

class Settings
{
    public function getPropertyName()
    {
        return config('app.name');
    }
}