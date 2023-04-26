<?php

use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::middleware([
    'auth:sanctum',
    config('jetstream.auth_session'),
    'verified',
])->group(function () {
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    
// Bookings

Route::get('/bookings', [App\Http\Controllers\Booking\BookingController::class, 'index'])->name('bookings.index');

// Rooms

Route::get('/rooms', [App\Http\Controllers\Room\RoomController::class, 'index'])->name('rooms.index');

Route::get('/rooms/create', [App\Http\Controllers\Room\RoomController::class, 'create'])->name('rooms.create');

Route::post('/rooms/create', [App\Http\Controllers\Room\RoomController::class, 'store'])->name('rooms.store');

Route::get('/rooms/edit/{roomId}', [App\Http\Controllers\Room\RoomController::class, 'edit'])->name('rooms.edit');

Route::put('/rooms/update/{roomId}', [App\Http\Controllers\Room\RoomController::class, 'update'])->name('rooms.update');

Route::delete('/rooms/delete/{roomId}', [App\Http\Controllers\Room\RoomController::class, 'destroy'])->name('rooms.destroy');

// Rates

Route::get('/distribution', [App\Http\Controllers\Distribution\DistributionController::class, 'index'])->name('distribution.index');

Route::get('/distribution/room/{roomId}/{date?}', [App\Http\Controllers\Distribution\DistributionController::class, 'getByRoomId'])->name('distribution.getByRoomId');

Route::put('/distribution/update/{roomId}/{date}', [App\Http\Controllers\Distribution\DistributionController::class, 'update'])->name('distribution.update');

Route::post('/distribution/update/multiple', [App\Http\Controllers\Distribution\DistributionController::class, 'updateMultiple'])->name('distribution.update.multiple');

Route::post('/distribution/update/period/room/{roomId}', [App\Http\Controllers\Distribution\DistributionController::class, 'updatePeriod'])->name('distribution.update.period');

});



