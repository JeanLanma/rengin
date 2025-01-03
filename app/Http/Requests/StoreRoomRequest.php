<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreRoomRequest extends FormRequest
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
            'name' => ['required', 'string', 'max:255'],
            'type' => ['required', 'string', 'max:255'],
            'description' => ['required', 'string', 'max:510'],
            'cover' => [
                $this->routeIs('rooms.store') ? 'required' : 'nullable',
                'image',
                'max:2048',
            ],
            'base_capacity' => ['required', 'numeric'],
            'max_capacity' => ['required', 'numeric'],
            'base_price' => ['required', 'numeric', 'min:0'],
            'extra_person_price' => ['nullable', 'numeric', 'min:0'],
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */
    public function messages(): array
    {
        return [
            'name.required' => 'Por favor, ingrese un nombre para la habitación',
            'type.required' => 'Por favor, ingrese un tipo para la habitación',
            'description.required' => 'Por favor, ingrese una descripción para la habitación',
            'cover.required' => 'Por favor, ingrese una imagen para la habitación',
            'cover.max' => 'El archivo no debe pesar más de 2MB',
            'base_capacity.required' => 'Debe ingresar una capacidad base para la habitación',
            'max_capacity.required' => 'Debe ingresar una capacidad máxima para la habitación',
            'base_price.required' => 'Ingrese un precio base para la habitación',
        ];
    }
}
