<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import RoomTable from '@/Pages/Rooms/Partials/RoomTable.vue';
import Button from '@/Components/Button.vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    rooms: Object,
});
</script>

<template>
    <AppLayout title="Habitaciones">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Habitaciones
                <svg class="w-6 h-6 text-gray-400 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                <Link :href="route('rooms.create')">
                    <Button text="Agregar" class="ml-2"/>
                </Link>
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg">
                    <RoomTable :rooms="props.rooms" />
                </div>
            </div>
        </div>
    </AppLayout>
</template>
