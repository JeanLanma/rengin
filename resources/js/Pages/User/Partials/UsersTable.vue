<script setup>

import PrimButton from '@/Shared/PrimButton.vue';

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

                <PrimButton>
                    Añadir nuevo
                </PrimButton>
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
        </div>

    </div>
</template>