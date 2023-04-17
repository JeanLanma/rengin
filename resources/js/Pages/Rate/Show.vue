<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import RateTable from '@/Pages/Rate/Partials/RateTable.vue';

const props = defineProps({
    rate: {
        type: Object,
        required: true,
    },
    room: {
        type: Object,
        required: true,
    },
});

console.log(props.room);
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
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg">
                    <RateTable :rate="props.rate" :room="props.room"/>
                </div>
            </div>
        </div>
    </AppLayout>
</template>