<script setup>
import BookingLayout from '@/Layouts/BookingLayout.vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { DateTime } from 'luxon';
import { ref, onMounted } from 'vue';
import Counter from '@/Shared/Counter.vue';
import BookingRoomCard from '@/Shared/BookingRoomCard.vue';
import axios from 'axios';
import CTAButton from '@/Shared/CTAButton.vue';

const props = defineProps({
    settings: Object,
    distribution: Object
})

const date = ref()
const showDetails = ref(false);
const settings = ref(props.settings)
const roomGuestsInput = ref(null)
const loadedRooms = ref(false);

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
    const setParams = { adults: settings.value.adults, children: settings.value.children, infants: settings.value.infants, rooms: settings.value.rooms, checkin: settings.value.checkin, checkout: settings.value.checkout }
    const { data } = await axios.get(route('booking.getAvailabilityDate', setParams));
    loadedRooms.value = data.distribution;
    showDetails.value = !showDetails.value;
}

const showSettings = () => {
    console.clear();
    loadRooms();
}

onMounted(() => {
  const startDate = new Date();
  const endDate = new Date(new Date().setDate(startDate.getDate() + 1));
  date.value = [startDate, endDate];
})

const showRoomAndGuestNumber = (rooms, guests) =>{
    const agreementRoom = (rooms == 1) 
                        ? 'habitación' 
                        : 'habitaciones';
    const agreementGuest = (guests == 1)
                        ? 'huesped' 
                        : 'huespedes';;

    return `${guests} ${agreementGuest}, ${rooms} ${agreementRoom}`
}

const toggleClass = (className) => {
    return roomGuestsInput.value.classList.toggle(className);
}
</script>

<template>
    <BookingLayout title="Hotel Casino Plaza">

        <!-- Book Form -->
        <section class="mx-auto w-full max-w-md md:max-w-5xl xl:max-w-7xl">

            <div class="bg-white rounded-[14px] p-4 text-[#3C3C4399] shadow-xl mt-4">

                <input @click="toggleClass('h-44')" type="text" readonly class="border border-[#ddd] rounded w-full" :placeholder="showRoomAndGuestNumber(settings.rooms, (settings.adults + settings.children))" inputmode="none" autocomplete="off" @input="() => null" @keypress="() => null">

                <!-- counters -->
                <section class="flex flex-col items-end gap-2 mt-4 overflow-hidden h-0 transition duration-300 ease-in-out" ref="roomGuestsInput">

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

                <VueDatePicker
                    class="mt-2" 
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

                <CTAButton class="text-white" @click="showSettings()">
                    Buscar
                </CTAButton>  
                
            </div>

        </section>

        <section v-if="!showDetails">
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