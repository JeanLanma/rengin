<script setup>
import BookingLayout from '@/Layouts/BookingLayout.vue';
import CTAButton from '@/Shared/CTAButton.vue';
import '@vuepic/vue-datepicker/dist/main.css';
import { onMounted } from 'vue';
import { usePage, useForm } from '@inertiajs/vue3';
import ErrorForm from '@/Shared/ErrorForm.vue';
import Swal from 'sweetalert2';
import { displayPluralityOfNights, displayPluralityOfGuests } from '@/utils/booking.js';

const props = defineProps({
    booking: Object,
    summary: Object
})

const form = useForm({
    "summary":{
        "total": 0,
        "subtotal": 0,
    },
    "booking": {
        "room_type_id": null,
        "adults":null,
        "children":null,
        "infants":null,
        "checkin": null,
        "checkout": null,
        "rooms":null,
        "guest_hotel_requests":null,
        "card_name": null,
        "card_number": null,
        "card_expiration_year": null,
        "card_expiration_month": null,
        "card_cvc": null,
    "items": null,
    },
    "guest":{
        "name": null,
        "last_name": null,
        "email": null,
        "phone": null
    },
    "terms": null,
})

const makeBooking = () => {

    if(!form.terms){
        termsCheckAlert();
        return;
    }

    form.post(route('direct-booking.store'), {
        preserveScroll: true,
        onSuccess: (response) => {
            form.reset();
            if(usePage().props.flash.booking != null){
                const success = usePage().props.flash.booking;
                const defaultContent = {
                    title: '¡Reservación exitosa!',
                    text: 'La reserva se ha realizado con éxito, en breve recibirá un correo electrónico con los detalles de la misma. Este es su folio ' + success.booked.folio,
                    imageUrl: '/assets/logo.png',
                    imageWidth: 240,
                    imageHeight: 146,
                    imageAlt: 'Logo Hotel - Rengin',
                    confirmButtonText: '¡Entendido!',
                    confirmButtonColor: '#0ea5e9',
                }
                successAlert(defaultContent).then((result) => {
                    if (result.isConfirmed || result.isDismissed) {
                        window.location.replace(route('booking'));
                    }
                });
            }
        },
        onError: (error) => {
            console.log(error);
            let errors = '';
            for (const err in error) {
                errors += '- ' + error[err] + "<br/>";
            }
            errorAlert({
                icon: 'error',
                title: 'Error al realizar la reservación',
                html: errors,
                imageWidth: 240,
                imageHeight: 146,
                confirmButtonText: '¡Entendido!',
                confirmButtonColor: '#0ea5e9',
            })
            setTimeout(() => {
                form.clearErrors();
            }, 9000)
        }
    });
}

onMounted(() => {
    
    if(!props.summary.has_enough_rooms){
        errorAlert().then((result) => {
            if (result.isConfirmed) {
                window.location.href = route('booking');
            }
        });
    }

    form.summary.total = props.summary.total_price;
    form.summary.subtotal = props.summary.subtotal_price;
    form.booking.adults = props.summary.adults;
    form.booking.children = props.summary.children;
    form.booking.infants = props.summary.infants;
    form.booking.checkin = props.summary.checkin;
    form.booking.checkout = props.summary.checkout;
    form.booking.nights = props.summary.nights;
    form.booking.rooms = props.summary.total_rooms_needed;
    form.booking.room_type_id = props.booking.room_type.roomTypeId;
    form.booking.items = JSON.stringify(props.summary.itemized.itemized_price);

})

/**
 *
 * @param {*} SuccessConent 
 * 
 * @returns Swal.fire
 * 
 * @example successAlert({title: 'Sweet!', text: 'Modal with a custom image.', imageUrl: 'https://unsplash.it/400/200', imageWidth: 400, imageHeight: 200, imageAlt: 'Custom image'})
 */

