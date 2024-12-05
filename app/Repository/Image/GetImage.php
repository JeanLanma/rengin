<?php

namespace App\Repository\Image;
use Illuminate\Support\Facades\DB;

class GetImage
{

    public function getImages($data)
    {
        $images = DB::table('images as img')
            ->where('gallery_id', $data['gallery_id'])
            ->get(['img.id', 'img.image_src', 'img.image_alt', 'img.sort_order'])
            ->map(function ($image) {
                return [
                    'id' => $image->id,
                    'image_src' => url('storage/'.$image->image_src),
                    'image_alt' => $image->image_alt,
                    'sort_order' => $image->sort_order
                ];
            });

        return $images;
    }

    // call self getImages method
    public static function getImagesStatic($data)
    {
        $self = new self();
        return $self->getImages($data);
    }
}