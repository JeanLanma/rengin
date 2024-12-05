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

const parsedItems = ref(null);
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
    parsedItems.value = JSON.parse(props.booking.items);
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

            <!-- Header -->
            <div class="flex justify-between items-center mb-8">
            
                <h1 class="text-2xl text-gray-700 dark:text-white font-bold">
                    Desgloce de la reservación
                </h1>

                <div as="button">
                    <ActionButton as="dark">
                        Imprimir
                    </ActionButton>
                </div>
            </div>

            <div class="p-4 lg:p-2">

                <h4 class="text-xl dark:text-white text-gray-700 font-bold">Costos por noche</h4>
                <ul class="mt-2 dark:text-gray-100 text-gray-700">
                    <li v-for="(item, index) in parsedItems" :key="index" class="flex border-y dark:border-y-white/20 py-3">
                        <span class="dark:text-gray-300 text-gray-600 capitalize">{{ item.string }}</span>
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