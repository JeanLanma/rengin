<script setup>
import BookingDetails from '@/Pages/Booking/Partials/BookingDetails.vue';
import BreadCrumbArrow from '@/Shared/BreadCrumbArrow.vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import { Link } from '@inertiajs/vue3';
import BookingSummary from './Partials/BookingSummary.vue';
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
                <Link :href="route('bookings.index')"><span class="hover:underline">Reservaciones</span></Link>
                <BreadCrumbArrow /> 
                Ver detalle
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg">
                    <BookingDetails :booking="props.booking"/>
                </div>

                <div class="h-4"></div>

                <div class="flex flex-col md:flex-row gap-y-4 md:gap-x-4">
                <!-- Datos de pago -->
                <div v-if="$page.props.rengin.user.is_admin" class="flex-1 dark:bg-gray-800 bg-white md:rounded-lg shadow-xl p-8">
                    <h4 class="text-xl dark:text-gray-50 text-gray-700 font-bold">Datos de pago</h4>
                    <ul class="mt-2 dark:text-gray-50 text-gray-700">
                        <li class="flex border-y dark:border-y-white/20 py-3">
                            <span class="font-bold w-24">Titular:</span>
                            <span class="dark:text-gray-300 text-gray-600">{{ props.booking.card_name }}</span>
                        </li>
                        <li class="flex border-b dark:border-y-white/20 py-3">
                            <span class="font-bold w-24">Tarjeta:</span>
                            <span class="dark:text-gray-300 text-gray-600">{{ props.booking.card_number }}</span>
                        </li>
                        <li class="flex border-b dark:border-y-white/20 py-3">
                            <span class="font-bold w-24">Expira:</span>
                            <span class="dark:text-gray-300 text-gray-600">{{ props.booking.card_expiration }}</span>
                        </li>
                        <li class="flex border-b dark:border-y-white/20 py-3">
                            <span class="font-bold w-24">CVC:</span>
                            <span class="dark:text-gray-300 text-gray-600">{{ props.booking.card_cvc }}</span>
                        </li>
                    </ul>
                </div>

                <!-- Contacto -->
                <div class="flex-1 dark:bg-gray-800 bg-white md:rounded-lg shadow-xl p-8">
                    <h4 class="text-xl dark:text-gray-50 text-gray-700 font-bold">Inforamción de contacto</h4>
                    <ul class="mt-2 dark:text-gray-50 text-gray-700">
                        <li class="flex border-y dark:border-y-white/20 py-3">
                            <span class="font-bold w-24">Nombre:</span>
                            <span class="dark:text-gray-300 text-gray-600">{{ props.booking.guest.full_name }}</span>
                        </li>
                        <li class="flex border-b dark:border-y-white/20 py-3">
                            <span class="font-bold w-24">Correo:</span>
                            <span class="dark:text-gray-300 text-gray-600">{{ props.booking.guest.email }}</span>
                        </li>
                        <li class="flex border-b dark:border-y-white/20 py-3">
                            <span class="font-bold w-24">Telefono:</span>
                            <span class="dark:text-gray-300 text-gray-600">{{ props.booking.guest.phone }}</span>
                        </li>
                    </ul>
                </div>
                </div>

                <div class="h-4"></div>

                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg">
                    <BookingSummary :booking="props.booking"/>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
