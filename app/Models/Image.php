<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\MorphTo;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Model;


class Image extends Model
{
    use HasFactory;

    protected $fillable = [
        'image_src',
        'image_alt',
        'sort_order',
        'gallery_id',
        'gallery_type',
    ];

    protected $appends = [
        'path',
    ];

    // Relationships

    public function gallery_id(): MorphTo
    {
        return $this->morphTo();
    }

    public function path(): Attribute
    {
        return Attribute::make(
            get: fn () => asset('storage/' . $this->image_src),
        );
    }
}
