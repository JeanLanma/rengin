<script setup>

const props = defineProps({
    user: {
        type: Object,
        required: true,
    },
});

console.log(props.user);
</script>

<template>
    <div>
        <div class="p-3 py-6 lg:p-8 bg-white dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent border-b border-gray-200 dark:border-gray-700">

            <h1 class="text-2xl font-medium text-gray-900 dark:text-white mb-4">
                Detalles del usuario
            </h1>

            <div class="dark:text-white text-gray-600 py-6 px-3 lg:px-12 overflow-auto border border-gray-200 dark:border-gray-700 rounded-lg">
                <div class="flex flex-wrap text-xl">
                    <div class="w-1/2 lg:w-1/3 font-bold text-2xl">ID</div>
                    <div class="w-1/2 lg:w-2/3">{{ props.user.id }}</div>
                    <div class="w-full border-b border-b-gray-200 dark:border-gray-700 grow mt-4"></div>
                </div>
                <div class="w-full lg:h-4 h-12"></div>
                <div class="flex flex-wrap text-xl">
                    <div class="w-1/2 lg:w-1/3 font-bold text-2xl">Name</div>
                    <div class="w-1/2 lg:w-2/3">{{ props.user.name }}</div>
                    <div class="w-full border-b border-b-gray-200 dark:border-gray-700 grow mt-4"></div>
                </div>
                <div class="w-full lg:h-4 h-12"></div>
                <div class="flex flex-wrap text-xl">
                    <div class="w-1/2 lg:w-1/3 font-bold text-2xl">Roles</div>
                    <div class="w-1/2 lg:w-2/3">          <div class="flex gap-2">
            <span
              class="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
            >
              Admin
            </span>
            <span
              class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600"
            >
              Ventas
            </span>
            <span
              class="inline-flex items-center gap-1 rounded-full bg-sky-50 px-2 py-1 text-xs font-semibold text-sky-600"
            >
              General
            </span>
          </div></div>
                    <div class="w-full border-b border-b-gray-200 dark:border-gray-700 grow mt-4"></div>
                </div>
                <div class="w-full lg:h-4 h-12"></div>
                <div class="flex flex-wrap text-xl">
                    <div class="w-1/2 lg:w-1/3 font-bold text-2xl">Correo</div>
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