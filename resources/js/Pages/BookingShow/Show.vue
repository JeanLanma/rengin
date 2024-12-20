<script setup>
import { displayRoomsAndGuestsAgreement } from '@/utils/index.js';
import BookingRoomCard from '@/Shared/BookingRoomCard.vue';
import BookingLayout from '@/Layouts/BookingLayout.vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import CTAButton from '@/Shared/CTAButton.vue';
import '@vuepic/vue-datepicker/dist/main.css';
import Counter from '@/Shared/Counter.vue';
import Booking from '@/utils/booking.js';
import { Link } from '@inertiajs/vue3';
import { ref, onMounted } from 'vue';
import { DateTime } from 'luxon';

const props = defineProps({
    settings: Object,
    distribution: Object
})

const date = ref()
const showDetails = ref(false);
const showRooms = ref(false);
const settings = ref(null)
const loadedRooms = ref(false);

onMounted(() => {
    date.value = props.settings.checkin 
                ? [DateTime.fromISO(props.settings.checkin).toJSDate(), DateTime.fromISO(props.settings.checkout).toJSDate()] 
                : Booking.getDefaultDateSettings();
    settings.value = props.settings;
    settings.value.adults = Number(settings.value.adults);
    settings.value.children = Number(settings.value.children);
    settings.value.infants = Number(settings.value.infants);
    settings.value.rooms = Number(settings.value.rooms);
})

const DEF_DATE = Booking.getMinDateSettings();

/**
 * Formats the date to a string like this: Mon ,01 Jan - Wen,03 Jan 
 * @param {[DateStart, DateEnd]} date[] 
 */
const format = ([DateStart, DateEnd]) => {
    const start = DateTime.fromJSDate(DateStart);
    const end = DateTime.fromJSDate(DateEnd ?? DateStart);

    settings.value.checkin = start.toISODate();
    settings.value.checkout = end.toISODate();
    settings.value.nights = end.diff(start, 'days').days;

    return Booking.periodToString([DateStart, DateEnd]);
}

</script>

<template>
    <BookingLayout title="Nueva reservación">

        <!-- Book Form -->
        <section class="mx-auto w-full max-w-md md:max-w-5xl xl:max-w-6xl">

            <div class="md:grid md:grid-cols-6 md:items-center md:justify-center md:gap-6 bg-white rounded-[14px] px-4 py-6 text-[#3C3C4399] mt-4 border border-yellow-cta">

                <div class="md:col-span-2 mt-4 md:mt-0 relative">
                    <label for="dates" class="absolute text-sm z-10 -top-3 left-4 bg-white">Seleccione las fechas</label>
                    <VueDatePicker  
                        v-model="date" 
                        placeholder="Seleccione un rango de fechas"
                        :enable-time-picker="false"
                        locale="es" 
                        :format="format" 
                        range
                        :min-date="DEF_DATE.min_date"
                        :max-date="DEF_DATE.max_date"
                        :year-range="[DEF_DATE.min_year, DEF_DATE.max_year]"
                        cancelText="cancelar" selectText="Seleccionar"
                    />
                </div>

                <div class="md:col-span-2 mt-8 md:mt-0 relative">

                    <div class="relative">
                        <label for="pax" class="cursor-pointer absolute text-sm z-10 -top-3 left-4 bg-white">Seleccione las habitaciones y los huéspedes</label>
                        <input id="pax" @click="showDetails = !showDetails" type="text" readonly class="cursor-pointer border border-[#ddd] rounded w-full" :placeholder="displayRoomsAndGuestsAgreement(props.settings.rooms, (Number(props.settings.adults) + Number(props.settings.children)))" inputmode="none" autocomplete="off">
                    </div>
                    <!-- counters -->
                    <!-- <section class="flex flex-col items-end gap-2 mt-4 overflow-hidden h-0 transition duration-300 ease-in-out" ref="roomGuestsInput"> -->
                    <section @mouseleave="showDetails = false" class="md:col-span-2 flex flex-col gap-3 w-80 xl:w-64 mt-2 p-4 rounded-md bg-white absolute origin-top-right right-4 ring-1 z-50 ring-black ring-opacity-5 focus:outline-none shadow-2xl" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" v-if="showDetails">

                        <p class="font-bold">Seleccione las habitaciones y los huespedes</p>
                        <!-- Counter Adults -->
                        <div class="flex justify-end items-center">
                            <span class="mr-4">Adultos: </span>
                            <Counter v-model:counter="settings.adults"/>
                        </div>
                        <!-- Counter Children -->
                        <div class="flex justify-end items-center">
                            <span class="mr-4">Niños: </span>
                            <Counter v-model:counter="settings.children"/>
                        </div>
                        <!-- Counter infanst -->
                        <div class="flex justify-end items-center">
                            <span class="mr-4">Infantes: </span>
                            <Counter v-model:counter="settings.infants"/>
                        </div>
                        <!-- Counter rooms -->
                        <div class="flex justify-end items-center">
                            <span class="mr-4">Habitaciones: </span>
                            <Counter v-model:counter="settings.rooms"/>
                        </div>
                    </section>
                    <!-- /counters -->
                </div>

                <!-- <Link :href="route('booking.getAvailabilityDate', { adults: props.settings.adults, children: props.settings.children, infants: props.settings.infants, rooms: props.settings.rooms, checkin: props.settings.checkin, checkout: props.settings.checkout })"> -->
                <Link :href="route('booking', props.settings)">
                    <CTAButton class="md:col-span-2 mt-8 md:mt-0 text-white">
                        Buscar
                    </CTAButton>  
                </Link>
                
            </div>

        </section>

        <section v-if="!showRooms">
            <article v-for="room in props.distribution">

                <BookingRoomCard :settings="settings" :room="room" />
            
            </article>
        </section>

        <section v-else>
            <article v-for="room in loadedRooms">

                <BookingRoomCard :settings="settings" :room="room" />
            
            </article>
        </section>

    </BookingLayout>
</template>

<style>

.acent-shadow {
    border-color: #a3d7fc;
    box-shadow: 0 0 8px #a3d7fc;
}
</style>