<script setup>

import PrimButton from '@/Shared/PrimButton.vue';
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

                    <span class="text-base">Mostrando {{ users.to }} de {{ users.total }} usarios en total</span>
                    <div class="flex p-2 w-full max-w-md justify-center space-x-0">
                        <Link :disabled="users.prev_page_url == null" as="button" :href="users.prev_page_url" class="min-w-auto w-32 h-10 bg-sky-500 p-2 rounded-l-xl hover:bg-sky-700  text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out border-y-2 border-l-2 flex justify-center items-center" preserveScroll>
                            <button innerText="Previo" ></button>
                        </Link>
                        <!-- <Link as="button" class="min-w-auto w-32 h-10 bg-sky-500 p-2 rounded-none hover:bg-sky-700 text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out border-2 border-x-sky-300 text-center flex justify-center items-center" preserveScroll>
                            <button innerText="Today"></button>
                        </Link> -->
                        <Link :disabled="users.next_page_url == null" as="button" :href="users.next_page_url" class="min-w-auto w-32 h-10 bg-sky-500 p-2 rounded-r-xl hover:bg-sky-700 text-white font-semibold hover:flex-grow transition-all duration-200 ease-in-out overflow-hidden border-y-2 border-r-2 flex justify-center items-center" preserveScroll>
                            <button innerText="Siguiente"></button>
                        </Link>
                    </div>

                </div>
            </section>

            <!-- Filters -->
            <div class="hidden my-2 flex sm:flex-row flex-col">
                <div class="flex flex-row mb-1 sm:mb-0">
                    <div class="relative">
                        <select
                            class="appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                            <option>5</option>
                            <option>10</option>
                            <option>20</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                    <div class="relative">
                        <select
                            class="appearance-none h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500">
                            <option>All</option>
                            <option>Active</option>
                            <option>Inactive</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                        </div>
                    </div>
                </div>
                <div class="block relative">
                    <span class="h-full absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg viewBox="0 0 24 24" class="h-4 w-4 fill-current text-gray-500">
                            <path
                                d="M10 4a6 6 0 100 12 6 6 0 000-12zm-8 6a8 8 0 1114.32 4.906l5.387 5.387a1 1 0 01-1.414 1.414l-5.387-5.387A8 8 0 012 10z">
                            </path>
                        </svg>
                    </span>
                    <input placeholder="Search"
                        class="appearance-none rounded-r rounded-l sm:rounded-l-none border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none" />
                </div>
            </div>
            <!-- /Filters -->
        </div>

    </div>
</template>