<?php

namespace App\Enums;

enum RoomStatus: string {
    
    case Available = 'available';
    case Unavailable = 'unavailable';

}