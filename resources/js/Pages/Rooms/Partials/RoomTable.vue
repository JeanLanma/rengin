<script setup>
import Button from '@/Shared/ActionButton.vue';
import { Link } from '@inertiajs/vue3';
import RoomCard from './RoomCard.vue';

const props = defineProps({
    rooms: Object,
});
</script>

<template>
    <div>
        <div class="p-6 lg:p-8 bg-white dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent border-b border-gray-200 dark:border-gray-700">

            <div class="flex justify-between items-center mb-8">
            
                <h1 class="text-2xl font-medium text-gray-900 dark:text-white mb-4">
                    Habitaciones
                </h1>

                <Link :href="route('rooms.create')">
                    <Button>
                        Añadar habitación
                    </Button>
                </Link>
            </div>

            <div class="text-white overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg flex flex-col gap-4">
                <RoomCard v-for="room in props.rooms.data" :room="room" />
            </div>
        </div>

    </div>
</template>
