<script setup>

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
        <div class="p-6 lg:p-8 bg-white dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent border-b border-gray-200 dark:border-gray-700">

            <h1 class="text-2xl font-medium text-gray-900 dark:text-white mb-4">
                Lista de Usuarios
            </h1>

            <div class="text-white inner-shadow shadow-xl overflow-auto border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 cursor-pointer">
                    <thead>
                        <tr>
                            <th class="px-4 py-3.5 font-bold text-left text-gray-500 dark:text-gray-400">UserID</th>
                            <th class="px-4 py-3.5 font-bold text-left text-gray-500 dark:text-gray-400">Nombre</th>
                            <th class="px-4 py-3.5 font-bold text-left text-gray-500 dark:text-gray-400">Correo</th>
                            <th class="px-4 py-3.5 font-bold text-left text-gray-500 dark:text-gray-400">Rol</th>
                            <th class="px-4 py-3.5 font-bold text-right text-gray-500 dark:text-gray-400">			          
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

                        <tr class="dark:hover:bg-gray-600 hover:bg-gray-100">

                            <td class="px-4 py-4 text-base font-bold text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700">#1234</td>

                            <td class="px-4 py-4 text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700">Jhon Doe</td>

                            <td class="px-4 py-4 text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700">Abril 3, 2023</td>

                            <td class="px-4 py-4 text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700">Suite</td>
                            
                            <td class="px-4 py-4 text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><a href="#" class="text-sky-600 dark:text-white hover:text-sky-700 hover:dark:text-gray-200 underline">Ver Reserva</a></td>

                        </tr>

                    </tbody>
                </table>    
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