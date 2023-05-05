<script setup>
defineProps({
    room: Object,
})
</script>
<template>
    <!-- component -->
<!-- This is an example component -->
<div class='flex items-center justify-center min-h-screen from-[#F9F5F3] via-[#F9F5F3] to-[#F9F5F3] bg-gradient-to-br px-2'>
    <div class='w-full max-w-md  mx-auto bg-white rounded-3xl shadow-xl overflow-hidden'>
        <div class='max-w-md mx-auto'>
            <div class='h-[236px] bg-cover bg-center'>
                <img class="w-full h-full object-cover object-center" :src="room.room.cover" :alt="room.room.name">
            </div>
          <div class='p-4 sm:p-6'>
            <p class='font-bold text-gray-700 text-[22px] leading-7 mb-1'>{{ room.room.name }}</p>
            <div class='flex flex-row'>
              <p class='text-[#3C3C4399] text-[17px] mr-2 line-through'>{{ room.price_string }}</p>
              <p class='text-[17px] font-bold text-[#0FB478]'>{{room.price_string}}</p>
            </div>
            <p class='text-[#7C7C80] font-[15px] mt-6'>{{ room.room.description }}</p>


              <a v-if="room.canBeBooked" href='#' class='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform bg-[#FFC933] rounded-[14px] hover:bg-[#FFC933DD] focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                  Reservar ahora
              </a>
              <a v-else href='#' class='block mt-10 w-full px-4 py-3 font-medium tracking-wide text-center capitalize transition-colors duration-300 transform rounded-[14px] border border-[#FFC933]  focus:outline-none focus:ring focus:ring-teal-300 focus:ring-opacity-80'>
                  No Disponible
              </a>
          </div>
        </div>
    </div>
</div>
</template>