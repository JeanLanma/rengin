<script setup>
import { Link } from '@inertiajs/vue3';
const props = defineProps({
    room: Object,
});

</script>

<template>

<!-- NEW -->
                
    <article class="flex flex-col md:flex-row  bg-white rounded-md overflow-hidden shadow-lg w-full">
        
        <div class="text-indigo-500 flex flex-col justify-between xl:max-w-lg lg:max-w-md md:max-w-xs">
            <img class="object-cover w-full h-full object-center" :src="'/storage/'+room.cover" :alt="room.type" />
            <div class="hidden">
                <small class="uppercase">choose size</small>
                <div class="flex flex-wrap md:flex-nowrap gap-1">
                    <a href="javascript:void(0);" class="grid place-items-center border px-3 py-2 hover:bg-indigo-500 hover:text-white transition">
                    <small>5</small>
                    </a>
                    <a href="javascript:void(0);" class="grid place-items-center border px-3 py-2 cursor-not-allowed text-gray-300 transition">
                    <small>6</small>
                    </a>
                    <a href="javascript:void(0);" class="grid place-items-center border px-3 py-2 hover:bg-indigo-500 hover:text-white transition">
                    <small>7</small>
                    </a>
                    <a href="javascript:void(0);" class="grid place-items-center border px-3 py-2 cursor-not-allowed text-gray-300 transition">
                    <small>8</small>
                    </a>
                    <a href="javascript:void(0);" class="grid place-items-center border px-3 py-2 cursor-not-allowed text-gray-300 transition">
                    <small>9</small>
                    </a>
                    <a href="javascript:void(0);" class="grid place-items-center border px-3 py-2 hover:bg-indigo-500 hover:text-white transition">
                    <small>10</small>
                    </a>
                    <a href="javascript:void(0);" class="grid place-items-center border px-3 py-2 hover:bg-indigo-500 hover:text-white transition">
                    <small>11</small>
                    </a>
                    <a href="javascript:void(0);" class="grid place-items-center border px-3 py-2 hover:bg-indigo-500 hover:text-white transition">
                    <small>12</small>
                    </a>
                </div>
            </div>
        </div>
        
        <div class="text-indigo-500 py-10 px-5">
            <small class="uppercase">{{ room.type }}</small>
            <h3 class="uppercase text-black text-2xl font-medium">{{ room.name }}</h3>
            <h3 class="text-2xl font-semibold mb-7">Desde: ${{ room.base_price }} mxn.</h3>
            <div>
                <small class="text-black mr-4">Capacidad: {{ room.base_capacity }}</small>
                <small class="text-black">Capacidad Maxima: {{ room.max_capacity }}</small>
            </div>
            <small class="text-black">{{ room.description }}</small>
            <div class="flex gap-0.5 mt-4">
                <Link :href="route('rooms.edit', {'roomId': room.id})">
                    <button id="addToCartButton" class="bg-indigo-600 hover:bg-indigo-500 focus:outline-none transition text-white uppercase px-8 py-3">Editar</button>
                </Link>
                <button id="likeButton" class="hidden bg-indigo-600 hover:bg-indigo-500 focus:outline-none transition text-white uppercase p-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-suit-heart-fill" viewBox="0 0 16 16">
                        <path d="M4 1c2.21 0 4 1.755 4 3.92C8 2.755 9.79 1 12 1s4 1.755 4 3.92c0 3.263-3.234 4.414-7.608 9.608a.513.513 0 0 1-.784 0C3.234 9.334 0 8.183 0 4.92 0 2.755 1.79 1 4 1z"/>
                    </svg>
                </button>
            </div>
        </div>
    </article>

<!-- /NEW -->

</template>