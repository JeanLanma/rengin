<?php

namespace App\Http\Requests\Booking;

use Illuminate\Foundation\Http\FormRequest;

class StoreBookingRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\Rule|array|string>
     */
    public function rules(): array
    {
        return [
            // Booking Object
            'booking.room_type_id' => ['required','integer'],
            'booking.adults' => ['required','integer', 'min:1'],
            'booking.children' => ['nullable','integer'],
            'booking.infants' => ['nullable','integer'],
            'booking.checkin' => ['required', 'date', 'after_or_equal:today'],
            'booking.checkout' => ['required', 'date', 'after:checkin'],
            'booking.rooms' => ['required', 'integer', 'min:1'],
            'booking.guest_hotel_requests' => ['nullable', 'string'],
            'booking.nights' => ['required', 'integer', 'min:1'],
            'booking.items' => ['required'],
            // Card Object
            'booking.card_name' => ['nullable', 'string', 'min:3'],
            'booking.card_number' => ['nullable', 'string', 'min:16'],
            'booking.card_expiration_month' => ['nullable', 'string', 'min:1', 'max:12'],
            'booking.card_expiration_year' => ['nullable', 'integer', 'min:2021', 'max:2030'],
            'booking.card_cvc' => ['nullable', 'integer', 'digits:3'],
            // Guest Object
            'guest.name' => ['required', 'string', 'min:3'],
            'guest.last_name' => ['required', 'string', 'min:3'],
            'guest.email' => ['required', 'email'],
            'guest.phone' => ['required', 'string'],
            // Summary Object
            'summary.total' => ['required', 'numeric', 'min:0'],
            'summary.subtotal' => ['required', 'numeric', 'min:0'],
        ];
    }

    /**
     * Get the validation messages that apply to the request.
     */
    public function messages(): array
    {
        return [
            // Booking Object
            'bookig.adults.min' => 'Debe seleccionar al menos un adulto',
            'bookig.adults.required' => 'Debe seleccionar al menos un adulto',
            'booking.checkin.required' => 'El campo fecha de llegada es requerido',
            'booking.checkout.required' => 'El campo fecha de salida es requerido',
            'booking.checkin.after_or_equal' => 'La fecha de llegada debe ser mayor o igual a hoy',
            'booking.checkout.after' => 'La fecha de salida debe ser mayor a la fecha de llegada',
            // Guest Object
            'guest.name.required' => 'El campo nombre es requerido',
            'guest.last_name.required' => 'El campo apellido es requerido',
            'guest.email.required' => 'El campo correo electrónico es requerido',
            'guest.phone.required' => 'El campo teléfono es requerido',
            'guest.name.min' => 'El nombre debe tener al menos 3 caracteres',
            'guest.last_name.min' => 'El apellido debe tener al menos 3 caracteres', 
            'guest.phone.required' => 'Ingrese un número de teléfono válido',
            // Card Object
            'booking.card_name.required' => 'El campo nombre del titular es requerido',
            'booking.card_number.required' => 'El campo número de tarjeta es requerido',
            'booking.card_expiration_month.required' => 'El campo mes de expiración es requerido',
            'booking.card_expiration_year.required' => 'El campo año de expiración es requerido',
            'booking.card_cvc.required' => 'El campo CVC es requerido',

        ];
    }
}
