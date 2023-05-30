<?php

namespace App\Repository\Booking;

use \App\Models\Guest as GuestModel;

class Guest {

    /**
     * Store a guest
     * 
     * If the guest already exists, return the guest
     * If the guest does not exist, create the guest and return it
     * 
     * @param array $data
     * 
     * @return GuestModel
     */
    public function storeGuest($data)
    {
        $guest = $this->getGuest($data);

        if($guest){
            return $guest;
        } else {
            return GuestModel::create([
                'name' => $data['name'],
                'lastname' => $data['lastname'],
                'email' => $data['email'],
                'phone' => $data['phone']
            ]);
        }
    }

    /**
     * Get a guest
     * 
     * @param array $data
     * 
     * @return GuestModel
     */
    public function getGuest($data)
    {
        return GuestModel::where('email', $data['email'])->first();
    }
}