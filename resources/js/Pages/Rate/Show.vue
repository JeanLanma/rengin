<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import BreadCrumbArrow from '@/Shared/BreadCrumbArrow.vue';
import RateTable from '@/Pages/Rate/Partials/RateTable.vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    rate: {
        type: Object,
        required: true,
    },
    room: {
        type: Object,
        required: true,
    },
    start_date: {
        type: String,
        required: false,
    },
});

</script>

<template>
    <AppLayout title="Reservaciones">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                <Link :href="route('distribution.index')" class="hover:underline">Tarifas</Link>
                <BreadCrumbArrow />
                {{ props.room.name }}
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-800 shadow-xl sm:rounded-lg">
                    <RateTable 
                        :rate="props.rate" 
                        :room="props.room"
                        :start_date="props.start_date"
                        />
                </div>
            </div>
        </div>
    </AppLayout>
</template>