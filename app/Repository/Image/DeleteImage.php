<?php

namespace App\Repository\Image;

use App\Models\Image;
use Illuminate\Support\Facades\Storage;

class DeleteImage {

    public static function delete($image_id)
    {
        $image = Image::find($image_id);
        if($image){
            
            Storage::disk('public')->delete($image->image_src, 'public');
            
            $image->delete();

            return redirect()->back()->with('success','Imagen eliminada');
        }

        $image->delete();
    }
        
}