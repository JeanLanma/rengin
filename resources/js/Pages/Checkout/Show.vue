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
})

onMounted(() => {
    console.log(props.booking);
})
</script>

<template>
    <BookingLayout title="Hotel Casino Plaza">

        <!-- Booking Item -->
        <section class="mx-auto w-full max-w-7xl sm:px-8">

            <article class="bg-white rounded-[14px] px-4 py-6 text-[#3C3C4399] mt-4 border border-yellow-cta">

                <div class="flex gap-4">

                    <div class="flex-shrink-0 overflow-hidden rounded-lg w-24 h-w-24 bg-gray-50 border border-gray-200">
                        <img class="h-full object-cover" :src="props.booking.room_type.room.cover" :alt="props.booking.room_type.room.name">
                    </div>
                    <div class="">
                        <h1 class="font-bold text-xl flex items-baseline">{{ props.booking.room_type.room.name }} <span class="text-sm font-normal">(x{{ props.booking.rooms }})</span> </h1>

                        <p class="">Noches x{{ props.booking.nights }}</p>
                    </div>
                    
                    <div class="self-end">
                        <p class="font-bold">{{ props.booking.room_type.price_string.split(' ').join('') }}</p>
                    </div>

                </div>

            </article>

        </section>

        <!-- Summary -->
        <section class="mx-auto w-full max-w-7xl sm:px-8">

            <div class="bg-white rounded-[14px] px-4 py-6 text-[#3C3C4399] mt-4 border border-yellow-cta">
                
                <details open class="mb-3">
                    <summary>Detalles de la reserva</summary>
                    
                    <div class="mt-3">
                        
                        <p class="flex justify-between mb-2">
                            <span>Llegada:</span>
                            <span class="font-bold">Vier, 28 de Mayo, 2023</span>
                        </p>
                        <p class="flex justify-between">
                            <span>Salida:</span>
                            <span class="font-bold">Dom, 30 de Mayo, 2023</span>
                        </p>
                        
                    </div>
                </details>

                <div class="border-b border-[#3C3C4399] opacity-50"></div>

                <div>

                    <div class="mt-3">
                        
                        <p class="flex justify-between mb-2">
                            <span>Subtotal:</span>
                            <span class="font-bold">$3900.00</span>
                        </p>
                        <p class="flex justify-between mb-2">
                            <span>Impuestos:</span>
                            <span class="font-bold">$390.00</span>
                        </p>
                        <p class="flex justify-between">
                            <span>Total:</span>
                            <span class="font-bold">$4290.00</span>
                        </p>
                        
                    </div>

                </div>
            </div>

        </section>

        <!-- Payment -->
        <section class="mx-auto w-full max-w-7xl sm:px-8">

            <div class="bg-white rounded-[14px] px-4 py-6 text-[#3C3C4399] mt-4 border border-yellow-cta">

                <h2 class="font-bold text-xl flex items-baseline">Información de pago</h2>

                <form>

                    <!-- Guest Form -->
                    <div class="mt-3">

                        <p class="font-bold mb-2 text-center">Sus datos</p>

                        <div class="relative mb-2">
                            <label for="guest_name" class="font-bold text-sm">Nombre</label>
                            <input id="guest_name" type="text" class="cursor-pointer border border-[#ddd] rounded w-full" placeholder="Nombre" autocomplete="off">
                        </div>
 
                        <div class="relative mb-2">
                            <label for="guest_lastname" class="font-bold text-sm">Apellidos</label>
                            <input id="guest_lastname" type="text" class="cursor-pointer border border-[#ddd] rounded w-full" placeholder="Apellidos" autocomplete="off">
                        </div>

                        <div class="relative mb-2">
                            <label for="guest_phone" class="font-bold text-sm">Telefono</label>
                            <input id="guest_phone" type="text" class="cursor-pointer border border-[#ddd] rounded w-full" placeholder="Telefono" autocomplete="off">
                        </div>

                        <div class="relative mb-2">
                            <label for="guest_email" class="font-bold text-sm">Correo electronico</label>
                            <input id="guest_email" type="email" class="cursor-pointer border border-[#ddd] rounded w-full" placeholder="Correo electronico" autocomplete="off">
                        </div>

                    </div>

                    <!-- Payment Form -->
                    <div class="mt-6">

                        <p class="font-bold mb-2 text-center">Datos de pago</p>

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
                            <label for="guest_email" class="font-bold text-sm">CVC</label>
                            <input id="guest_email" type="email" class="cursor-pointer border border-[#ddd] rounded w-full" placeholder="Correo electronico" autocomplete="off">
                        </div>

                    </div>

                </form>
            </div>
            
        </section>

    </BookingLayout>
</template>