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

const setStatus = () => {
    showModal.value = true;
    textModal.value.title = 'Cambiar estatus';
    textModal.value.content = '¿Estás seguro de cambiar el estatus de esta reservación?';
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

            <div class="flex justify-between items-center mb-8">
            
                <h1 class="text-2xl font-medium text-gray-900 dark:text-white mb-4">
                    Reservación de {{ props.booking.guest.full_name }}
                </h1>

                <Link method="DELETE" as="button" :href="route('users.delete', {user: props.booking.id})">
                    <ActionButton as="danger">
                        Eliminar
                    </ActionButton>
                </Link>
            </div>

            <div>
                <h2 class="text-xl font-medium text-gray-900 dark:text-white">
                    Folio: {{ props.booking.folio }}
                </h2>
            </div>

            <!-- Resumen -->
            <div>
                <div class="mb-4">
                    <h2 class="dark:text-white text-gray-600 text-xl font-bold">
                        Resumen
                    </h2>
                </div>
                <div class="dark:text-white text-gray-600 py-6 px-3 lg:px-12 overflow-auto border border-gray-200 dark:border-gray-700 rounded-lg">

                    <div class="flex gap-x-4 flex-wrap text-xl">
                        <div class="font-bold text-xl">Check in:</div>
                        <div class="">{{ props.booking.check_in }}</div>
                        <div class="font-bold text-xl">Check out:</div>
                        <div class="">{{ props.booking.check_out }}</div>
                    </div>

                    <div class="w-full lg:h-4 h-12"></div>

                    <div class="flex gap-x-4 flex-wrap text-xl">
                        <div class="font-bold text-xl">Subtotal:</div>
                        <div class="">{{ props.booking.subtotal_price_formatted }}</div>
                    </div>

                    <div class="w-full lg:h-4 h-12"></div>

                    <div class="flex gap-x-4 flex-wrap text-xl">
                        <div class="font-bold text-xl">Total:</div>
                        <div class="">{{ props.booking.total_price_formatted }}</div>
                    </div>

                    <div class="w-full lg:h-4 h-12"></div>
                    
                    <div class="flex gap-x-16 flex-wrap text-xl">
                        <div class="font-bold text-xl">Estatus</div>
                        <div>          
                            <div class="flex gap-2">
                                <span
                                @click="setStatus(props.booking.id, 1)"
                                :class="hasStatus(BookingStatus.confirmed) 
                                    ? 'bg-yellow-cta text-white border border-yellow-cta-acent inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold cursor-pointer' 
                                    : 'inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600 cursor-pointer'"
                                
                                >
                                Confirmada
                                </span>
                                <span
                                @click="setStatus(props.booking.id, 2)"
                                :class="hasStatus(BookingStatus.pending)
                                ? 'inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold bg-yellow-cta text-white cursor-pointer'
                                : 'inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600 cursor-pointer'"
                                >
                                Pendiente
                                </span>
                                <span
                                @click="setStatus(props.booking.id, 3)"
                                :class="hasStatus(BookingStatus.canceled)
                                ? 'inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold bg-yellow-cta text-white cursor-pointer'  
                                : 'inline-flex items-center gap-1 rounded-full bg-sky-50 px-2 py-1 text-xs font-semibold text-sky-600 cursor-pointer'"
                                >
                                Cancelada
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Habitacion -->
            <div class="mt-8">
                <div class="mb-4">
                    <h2 class="dark:text-white text-gray-600 text-xl font-bold">
                        Habitación
                    </h2>
                </div>
                <div class="dark:text-white text-gray-600 py-6 px-3 lg:px-12 overflow-auto border border-gray-200 dark:border-gray-700 rounded-lg">

                    
                    <div class="flex gap-x-4 flex-wrap text-xl">
                        <div class="font-bold text-xl">Codigo de habitación</div>
                        <div class="">{{ props.booking.room.type }}</div>
                    </div>

                    <div class="w-full lg:h-4 h-12"></div>

                    <div class="flex gap-x-4 flex-wrap text-xl">
                        <div class="font-bold text-xl">Adultos:</div>
                        <div class="">{{ props.booking.adults }}</div>
                        <div class="font-bold text-xl">Niños:</div>
                        <div class="">{{ props.booking.children }}</div>
                        <div class="font-bold text-xl">Infantes:</div>
                        <div class="">{{ props.booking.infants }}</div>
                    </div>

                    <div class="w-full lg:h-4 h-12"></div>

                    <div class="flex gap-x-4 flex-wrap text-xl">
                        <div class="font-bold text-xl">Noches:</div>
                        <div class="">{{ props.booking.nights }}</div>
                    </div>

                    <div class="w-full lg:h-4 h-12"></div>

                </div>
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