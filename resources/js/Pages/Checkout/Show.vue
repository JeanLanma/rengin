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
        <section class="mx-auto w-full max-w-md md:max-w-5xl xl:max-w-6xl">

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

    </BookingLayout>
</template>