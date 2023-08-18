<?php
namespace App\Repository\Image;

use App\Models\Image;

class UploadImage {

    public static function upload($request, $image_alt, $sort_order, $gallery_id, $gallery_type)
    {

        $imageName = time().'-'.$request->file('image')->getClientOriginalName();

        $imagePath = $request->file('image')->storeAs('rooms/gallery', $imageName, 'public');

        $image = Image::create([
            'image_src' => $imagePath,
            'image_alt' => $image_alt,
            'sort_order' => $sort_order,
            'gallery_id' => $gallery_id,
            'gallery_type' => $gallery_type,
        ]);

        return $image->id;
    }

    public static function countImagesByGalleryId($gallery_id)
    {
        return Image::where('gallery_id', $gallery_id)->count();
    }

    public static function getNextSortOrderByGalleryId($gallery_id)
    {
        return self::countImagesByGalleryId($gallery_id) + 1;
    }
        
}