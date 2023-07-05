<script setup>
import BookingDetails from '@/Pages/Booking/Partials/BookingDetails.vue';
import BreadCrumbArrow from '@/Shared/BreadCrumbArrow.vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import { Link } from '@inertiajs/vue3';
const props = defineProps({
    booking: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <AppLayout title="Reservación">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"> 
                <Link :href="route('users.index')"><span class="hover:underline">Reservaciones</span></Link>
                <BreadCrumbArrow /> 
                Ver detalle
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg">
                    <BookingDetails :booking="props.booking"/>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
