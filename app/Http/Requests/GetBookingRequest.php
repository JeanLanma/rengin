<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class GetBookingRequest extends FormRequest
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
            'adults' => ['required','integer','min:1'],
            'children' => ['required','integer'],
            'checkin' => ['required','date'],
            'checkout' => ['required','date','after:checkin'],
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     */
    public function messages(): array
    {
        return [
            'adults.required' => 'Adults are required',
            'adults.integer' => 'Adults must be an integer',
            'adults.min' => 'Adults must be at least 1',
            'children.required' => 'Children are required',
            'children.integer' => 'Children must be an integer',
            'checkin.required' => 'Checkin date is required',
            'checkin.date' => 'Checkin date must be a date',
            'checkout.required' => 'Checkout date is required',
            'checkout.date' => 'Checkout date must be a date',
            'checkout.after' => 'Checkout date must be after checkin date',
        ];
    }
}
