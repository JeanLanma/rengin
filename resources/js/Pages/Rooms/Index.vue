<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import RoomTable from '@/Pages/Rooms/Partials/RoomTable.vue';

const props = defineProps({
    rooms: Object,
});
</script>

<template>
    <AppLayout title="Habitaciones">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Habitaciones
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
