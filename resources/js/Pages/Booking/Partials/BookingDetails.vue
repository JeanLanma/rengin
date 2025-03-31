<script setup>

import OutlinedButton from '@/Shared/OutlinedButton.vue';
import Modal from '@/Components/DialogModal.vue';
import { Link } from '@inertiajs/vue3';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import ActionButton from '@/Shared/ActionButton.vue';

const props = defineProps({
    booking: {
        type: Object,
        required: true,
    },
});

const showModal = ref(false);
const textModal = ref({
    title: '',
    content: '',
});

// Status

const hasStatus = (status) => {
    return status == props.booking.status;
}

const useModal = (title, content) => {
    showModal.value = true;
    textModal.value.title = title;
    textModal.value.content = content;
}

onMounted(() => {
    console.clear();
    console.log(props.booking);
});

const BookingStatus = {
    'confirmed': 'confirmed',
    'pending': 'pending',
    'canceled': 'canceled',
}
console.log(props.booking);

</script>

<template>
<!-- Modal -->
<Modal :show="showModal" @close="showModal = false">
    <template #title>
        {{ textModal.title }}
    </template>
    <template #content>
        {{ textModal.content }}
    </template>
    <template #footer>
        <OutlinedButton @click.native="showModal = false">
            Entendido
        </OutlinedButton>
    </template>
</Modal>
<!-- /Modal -->
    <div>
        <div class="p-3 py-6 lg:p-8 bg-white dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent border-b border-gray-200 dark:border-gray-700">

            <!-- Header -->
            <div class="flex justify-between items-center mb-8">
            
                <h1 class="text-2xl text-gray-700 dark:text-white">
                    Reservación de <span class="font-bold">{{ props.booking.guest.full_name }}</span> #{{ props.booking.id }}
                    <div>
                        <span
                        :class="hasStatus(BookingStatus.confirmed) 
                            ? 'inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600 cursor-pointer' 
                            : 'hidden'"
                        
                        >
                        Confirmada
                        </span>
                        <span
                        :class="hasStatus(BookingStatus.pending)
                        ? 'inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600 cursor-pointer'
                        : 'hidden'"
                        >
                        Pendiente
                        </span>
                        <span
                        :class="hasStatus(BookingStatus.canceled)
                        ? 'inline-flex items-center gap-1 rounded-full bg-sky-50 px-2 py-1 text-xs font-semibold text-sky-600 cursor-pointer'  
                        : 'hidden'"
                        >
                        Cancelada
                        </span>
                    </div>
                </h1>

                <div>
                    <Link class="mr-4" :href="route('email.adminBooking', props.booking.id)">
                        <ActionButton as="dark">
                            Ver correo
                        </ActionButton>
                    </Link>
                    <Link :href="route('email.adminBooking', {booking: props.booking.id, send: true})">
                        <ActionButton as="dark">
                            Reenviar correo
                        </ActionButton>
                    </Link>
                </div>
            </div>

            <div class="p-4 lg:p-2">

                <h4 class="text-xl dark:text-white text-gray-700 font-bold">Resumen - <small class="font-normal">{{ props.booking.folio }}</small></h4>
                <ul class="mt-2 dark:text-gray-100 text-gray-700">
                    <li class="flex border-y dark:border-y-white/20 py-3">
                        <span class="font-bold w-24">Habitación:</span>
                        <span class="dark:text-gray-300 text-gray-600"><span class="text-xs"> x{{ props.booking.number_of_rooms }}</span> - {{ props.booking.room.name }}<span class="text-xs"> ({{ props.booking.room.type }})</span></span>
                    </li>
                    <li class="flex border-b dark:border-y-white/20 py-3">
                        <span class="font-bold w-24">Huepedes:</span>
                        <span :title="`Adultos ${props.booking.adults}, Niños ${props.booking.children}, Infantes ${props.booking.children}`" class="dark:text-gray-300 text-gray-600">{{ props.booking.adults }}-{{ props.booking.children }}-{{ props.booking.infants }}</span>
                    </li>
                    <li class="flex border-y dark:border-y-white/20 py-3">
                        <span class="font-bold w-24">Check in:</span>
                        <span class="dark:text-gray-300 text-gray-600">{{ props.booking.check_in_formatted }}</span>
                    </li>
                    <li class="flex border-b dark:border-y-white/20 py-3">
                        <span class="font-bold w-24">Check out:</span>
                        <span class="dark:text-gray-300 text-gray-600">{{ props.booking.check_out_formatted }}</span>
                    </li>
                    <li class="flex border-b dark:border-y-white/20 py-3">
                        <span class="font-bold w-24">Subtotal:</span>
                        <span class="dark:text-gray-300 text-gray-600">{{ props.booking.subtotal_price_formatted }}</span>
                    </li>
                    <li class="flex border-b dark:border-y-white/20 py-3">
                        <span class="font-bold w-24">Total:</span>
                        <span class="dark:text-gray-300 text-gray-600">{{ props.booking.total_price_formatted }}</span>
                    </li>
                </ul>
            
            </div>
            
        </div>

    </div>
</template>

<style>

.right-in-shadow {
    -webkit-box-shadow: inset -10px 0px 14px -1px rgba(0,0,0,0.5);
    -moz-box-shadow: inset -10px 0px 14px -1px rgba(0,0,0,0.5);
    box-shadow: inset -10px 0px 14px -1px rgba(0,0,0,0.5);
}

</style>