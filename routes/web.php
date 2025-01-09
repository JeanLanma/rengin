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

// Direct booking
Route::get('/direct-booking', [App\Http\Controllers\Booking\BookingController::class, 'booking'])->middleware('direct-booking.request')->name('booking');
Route::get('/direct-booking/checkout', [App\Http\Controllers\Booking\BookingController::class, 'checkout'])->name('direct-booking.checkout');
Route::post('/direct-booking/checkout', [App\Http\Controllers\Booking\BookingController::class, 'store'])->name('direct-booking.store');
Route::get('/direct-booking/policies', [App\Http\Controllers\Booking\BookingPoliciesController::class, 'index'])->name('direct-booking.policies');

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
Route::get('/bookings/show/{booking}', [App\Http\Controllers\Booking\BookingController::class, 'show'])->name('bookings.show');
Route::get('/bookings/reference/{booking}/{reference}', [App\Http\Controllers\Booking\BookingController::class, 'reference'])->name('bookings.reference');

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
Route::get('/distribution/room/{room_id}/increase/{years?}/years/', [App\Http\Controllers\Distribution\IncreaseDistributionController::class, 'increaseDistribution'])->name('distribution.add.availability');

// Users
Route::get('/users/me/', function(){
    $user = Auth::user();
    return response()->json(['user'=> $user, 'permissions' => $user->getPermissionNames()]);
})->name('users.me');

Route::get('/users', [App\Http\Controllers\User\UserController::class, 'index'])->name('users.index');
Route::get('/users/create', [App\Http\Controllers\User\UserController::class, 'create'])->name('users.create');
Route::get('/users/{userID}', [App\Http\Controllers\User\UserController::class, 'edit'])->name('users.edit');
Route::post('/users/store', [App\Http\Controllers\User\UserController::class, 'store'])->name('users.store');
Route::delete('/users/delete/{user}', [App\Http\Controllers\User\UserController::class, 'delete'])->name('users.delete');

// Roles and Permissions

Route::get('/permissions', [App\Http\Controllers\Permissions\PermissionsController::class, 'index'])->name('permissions.index');
Route::get('/roles/sync/{user}/{role}', [App\Http\Controllers\Permissions\PermissionsController::class, 'sync'])->name('sync.user.role');

Route::get('/booking', [App\Http\Controllers\Booking\BookingController::class, 'index'])->name('booking.getAvailabilityDate');
Route::get('/booking/show/', [App\Http\Controllers\Booking\BookingController::class, 'show'])->name('booking.show');

// EMail Previews
Route::get('/email/booking/{booking?}', [App\Http\Controllers\Email\EmailController::class, 'guestBooking'])->name('email.booking');
Route::get('/email/booking/admin/{booking?}', [App\Http\Controllers\Email\EmailController::class, 'adminBooking'])->name('email.adminBooking');

});

// Uploads

Route::post('/upload-image', [App\Http\Controllers\Upload\UploadImageController::class, 'uploadImage'])->name('upload.image');
Route::delete('/delete-image/{image_id}', [App\Http\Controllers\Upload\UploadImageController::class, 'deleteImage'])->name('delete.image');