<script setup>

import OutlinedButton from '@/Shared/OutlinedButton.vue';
import Modal from '@/Components/DialogModal.vue';
import { ref } from 'vue';
import axios from 'axios';

const showModal = ref(false);

const props = defineProps({
    user: {
        type: Object,
        required: true,
    },
});

console.log(props.user);

// Roles

const hasRole = (role) => {
    return props.user.roles.filter((item) => item.name === role).length > 0;
}

const asignRole = async (userID, roleID) => {

    const reponse = await axios.get(route('sync.user.role', {user: userID, role: roleID}));
    const data = await reponse.data;
    props.user.roles.pop();
    props.user.roles.push(data.role);
    showModal.value = true;
    console.log(data);
}
</script>

<template>
        <!-- Modal -->
        <Modal :show="showModal" @close="showModal = false">
            <template #title>
                Operación exitosa
            </template>
            <template #content>
                Se ha actulizado el usuario con éxito
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

            <h1 class="text-2xl font-medium text-gray-900 dark:text-white mb-4">
                Detalles del usuario
            </h1>

            <div class="dark:text-white text-gray-600 py-6 px-3 lg:px-12 overflow-auto border border-gray-200 dark:border-gray-700 rounded-lg">
                <div class="flex flex-wrap text-xl">
                    <div class="w-1/2 lg:w-1/3 font-bold text-xl">ID</div>
                    <div class="w-1/2 lg:w-2/3">#{{ props.user.id }}</div>
                    <div class="w-full border-b border-b-gray-200 dark:border-gray-700 grow mt-4"></div>
                </div>
                <div class="w-full lg:h-4 h-12"></div>
                <div class="flex flex-wrap text-xl">
                    <div class="w-1/2 lg:w-1/3 font-bold text-xl">Nombre</div>
                    <div class="w-1/2 lg:w-2/3">{{ props.user.name }}</div>
                    <div class="w-full border-b border-b-gray-200 dark:border-gray-700 grow mt-4"></div>
                </div>
                <div class="w-full lg:h-4 h-12"></div>
                <div class="flex flex-wrap text-xl">
                    <div class="w-1/2 lg:w-1/3 font-bold text-xl">Rol</div>
                    <div class="w-1/2 lg:w-2/3">          
                    <div class="flex gap-2">
                        <span
                        @click="asignRole(props.user.id, 1)"
                        :class="hasRole('admin') 
                            ? 'bg-yellow-cta text-white border border-yellow-cta-acent inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold cursor-pointer' 
                            : 'inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600 cursor-pointer'"
                        
                        >
                        Admin
                        </span>
                        <span
                        @click="asignRole(props.user.id, 2)"
                        :class="hasRole('ventas')
                        ? 'inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold bg-yellow-cta text-white cursor-pointer'
                        : 'inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600 cursor-pointer'"
                        >
                        Ventas
                        </span>
                        <span
                        @click="asignRole(props.user.id, 3)"
                        :class="
                                hasRole('general')
                        ? 'inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold bg-yellow-cta text-white cursor-pointer'  
                        : 'inline-flex items-center gap-1 rounded-full bg-sky-50 px-2 py-1 text-xs font-semibold text-sky-600 cursor-pointer'"
                        >
                        General
                        </span>
                </div>
        </div>
                    <div class="w-full border-b border-b-gray-200 dark:border-gray-700 grow mt-4"></div>
                </div>
                <div class="w-full lg:h-4 h-12"></div>
                <div class="flex flex-wrap text-xl">
                    <div class="w-1/2 lg:w-1/3 font-bold text-xl">Correo</div>
                    <div class="w-1/2 lg:w-2/3">{{ props.user.email }}</div>
                    <div class="w-full border-b border-b-gray-200 dark:border-gray-700 grow mt-4"></div>
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