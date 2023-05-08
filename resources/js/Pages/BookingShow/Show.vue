<script setup>
import BookingLayout from '@/Layouts/BookingLayout.vue';
import OutlinedButton from '@/Shared/OutlinedButton.vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { hasDarkMode } from '#utils';
import { DateTime } from 'luxon';
import { ref } from 'vue';
import Counter from '@/Shared/Counter.vue';
import BookingRoomCard from '@/Shared/BookingRoomCard.vue';
import axios from 'axios';
import CTAButton from '@/Shared/CTAButton.vue';

const date = ref()
const showDetails = ref(false);
const showRooms = ref(false);
let rooms = null;
const settings = ref({
    adults: 0,
    children: 0,
    infants: 0,
    rooms: 0,
    checkin: null,
    checkout: null,
    nights: 0
})
const defTimeSettings = () => {
    const date = DateTime.now();
    const min_year = date.year;
    const max_year = date.plus({ years: 2 }).year;
    const min_date = date;
    const max_date = date.plus({ years: 2 });

    return {
        min_year,
        max_year,
        min_date: min_date.toString(),
        max_date: max_date.toString()
    }
}
const DEF_DATE = defTimeSettings();

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

    const startFormat = start.setLocale('es').toFormat('ccc, dd MMM');
    const endFormat = end.setLocale('es').toFormat('ccc, dd MMM');

    return `${startFormat} - ${endFormat}`;


}

const loadRooms = async () => {
    const { data } = await axios.get(route('booking.getAvailabilityDate',{ adults: settings.value.adults, children: settings.value.children, infants: settings.value.infants, rooms: settings.value.rooms, checkin: settings.value.checkin, checkout: settings.value.checkout }));
    rooms = data;
    showRooms.value = true;
    console.log(rooms);
}

const showSettings = () => {
    console.clear();

    showDetails.value = !showDetails.value;
    loadRooms();
    console.log(settings.value);
}
</script>

<template>
    <BookingLayout title="Hotel Casino Plaza">

        <!-- Book Form -->
        <section class="mx-auto w-full p-2 max-w-7xl">

            <div class="dark:bg-gray-800 p-4 rounded">
                <!-- Counter Adults -->
                    <div class="flex justify-end items-center">
                        <span class="dark:text-white mr-4">Adultos: </span>
                        <Counter v-model:counter="settings.adults"/>
                    </div>
                <!-- Counter Adults -->
                <!-- Counter Children -->
                <div class="flex justify-end items-center">
                    <span class="dark:text-white mr-4">Niños: </span>
                    <Counter v-model:counter="settings.children"/>
                </div>
                <!-- /Counter Children -->
                <!-- Counter infanst -->
                <div class="flex justify-end items-center">
                    <span class="dark:text-white mr-4">Infantes: </span>
                    <Counter v-model:counter="settings.infants"/>
                </div>
                <!-- /Counter infanst -->
                <!-- Counter rooms -->
                <div class="flex justify-end items-center">
                    <span class="dark:text-white mr-4">Habitaciones: </span>
                    <Counter v-model:counter="settings.rooms"/>
                </div>
                <!-- /Counter rooms -->
                <div class="">

                <ul class="dark:text-white my-3" v-if="showDetails">
                    <li></li>
                    <li v-for="(value, key) in settings" :key="key">
                        {{ key }}: {{ value }}
                    </li>
                </ul>
                </div>
                
                <VueDatePicker
                    class="mt-2" 
                    v-model="date" 
                    placeholder="Seleccione un rango de fechas"
                    :dark="hasDarkMode()" 
                    :enable-time-picker="false"
                    locale="es" 
                    :format="format" 
                    range
                    :min-date="DEF_DATE.min_date"
                    :max-date="DEF_DATE.max_date"
                    :year-range="[DEF_DATE.min_year, DEF_DATE.max_year]"
                    cancelText="cancelar" selectText="Seleccionar"
                />

                <CTAButton @click="showSettings()">
                    Buscar
                </CTAButton>  
                
            </div>

        </section>

        <template v-if="showRooms">
            <section >

                <BookingRoomCard v-for="room in rooms.distribution" :room="room" />
                
            </section>
        </template>

    </BookingLayout>
</template>