<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import UsersTable from '@/Pages/User/Partials/UsersTable.vue';
const props = defineProps({
    users: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <AppLayout title="Usuarios">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                Usuarios
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg">
                    <UsersTable :users="users"/>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
