<script setup>
import { Taxes } from '@/utils';
import { router } from '@inertiajs/vue3';
import { ref } from 'vue';

import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import BookingRoomCardGallery from './BookingRoomCardGallery.vue';

const _settings = ref(null);

const props = defineProps({
    room: Object,
    settings: Object
})

const incTaxes = (price) => {
    return Taxes(price).getOnlyTaxes
}

const parseItemezidPrice = (price) => {
    return price.map( (item) =>  item.string).join(' + ');
}

const BookRoom = () => {
    _settings.value = props.settings;
    _settings.value.room_type_id = props.room.roomTypeId;
    router.visit(route('direct-booking.checkout', _settings.value),{
        method: 'get',
    })
}
console.log(props.room);
</script>
<template>
    <!-- component -->
<!-- This is an example component -->
<div class='flex items-center justify-center min-h-screen md:min-h-0 md:py-8 from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br px-2'>
    <div class='w-full max-w-md md:max-w-5xl xl:max-w-6xl mx-auto bg-white rounded-3xl shadow-xl transition-all duration-300 overflow-hidden' :class="props.room.canBeBooked ? ' hover:shadow-yellow-cta/25 ' : ''">
        <div class='max-w-md md:max-w-5xl xl:max-w-6xl mx-auto md:flex md:flex-row md:justify-between'>
            <BookingRoomCardGallery :room="props.room.room" />
            <div class='md:h-[21.25rem] p-4 sm:p-6 md:w-3/5'>
                <p class='font-bold text-gray-700 text-[22px] leading-7 mb-1'>{{ props.room.room.name }}</p>
                <div v-if="room.canBeBooked" class='flex flex-row'>
                <p class='text-[#3C3C4399] text-[17px] mr-2 text-base'>Precio x{{room.nights}} noches</p>
                <p class='text-[17px] font-bold text-[#0FB478]' :title="parseItemezidPrice(room.itemized_price)">{{room.price_string}} <span class="text-xs text-[#3C3C4399]"> +(MXN ${{incTaxes(room.price)}})</span></p>
                </div>
                <div v-else class='flex flex-row'>
                    <p class='text-[#3C3C4399] text-[17px] mr-2 text-base'>Precio x{{room.nights}} noches</p>
                    <p class='text-[17px] font-bold text-[#0FB478]'>No disponible</p>
                </div>

                <div class="text-xs text-[#3C3C4399] flex flex-row mt-3 gap-2">
                    <p>capacidad base: {{props.room.room.baseCapacity}}</p>
                    <p>capacidad maxima: {{props.room.room.maxCapacity}}</p>
                </div>

                <p class='text-[#7C7C80] font-[15px] mt-6 min-h-[9rem] md:min-h-min md:h-24 md:max-h-24 md:line-clamp-3'>{{ props.room.room.description }}</p>


                <button v-if="room.canBeBooked" @click="BookRoom()" type="button" class='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                    Reservar ahora
                </button>
                <button v-else disabled class='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] border border-[#FFC933]  focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                    No Disponible
                </button>
            </div>
        </div>
    </div>
</div>
</template>