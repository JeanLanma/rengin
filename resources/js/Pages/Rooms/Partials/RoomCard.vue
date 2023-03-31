<script setup>

const props = defineProps({
    room: Object,
});

</script>

<template>
    <div class="sm:flex items-center shadow-md">
        <div>
            <img class="bg-cover max-h-60" :src="'/storage/'+room.cover" :alt="room.type" />
        </div>
        <div class="md:px-10 sm:px-5 px-4">
            <h1 class="text-gray-800 dark:text-gray-300 font-bold text-2xl my-2">{{ room.name }}</h1>
            <p class="text-gray-700 dark:text-gray-200 mb-2 md:mb-6">{{ room.description }}</p>
            <div class="flex justify-between mb-2">
                <span class="font-thin text-sm">Capacidad base: {{ room.base_capacity }}</span>
            </div>
            <div class="mb-4">
                <span class="mb-2 text-gray-800 dark:text-gray-300 font-bold">Read more</span>
            </div>
        </div>
    </div>
</template>