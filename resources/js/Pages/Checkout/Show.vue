<script setup>
import BookingLayout from '@/Layouts/BookingLayout.vue';
import BookingRoomCard from '@/Shared/BookingRoomCard.vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import CTAButton from '@/Shared/CTAButton.vue';
import '@vuepic/vue-datepicker/dist/main.css';
import Counter from '@/Shared/Counter.vue';
import { ref, onMounted, watch } from 'vue';
import { DateTime } from 'luxon';
import axios from 'axios';
import Booking from '@/utils/booking.js';
import { displayRoomsAndGuestsAgreement } from '@/utils/index.js';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    booking: Object,
    summary: Object
})

onMounted(() => {
    console.log(props.booking);
    console.log(props.summary);
})
</script>

<template>
    <BookingLayout title="Hotel Casino Plaza">

        <div class="md:grid md:grid-cols-6 max-w-7xl md:px-4 lg:px-6 xl:px-8 mx-auto">
            <!-- Booking Item -->
            <section class="md:col-start-1 md:col-end-4 lg:col-end-5 md:row-start-1 md:row-end-1 mx-auto w-full max-w-7xl sm:px-8 md:px-1">

                <article class="bg-white rounded-[14px] px-4 py-6 text-[#3C3C4399] mt-4 border border-yellow-cta">

                    <div class="flex gap-4">

                        <div class="flex-shrink-0 overflow-hidden rounded-lg w-24 h-w-24 bg-gray-50 border border-gray-200">
                            <img class="h-full object-cover" :src="props.booking.room_type.room.cover" :alt="props.booking.room_type.room.name">
                        </div>
                        <div class="">
                            <h1 class="font-bold text-xl flex items-baseline">{{ props.booking.room_type.room.name }} <span class="text-sm font-normal hidden">(x{{ props.booking.rooms }})</span> </h1>
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
                                <span>Llegada:</span>
                                <span class="font-bold first-letter:capitalize">{{ props.summary.checkin }}</span>
                            </p>
                            <p class="flex justify-between mb-2">
                                <span>Salida:</span>
                                <span class="font-bold first-letter:capitalize">{{ props.summary.checkout }}</span>
                            </p>
                            <p class="flex justify-between mb-2">
                                <span>Noches:</span>
                                <span class="font-bold first-letter:capitalize">{{ props.booking.nights }}</span>
                            </p>
                            <p class="flex justify-between mb-2">
                                <span>Habitaciones:</span>
                                <span class="font-bold first-letter:capitalize">{{ props.summary.total_rooms_needed }}</span>
                            </p>
                            
                        </div>
                    </details>

                    <div class="border-b border-[#3C3C4399] opacity-50"></div>

                    <div>

                        <div class="mt-3">
                            
                            <p class="flex justify-between mb-2">
                                <span>Subtotal:</span>
                                <span class="font-bold">{{ props.summary.subtotal_price_string }}</span>
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
                </div>

            </section>

            <!-- Form -->
            <section class="md:col-start-1 md:col-end-4 lg:col-end-5 md:row-start-2 md:row-end-2 mx-auto w-full max-w-7xl sm:px-8 md:px-1 mb-12">

                <div class="bg-white rounded-[14px] px-4 py-6 text-[#3C3C4399] mt-4 border border-yellow-cta">

                    <h2 class="font-bold text-xl">Información de pago</h2>

                    <form>

                        <!-- Guest Form -->
                        <div class="mt-3 mb-3">

                            <p class="font-bold text-center">Datos de contacto</p>

                            <div class="lg:flex lg:gap-6 lg:justify-between">

                                <div class="lg:w-1/2 relative mb-2">
                                    <label for="guest_name" class="font-bold text-sm">Nombre</label>
                                    <input id="guest_name" type="text" class="cursor-pointer border border-[#ddd] rounded w-full" placeholder="Nombre" autocomplete="off">
                                </div>
                                
                                <div class="lg:w-1/2 relative mb-2">
                                    <label for="guest_lastname" class="font-bold text-sm">Apellidos</label>
                                    <input id="guest_lastname" type="text" class="cursor-pointer border border-[#ddd] rounded w-full" placeholder="Apellidos" autocomplete="off">
                                </div>
                            
                            </div>

                            <div class="lg:flex lg:gap-6 lg:justify-between">

                                <div class="lg:w-1/2 relative mb-2">
                                    <label for="guest_phone" class="font-bold text-sm">Telefono</label>
                                    <input id="guest_phone" type="text" class="cursor-pointer border border-[#ddd] rounded w-full" placeholder="Telefono" autocomplete="off">
                                </div>
                                
                                <div class="lg:w-1/2 relative mb-2">
                                    <label for="guest_email" class="font-bold text-sm">Correo electronico</label>
                                    <input id="guest_email" type="email" class="cursor-pointer border border-[#ddd] rounded w-full" placeholder="Correo electronico" autocomplete="off">
                                </div>
                            
                            </div>

                            <div class="relative mb-2">
                                <label for="guest_request" class="font-bold text-sm">¿Tiene alguna petición para el hotel?</label>
                                <textarea name="guest_request" id="guest_request" class="cursor-pointer border border-[#ddd] rounded w-full" placeholder="..." autocomplete="off"></textarea>
                            </div>

                        </div>

                        <div class="border-b border-[#3C3C4399] opacity-50 my-12"></div>

                        <!-- Payment Form -->
                        <div class="mt-3">

                            <p class="font-bold text-center">Datos de pago</p>

                            <div class="relative mb-2">
                                <label for="card_name" class="font-bold text-sm">Titular de la tarjeta</label>
                                <input id="card_name" type="text" class="cursor-pointer border border-[#ddd] rounded w-full" placeholder="Titular de la tarjeta" autocomplete="off">
                            </div>
    
                            <div class="relative mb-2">
                                <label for="card_number" class="font-bold text-sm">Numero de tarjeta</label>
                                <input id="card_number" type="text" class="cursor-pointer border border-[#ddd] rounded w-full" placeholder="Numero de tarjeta" autocomplete="off">
                            </div>

                            <div class="relative mb-2">
                                <label for="card_expiration_date" class="font-bold text-sm">Fecha de experación</label>
                                <div class="flex gap-3">
                                    <select name="card_expiration_date" id="card_expiration_date" class="cursor-pointer border border-[#ddd] rounded w-full">
                                        <option value="null" selected>--- Mes ---</option>
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
                                    <select name="card_expiration_year" id="card_expiration_year" class="cursor-pointer border border-[#ddd] rounded w-full">
                                        <option value="null" selected>--- Año ---</option>
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
                            </div>

                            <div class="relative mb-2">
                                <label for="card_cvc" class="font-bold text-sm">CVC</label>
                                <input id="card_cvc" type="number" class="cursor-pointer border border-[#ddd] rounded w-full" placeholder="cvc" autocomplete="off">
                            </div>

                        </div>

                        <div>
                            <CTAButton class="w-full font-bold bg-yellow-cta hover:bg-yellow-cta-acent text-white" type="submit">Reservar ahora</CTAButton>
                        </div>

                    </form>
                </div>
                
            </section>
        </div>


    </BookingLayout>
</template>