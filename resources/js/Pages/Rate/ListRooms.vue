<script setup>

import AppLayout from '@/Layouts/AppLayout.vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    rooms: {
        type: Object,
        required: true,
    }
});

console.log(props.rooms);

</script>

<template>
    <AppLayout title="Reservaciones">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Tarifas
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-800 shadow-xl sm:rounded-lg">
                    
                    <!-- component -->
                    <div class="w-full bg-gray-50 dark:bg-gray-800 sm:rounded-lg">
                        <section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
                            <div class="text-center pb-12">
                                <h1 class="font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-gray-900 dark:text-white">
                                    Revisar tarifas por habitación            
                                </h1>
                            </div>
                            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                
                                <Link v-for="room in props.rooms.data" :href="route('distribution.getByRoomId', {'roomId': room.id})">
                                    <div class="w-full bg-black/25 hover:bg-black/50 dark:bg-gray-900 rounded-lg sahdow-lg p-12 flex flex-col justify-center items-center hover:rounded-none duration-200 ease-in-out cursor-pointer">
                                        <div class="mb-8">
                                            <img class="object-center object-cover rounded-full h-36 w-36" :src="'storage/'+ room.cover" :alt="room.type">
                                        </div>
                                        <div class="text-center">
                                            <p class="text-xl text-gray-800 dark:text-white font-bold mb-2">{{ room.type }}</p>
                                            <p class="text-base text-gray-100 font-normal">{{ room.name }}</p>
                                        </div>
                                    </div>
                                </Link>

                            </div>
                        </section>
                    </div>

                </div>
            </div>
        </div>
    </AppLayout>
</template>