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
    public function insertOrGet($data)
    {
        $guest = $this->getGuest($data);

        if($guest){
            return $guest;
        } else {
            return GuestModel::create([
                'name' => $data['name'],
                'lastname' => $data['last_name'],
                'email' => $data['email'],
                'phone' => $data['phone']
            ]);
        }
    }
    public function insertOrUpdate($data)
    {
        $guest = $this->getGuest($data);

        if($guest){
            return $guest;
        } else {
            return GuestModel::create([
                'name' => $data['name'],
                'lastname' => $data['last_name'],
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

    public function updateGuest($data)
    {
        $guest = $this->getGuest($data);

        if($guest){
            $guest->update([
                'name' => $data['name'],
                'lastname' => $data['last_name'],
                'email' => $data['email'],
                'phone' => $data['phone']
            ]);
        } else {
            return false;
        }
    }
}