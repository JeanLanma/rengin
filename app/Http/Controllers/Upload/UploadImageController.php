<?php

namespace App\Http\Controllers\Upload;

use App\Http\Controllers\Controller;
use App\Repository\Image\DeleteImage;
use App\Repository\Image\UploadImage;
use Illuminate\Http\Request;

class UploadImageController extends Controller
{
    public function uploadImage(Request $request, UploadImage $uploadImage)
    {
        $image_alt = $request->file('image')->getClientOriginalName();
        $sort_order = UploadImage::getNextSortOrderByGalleryId($request->gallery_id);
        $gallery_id = $request->gallery_id;
        $gallery_type = $request->gallery_type;

        $image_id = $uploadImage::upload($request, $image_alt, $sort_order, $gallery_id, $gallery_type);

        return redirect()->back()->with([
            'success' => $image_id,
        ]);
    }

    public function deleteImage($image_id)
    {
        DeleteImage::delete($image_id);

        return redirect()->back()->with([
            'success' => 'Imagen eliminada',
        ]);
    }
}
