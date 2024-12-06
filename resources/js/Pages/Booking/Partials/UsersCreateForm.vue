<script setup>
import { ref } from 'vue';
import { Link, useForm } from '@inertiajs/vue3';
import ActionMessage from '@/Components/ActionMessage.vue';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';

const form = useForm({
    _method: 'POST',
    name: null,
    email: null,
    role: null,
    password: null,
    password_confirmation: null,
    terms: true,
});

const verificationLinkSent = ref(null);

const saveUser = () => {

    form.post(route('users.store'), {
        errorBag: 'saveUser',
        preserveScroll: true,
        onSuccess: () => {
            console.log('saveUser');
        },
        onError: (errors) => {
            console.log(errors);
            alert('Error al guardar el usuario');
        }
    });
};

const asignRole = async (roleID) => {

    form.role = roleID;
    console.log(form.role);
}

const hasRole = (role) => {
    return form.role == role;
}
</script>

<template>
    <FormSection @submitted="saveUser">
        <template #title>
            Información del usuario
        </template>

        <template #description>
            Registre un nuevo usuario con los datos solicitados.
        </template>

        <template #form>

            <!-- Name -->
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="name" value="Nombre" />
                <TextInput
                    id="name"
                    v-model="form.name"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete="name"
                />
                <InputError :message="form.errors.name" class="mt-2" />
            </div>

            <!-- Email -->
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="email" value="Correo electronico" />
                <TextInput
                    id="email"
                    v-model="form.email"
                    type="email"
                    class="mt-1 block w-full"
                    autocomplete="username"
                />
                <InputError :message="form.errors.email" class="mt-2" />

                <div v-if="$page.props.jetstream.hasEmailVerification && user.email_verified_at === null">
                    <p class="text-sm mt-2 dark:text-white">
                        Your email address is unverified.

                        <Link
                            :href="route('verification.send')"
                            method="post"
                            as="button"
                            class="underline text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 dark:focus:ring-offset-gray-800"
                            @click.prevent="sendEmailVerification"
                        >
                            Click here to re-send the verification email.
                        </Link>
                    </p>

                    <div v-show="verificationLinkSent" class="mt-2 font-medium text-sm text-green-600 dark:text-green-400">
                        A new verification link has been sent to your email address.
                    </div>
                </div>
            </div>
            <!-- Password -->
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="password" value="Contraseña" />
                <TextInput
                    id="password"
                    ref="password"
                    v-model="form.password"
                    type="password"
                    class="mt-1 block w-full"
                    autocomplete="password"
                />
                <InputError :message="form.errors.password" class="mt-2" />
            </div>
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="password_confirmation" value="Confirmar contraseña" />
                <TextInput
                    id="password_confirmation"
                    v-model="form.password_confirmation"
                    type="password"
                    class="mt-1 block w-full"
                    required
                    autocomplete="new-password"
                />
                <InputError class="mt-2" :message="form.errors.password_confirmation" />
            </div>
            <div class="col-span-6 sm:col-span-4">
                <div class="flex gap-2">
                        <span
                        @click="asignRole(1)"
                        :class="hasRole(1) 
                            ? 'bg-yellow-cta text-white border border-yellow-cta-acent inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold cursor-pointer' 
                            : 'inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600 cursor-pointer'"
                        
                        >
                        Admin
                        </span>
                        <span
                        @click="asignRole(2)"
                        :class="hasRole(2)
                        ? 'inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold bg-yellow-cta text-white cursor-pointer'
                        : 'inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600 cursor-pointer'"
                        >
                        Ventas
                        </span>
                        <span
                        @click="asignRole(3)"
                        :class="
                                hasRole(3)
                        ? 'inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold bg-yellow-cta text-white cursor-pointer'  
                        : 'inline-flex items-center gap-1 rounded-full bg-sky-50 px-2 py-1 text-xs font-semibold text-sky-600 cursor-pointer'"
                        >
                        General
                        </span>
                    </div>

            </div>
        </template>

        <template #actions>
            <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                Saved.
            </ActionMessage>

            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Save
            </PrimaryButton>
        </template>
    </FormSection>
</template>