const successAlert = (SuccessConent = null) => {
    const defaultContent = {
        icon: 'success',
        title: '¡Reservación exitosa!',
        text: 'La reserva se ha realizado con éxito, en breve recibirá un correo electrónico con los detalles de la misma.',
        imageWidth: 240,
        imageHeight: 146,
        confirmButtonText: '¡Entendido!',
        confirmButtonColor: '#0ea5e9',
    }

    const content = SuccessConent ? SuccessConent : defaultContent;
    return Swal.fire(content);
};
const errorAlert = (errorContent = null) => {
    const defaultContent = {
        icon: 'error',
        title: 'Habitaciones no disponibles',
        text: 'Lo sentimos, por el momento ya no hay habitaciones disponibles para las fechas seleccionadas. Por favor comunícate directamente con nosotros al 333 614 0223 .',
        imageUrl: '/assets/logo.png',
        imageWidth: 240,
        imageHeight: 146,
        imageAlt: 'Hotel Casino Plaza',
        confirmButtonText: '¡Seleccionar otra habitación!',
        confirmButtonColor: '#0ea5e9',
    }

    const content = errorContent ? errorContent : defaultContent;
    return Swal.fire(content);
};
const termsCheckAlert = () => {

    form.setError('terms', 'Por favor acepte los términos y condiciones.');

    Swal.fire({
    title: 'Términos y condiciones',
    html: 'Por favor acepte los <a href="'+route('direct-booking.policies')+'" target="_blank" class="text-blue-500">términos y condiciones</a>.',
    timer: 1500,
    timerProgressBar: true
    })

    setTimeout(() => {
        clearTermsError();
    }, 5000)
}

const clearTermsError = () => {
    if(form.errors.terms) form.clearErrors('terms');
}

console.log(props.booking);
console.log(props.summary);
</script>

