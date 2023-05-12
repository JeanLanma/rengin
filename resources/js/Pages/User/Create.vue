<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import SectionBorder from '@/Components/SectionBorder.vue';
import BreadCrumbArrow from '@/Shared/BreadCrumbArrow.vue';
import UsersCreateForm from '@/Pages/User/Partials/UsersCreateForm.vue';
import { Link } from '@inertiajs/vue3';
</script>

<template>
    <AppLayout title="Profile">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                <Link :href="route('users.index')" class="hover:underline">Usuarios</Link>
                <BreadCrumbArrow /> 
                Nuevo
            </h2>
        </template>

        <div>
            <div class="max-w-7xl mx-auto py-10 sm:px-6 lg:px-8">
                <div>
                    <SectionBorder />
                </div>

                <div v-if="$page.props.jetstream.canUpdatePassword">
                    <UsersCreateForm class="mt-10 sm:mt-0" />

                    <SectionBorder />
                </div>

            </div>
        </div>
    </AppLayout>
</template>
