<script setup>

import PrimButton from '@/Shared/PrimButton.vue';
import Dropdown from '@/Shared/Dropdown.vue';
import { Link } from '@inertiajs/vue3';

const props = defineProps({
    users: {
        type: Object,
        required: true,
    },
});

console.log(props.users);
</script>

<template>
    <div>
        <div class="p-3 py-6 lg:p-8 bg-white dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent border-b border-gray-200 dark:border-gray-700">

            <div class="flex justify-between items-center mb-8">
            
                <h1 class="text-2xl font-medium text-gray-900 dark:text-white mb-4">
                    Lista de Usuarios
                </h1>

                <Link :href="route('users.create')">
                    <PrimButton>
                        Añadir nuevo
                    </PrimButton>
                </Link>
            </div>

            <div class="text-white inner-shadow shadow-xl overflow-auto border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 cursor-pointer">
                    <thead>
                        <tr>
                            <th class="lg:px-4 px-6 lg:py-3.5 py-6 font-bold text-left text-gray-500 dark:text-gray-400">UserID</th>
                            <th class="lg:px-4 px-6 lg:py-3.5 py-6 font-bold text-left text-gray-500 dark:text-gray-400">Nombre</th>
                            <th class="lg:px-4 px-6 lg:py-3.5 py-6 font-bold text-left text-gray-500 dark:text-gray-400">Correo</th>
                            <th class="lg:px-4 px-6 lg:py-3.5 py-6 font-bold text-left text-gray-500 dark:text-gray-400">Rol</th>
                            <th class="lg:px-4 px-6 lg:py-3.5 py-6 font-bold text-right text-gray-500 dark:text-gray-400">			          
                                <svg
                                class="w-6 text-right fill-current text-grey-dark"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                >
                                <path
                                d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                                />
			                    </svg>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y shadow-inner divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">

                        <tr v-for="user in props.users.data" class="dark:hover:bg-gray-600 hover:bg-gray-100">

                            <td class="lg:px-4 px-6 lg:py-4 py-6 lg:text-base font-bold text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"># {{ user.id }}</td>

                            <td class="lg:px-4 px-6 lg:py-4 py-6 lg:text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700">{{ user.name }}</td>

                            <td class="lg:px-4 px-6 lg:py-4 py-6 lg:text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700">{{ user.email }}</td>

                            <td class="lg:px-4 px-6 lg:py-4 py-6 lg:text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700">{{ user.roles[0]?.name ?? 'sin asignar' }}</td>
                            
                            <td class="lg:px-4 px-6 lg:py-4 py-6 lg:text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><a :href="route('users.edit', {'userID': user.id})" class="text-sky-600 dark:text-white hover:text-sky-700 hover:dark:text-gray-200 underline">Ver detalles</a></td>

                        </tr>

                    </tbody>
                </table>    
            </div>

            <!-- Pagination -->
            <section>
                <div class="text-slate-50 font-bold text-xl flex flex-col justify-center items-center gap-4 rounded-xl p-2">

                    <span class="text-base dark:text-slate-50 text-slate-600">Mostrando {{ users.to }} de {{ users.total }} usarios en total</span>
                    <div class="flex p-2 w-full max-w-md justify-center space-x-0">
                        <Link :disabled="users.prev_page_url == null" as="button" :href="users.prev_page_url ?? '#'" class="min-w-auto w-32 h-10 bg-sky-500 p-2 rounded-l-xl hover:bg-sky-700  text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out border-y-2 border-l-2 flex justify-center items-center" preserveScroll>
                            <button innerText="Previo" ></button>
                        </Link>
                        <!-- <Link as="button" class="min-w-auto w-32 h-10 bg-sky-500 p-2 rounded-none hover:bg-sky-700 text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out border-2 border-x-sky-300 text-center flex justify-center items-center" preserveScroll>
                            <button innerText="Today"></button>
                        </Link> -->
                        <Link :disabled="users.next_page_url == null" as="button" :href="users.next_page_url ?? '#'" class="min-w-auto w-32 h-10 bg-sky-500 p-2 rounded-r-xl hover:bg-sky-700 text-white font-semibold hover:flex-grow transition-all duration-200 ease-in-out overflow-hidden border-y-2 border-r-2 flex justify-center items-center" preserveScroll>
                            <button innerText="Siguiente"></button>
                        </Link>
                    </div>

                </div>
            </section>
        </div>

    </div>
</template>