<template>
    <BookingLayout title="Reservación">

        <div class="md:grid md:grid-cols-6 max-w-7xl md:px-4 lg:px-6 xl:px-8 mx-auto">
            <!-- Booking Item -->
            <section class="md:col-start-1 md:col-end-4 lg:col-end-5 md:row-start-1 md:row-end-1 mx-auto w-full max-w-7xl sm:px-8 md:px-1">

                <article class="bg-white rounded-[14px] px-4 py-6 text-[#3C3C4399] mt-4 border border-yellow-cta">

                    <div class="flex gap-4">

                        <div class="flex-shrink-0 overflow-hidden rounded-lg w-24 h-w-24 bg-gray-50 border border-gray-200">
                            <img class="h-full object-cover" :src="props.booking.room_type.room.cover" :alt="props.booking.room_type.room.name">
                        </div>
                        <div class="">
                            <h1 class="font-bold text-xl flex items-baseline"><span class="text-sm font-normal">(x{{ props.summary.total_rooms_needed }})</span>&nbsp;{{ props.booking.room_type.room.name }}</h1>
                            <p class="md:hidden">{{ props.booking.room_type.room.description.substring(0, 45) }}...</p>
                            <p class="hidden md:block">{{ props.booking.room_type.room.description.substring(0, 355) }}....</p>
                        </div>
                        
                        <div class="self-end hidden">
                            <p class="font-bold">{{ props.booking.room_type.price_string.split(' ').join('') }}</p>
                        </div>

                    </div>

                </article>

            </section>

            <!-- Summary -->
            <section class="md:col-start-4 lg:col-start-5 md:col-end-7 md:row-start-1 md:row-end-3  mx-auto w-full max-w-7xl sm:px-8 md:px-1">

                <div class="bg-white rounded-[14px] px-4 py-6 text-[#3C3C4399] mt-4 border border-yellow-cta">
                    
                    <details open class="mb-6 cursor-pointer">
                        <summary class="font-bold text-lg">Detalles de la reserva...</summary>
                        
                        <div class="mt-3">
                            
                            <p class="flex justify-between mb-2">
                                <span>Llegada</span>
                                <span class="font-bold first-letter:capitalize">{{ props.summary.checkin_string }}</span>
                            </p>
                            <p class="flex justify-between mb-2">
                                <span>Salida</span>
                                <span class="font-bold first-letter:capitalize">{{ props.summary.checkout_string }}</span>
                            </p>
                            <p class="flex mb-2">
                                <span class="">{{ props.summary.total_pax + ' ' + displayPluralityOfGuests(props.summary.total_pax) }}, {{ props.booking.room_type.nights + ' ' + displayPluralityOfNights(props.booking.room_type.nights) }}</span>
                            </p>
                            
                        </div>
                    </details>

                    <div class="border-b border-[#3C3C4399] opacity-50"></div>

                    <div>

                        <div class="mt-3">
                            
                            <p class="flex justify-between mb-2">
                                <span>Subtotal:</span>
                                <span class="font-bold">{{ props.summary.clean_price_string }}</span>
                            </p>
                            <p v-if="props.summary.extra_person_price > 0" class="flex justify-between mb-2">
                                <span>Costo por persona/s extra:</span>
                                <span class="font-bold">{{ props.summary.extra_person_price_string }}</span>
                            </p>
                            <p class="flex justify-between mb-2">
                                <span>Impuestos:</span>
                                <span class="font-bold">{{ props.summary.taxed_price_string }}</span>
                            </p>
                            <p class="flex justify-between">
                                <span>Total:</span>
                                <span class="font-bold">{{ props.summary.total_price_string }}</span>
                            </p>
                            
                        </div>

                    </div>

                    <div class="border-b border-[#3C3C4399] opacity-50 my-6"></div>

                    <div>
                        <details class="mb-6 cursor-pointer">
                            <summary class="font-bold text-lg">Terminos, condiciones y politicas</summary>
                            
                            <div class="mt-3">
                                <div class="my-2">

                                    <p class="font-bold first-letter:capitalize">Politicas de cancelación</p>
                                    <p>
                                        Podrás cancelar 48 horas antes de tu check-in sin ningún cargo extra.
                                    </p>

                                </div>
                                <div class="my-2">

                                    <p class="font-bold first-letter:capitalize">Checkin y Checkout</p>
                                    <p>
                                        Puedes acceder a tu habitación desde las 15:00hrs
                                        Debes dejar la habitación antes de las 13:00hrs
                                    </p>

                                </div>
                                
                            </div>
                        </details>
                    </div>
                </div>

            </section>

            <!-- Form -->
            <section class="md:col-start-1 md:col-end-4 lg:col-end-5 md:row-start-2 md:row-end-2 mx-auto w-full max-w-7xl sm:px-8 md:px-1 mb-12">

                <div class="bg-white rounded-[14px] px-4 py-6 text-[#3C3C4399] mt-4 border border-yellow-cta">

                    <h2 class="font-bold text-xl">Información de reserva</h2>

                    <form @submit.prevent="makeBooking">
                        <input type="hidden" name="room_type_id" :value="props.booking.room_type.roomTypeId">
                        <input type="hidden" name="checkin" :value="props.summary.checkin">
                        <input type="hidden" name="checkout" :value="props.summary.checkout">
                        <input type="hidden" name="checkout" :value="props.summary.checkout">

                        <!-- Guest Form -->
                        <div class="mt-3 mb-3">

                            <p class="font-bold text-center">Datos de contacto</p>

                            <div class="lg:flex lg:gap-6 lg:justify-between">

                                <div class="lg:w-1/2 relative mb-2">
                                    <label for="guest_name" class="font-bold text-sm">Nombre</label>
                                    <input v-model="form.guest.name" id="guest_name" type="text" class="border border-[#ddd] rounded w-full" placeholder="nombre" autocomplete="off">
                                    <ErrorForm :error="form.errors['guest.name']" />
                                </div>
                                
                                <div class="lg:w-1/2 relative mb-2">
                                    <label for="guest_lastname" class="font-bold text-sm">Apellidos</label>
                                    <input v-model="form.guest.last_name" id="guest_lastname" type="text" class="border border-[#ddd] rounded w-full" placeholder="apellidos" autocomplete="off">
                                    <ErrorForm :error="form.errors['guest.last_name']" />
                                </div>
                            
                            </div>

                            <div class="lg:flex lg:gap-6 lg:justify-between">

                                <div class="lg:w-1/2 relative mb-2">
                                    <label for="guest_phone" class="font-bold text-sm">Telefono</label>
                                    <input v-model="form.guest.phone" id="guest_phone" type="text" class="border border-[#ddd] rounded w-full" placeholder="telefono" autocomplete="off">
                                    <ErrorForm :error="form.errors['guest.phone']" />
                                </div>
                                
                                <div class="lg:w-1/2 relative mb-2">
                                    <label for="guest_email" class="font-bold text-sm">Correo electronico</label>
                                    <input v-model="form.guest.email" id="guest_email" type="email" class="border border-[#ddd] rounded w-full" placeholder="correo electronico" autocomplete="off">
                                    <ErrorForm :error="form.errors['guest.email']" />
                                </div>
                            
                            </div>

                            <div class="relative mb-2">
                                <label for="guest_request" class="font-bold text-sm">¿Tiene alguna petición para el hotel? <span class="text-xs">(Opcional)</span></label>
                                <textarea v-model="form.booking.guest_hotel_requests" name="guest_request" id="guest_request" class="border border-[#ddd] rounded w-full" placeholder="..." autocomplete="off"></textarea>
                            </div>

                        </div>

                        <div class="border-b border-[#3C3C4399] opacity-50 my-12"></div>

                        <!-- Payment Form -->
                        <div class="mt-3 hidden">

                            <p class="font-bold text-center">Datos de pago</p>

                            <div class="relative mb-2">
                                <label for="card_name" class="font-bold text-sm">Titular de la tarjeta</label>
                                <input v-model="form.booking.card_name" id="card_name" type="text" class="border border-[#ddd] rounded w-full" placeholder="Titular de la tarjeta" autocomplete="off">
                                <ErrorForm :error="form.errors['booking.card_name']" />
                            </div>
    
                            <div class="relative mb-2">
                                <label for="card_number" class="font-bold text-sm">Numero de tarjeta</label>
                                <input v-model="form.booking.card_number" id="card_number" type="text" class="border border-[#ddd] rounded w-full" placeholder="Numero de tarjeta" autocomplete="off">
                                <ErrorForm :error="form.errors['booking.card_number']" />
                            </div>

                            <div class="relative mb-2">
                                <label for="card_expiration_date" class="font-bold text-sm">Fecha de expiración</label>
                                <div class="flex gap-3">
                                    <select v-model="form.booking.card_expiration_month" name="card_expiration_date" id="card_expiration_date" class="border border-[#ddd] rounded w-full">
                                        <option value="null" selected aria-selected="true" disabled aria-disabled="true">--- Mes ---</option>
                                        <option value="01">01 - Enero</option>
                                        <option value="02">02 - Febrero</option>
                                        <option value="03">03 - Marzo</option>
                                        <option value="04">04 - Abril</option>
                                        <option value="05">05 - Mayo</option>
                                        <option value="06">06 - Junio</option>
                                        <option value="07">07 - Julio</option>
                                        <option value="08">08 - Agosto</option>
                                        <option value="09">09 - Septiembre</option>
                                        <option value="10">10 - Octubre</option>
                                        <option value="11">11 - Nomviembre</option>
                                        <option value="12">12 - Diciembre</option>
                                    </select>
                                    <select v-model="form.booking.card_expiration_year" name="card_expiration_year" id="card_expiration_year" class="border border-[#ddd] rounded w-full">
                                        <option value="null" selected aria-selected="true" disabled aria-disabled="true">--- Año ---</option>
                                        <option value="2023">2023</option>
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
                                        <option value="2026">2026</option>
                                        <option value="2027">2027</option>
                                        <option value="2028">2028</option>
                                        <option value="2029">2029</option>
                                        <option value="2030">2030</option>
                                        <option value="2031">2031</option>
                                        <option value="2032">2032</option>
                                        <option value="2033">2033</option>
                                    </select>
                                    
                                </div>
                                <ErrorForm :error="form.errors['booking.card_expiration_month']" />
                                <ErrorForm :error="form.errors['booking.card_expiration_year']" />

                            </div>

                            <div class="relative mb-2">
                                <label for="card_cvc" class="font-bold text-sm">CVC</label>
                                <input v-model="form.booking.card_cvc" id="card_cvc" type="number" class="border border-[#ddd] rounded w-full" placeholder="cvc" autocomplete="off">
                                <ErrorForm :error="form.errors['booking.card_cvc']" />
                            </div>

                        </div>

                        <div>
                            <div class="flex items-center mt-4">
                                <input @click="() => clearTermsError()" v-model="form.terms" id="terms-check" type="checkbox" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="terms-check" class="ml-2 text-sm font-medium text-gray-300" :class="{ 'text-red-500': form.errors.terms }">He leido y acepto la <a :href="route('direct-booking.policies')" class="hover:text-yellow-cta text-yellow-cta-acent" target="_blank">Política de privacidad, reservaciones y protección de datos personales</a>.</label>
                            </div>
                        </div>

                        <div>
                            <CTAButton class="w-full font-bold bg-yellow-cta hover:bg-yellow-cta-acent text-white" type="submit" :disabled="form.processing">Reservar ahora</CTAButton>
                        </div>

                    </form>
                </div>
                
            </section>
        </div>


    </BookingLayout>
</template>

<style>
body.swal2-shown > [aria-hidden="true"] {
  transition: 0.1s filter;
  filter: blur(10px);
}
</style>