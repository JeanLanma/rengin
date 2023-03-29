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
        Schema::create('bookings', function (Blueprint $table) {
            $table->id();

            $table->foreignId('room_id')->constrained();
            $table->foreignId('guest_id')->constrained();
            $table->string('folio');
            $table->string('internal_reference');
            $table->integer('adults');
            $table->integer('minors')->default(0);
            $table->integer('number_of_rooms');
            $table->date('check_in');
            $table->date('check_out');
            $table->integer('total_price');
            $table->integer('subtotal_price');
            $table->string('status')->default('pending');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bookings');
    }
};
