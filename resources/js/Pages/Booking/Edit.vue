<script setup>
// TREAD
import UserDetails from '@/Pages/User/Partials/UserDetails.vue';
import BreadCrumbArrow from '@/Shared/BreadCrumbArrow.vue';
import AppLayout from '@/Layouts/AppLayout.vue';
import { Link } from '@inertiajs/vue3';
const props = defineProps({
    user: {
        type: Object,
        required: true,
    },
});
</script>

<template>
    <AppLayout title="Usuarios">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight"> 
                <Link :href="route('users.index')"><span class="hover:underline">Usuarios</span></Link>
                <BreadCrumbArrow /> 
                Editar
            </h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white dark:bg-gray-800 overflow-hidden shadow-xl sm:rounded-lg">
                    <UserDetails :user="props.user"/>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
