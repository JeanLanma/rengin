<?php

namespace App\Enums;

enum BookingStatus: string {

    case Pending = 'pending';
    case Confirmed = 'confirmed';
    case Cancelled = 'cancelled';
    case Completed = 'completed';

    public function getLabel(): string
    {
        return match ($this->value) {
            self::Pending => 'pending',
            self::Confirmed => 'confirmed',
            self::Cancelled => 'cancelled',
            self::Completed => 'completed',
        };
    }

    public function getBadge(): string
    {
        return match ($this->value) {
            self::Pending => 'warning',
            self::Confirmed => 'success',
            self::Cancelled => 'danger',
            self::Completed => 'primary',
        };
    }

}