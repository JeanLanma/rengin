<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import SectionBorder from '@/Components/SectionBorder.vue';
import EditRoomForm from '@/Pages/Rooms/Partials/EditRoomForm.vue';
import UploadRoomImageForm from './Partials/UploadRoomImageForm.vue';


const props = defineProps({
    room: Object,
});
</script>

<template>
    <AppLayout title="Habitaciones">
        <template #header>
            <div>
                <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight inline hover:underline">
                    <a :href="route('rooms.index')">Habitaciones</a>
                </h2>
                <svg class="w-6 h-6 text-gray-400 inline" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                <h3 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight inline">Editar</h3>
            </div>
        </template>

        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <div v-if="$page.props.jetstream.canUpdateProfileInformation">
                    <EditRoomForm :room="room" />

                    <SectionBorder />
                </div>

                <template v-if="$page.props.jetstream.canUpdateProfileInformation">

                    <UploadRoomImageForm />
                </template>
            </div>
        </div>
    </AppLayout>
</template>
