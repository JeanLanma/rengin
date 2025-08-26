<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('settings', function (Blueprint $table) {
            $table->id();

            $table->string('name')->unique()->default('Hotel');
            $table->text('description')->nullable();
            $table->string('phone')->nullable();
            $table->string('country')->nullable();
            $table->string('state')->nullable();
            $table->string('city')->nullable();
            $table->string('zip_code')->nullable();
            $table->string('logo')->nullable();
            $table->string('address')->nullable();
            $table->string('tax_address')->nullable();
            $table->string('hotel_code')->unique()->default('hotel');
            $table->text('embedded_map')->nullable();
            $table->string('checkin_time')->nullable()->default('15:00');
            $table->string('checkout_time')->nullable()->default('12:00');

            $table->string('redirect_url')->default('/');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('settings');
    }
};
