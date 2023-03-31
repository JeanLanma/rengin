<script setup>
import { ref } from 'vue';
import { router, useForm } from '@inertiajs/vue3';
import ActionMessage from '@/Components/ActionMessage.vue';
import FormSection from '@/Components/FormSection.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import SecondaryButton from '@/Components/SecondaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import Dropzone from '@/Pages/Rooms/Partials/Dropzone.vue';

const props = defineProps({
    user: Object,
});

const form = useForm({
    _method: 'POST',
    type: '',
    name: '',
    description: '',
    base_capacity: '',
    max_capacity: '',
    base_price: '0.00',
    cover: '',
});

const photoPreview = ref(null);
const photoInput = ref(null);

const storeRoom = () => {
    if (photoInput.value && photoInput.value.files[0]) {
        form.cover = photoInput.value.files[0];
    }

    form.post(route('rooms.store'), {
        errorBag: 'storeRoom',
        preserveScroll: true,
        onSuccess: () => clearPhotoFileInput(),
    });
};

const selectNewPhoto = () => {
    photoInput.value.click();
};

const updatePhotoPreview = (Photo = null) => {
    const photo = photoInput.value.files[0] ?? Photo;

    if (! photo) return;
    form.cover = photo;
    const reader = new FileReader();

    reader.onload = (e) => {
        photoPreview.value = e.target.result;
    };

    reader.readAsDataURL(photo);
};

const deletePhoto = () => {
    router.delete(route('current-user-photo.destroy'), {
        preserveScroll: true,
        onSuccess: () => {
            photoPreview.value = null;
            clearPhotoFileInput();
        },
    });
};

const clearPhotoFileInput = () => {
    if (photoInput.value?.value) {
        photoInput.value.value = null;
    }
};
</script>

<template>
    <FormSection @submitted="storeRoom">
        <template #title>
            Información de la habitación
        </template>

        <template #description>
            Agrega una nueva habitación.
        </template>

        <template #form>
            <!-- Cover -->
            <div class="col-span-6 sm:col-span-4">
                <!-- Cover -->
                <input
                    ref="photoInput"
                    type="file"
                    class="hidden"
                    @change="updatePhotoPreview"
                >

                <InputLabel for="photo" value="Imagen Principal" />

                <!-- Current Profile Photo -->
                <div class="mt-2">
                    <Dropzone
                        @click.prevent="selectNewPhoto"
                        @file-dropped="updatePhotoPreview"
                        :style=" photoPreview ? 'background-image: url(\'' + photoPreview + '\');' : ''"
                        />
                </div>

                <SecondaryButton class="mt-2 mr-2" type="button" @click.prevent="selectNewPhoto">
                    Select A New Photo
                </SecondaryButton>

                <InputError :message="form.errors.photo" class="mt-2" />
            </div>

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

            <!-- Type -->
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="type" value="Tipo" />
                <TextInput
                    id="type"
                    v-model="form.type"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete="type"
                />
                <InputError :message="form.errors.type" class="mt-2" />
            </div>
            <br>
            <!-- Base Capacity -->
            <div class="col-span-6 sm:col-span-2">
                <InputLabel for="base_capacity" value="Capacidad Base"/>
                <TextInput
                    id="base_capacity"
                    v-model="form.base_capacity"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete="base_capacity"
                />
                <InputError :message="form.errors.base_capacity" class="mt-2" />
            </div>
            <!-- Max Capacity -->
            <div class="col-span-6 sm:col-span-2">
                <InputLabel for="max_capacity" value="Capacidad Maxima" />
                <TextInput
                    id="max_capacity"
                    v-model="form.max_capacity"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete="max_capacity"
                />
                <InputError :message="form.errors.max_capacity" class="mt-2" />
            </div>
            <!-- Description -->
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="description" value="Descripción" />
                <textarea
                    id="description"
                    v-model="form.description"
                    type="description"
                    class="mt-1 block w-full border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-indigo-500 dark:focus:border-indigo-600 focus:ring-indigo-500 dark:focus:ring-indigo-600 rounded-md shadow-sm"
                    autocomplete="description"
                ></textarea>
                <InputError :message="form.errors.description" class="mt-2" />

            </div>
            
            <br>
            <!-- Price -->
            <div class="col-span-6 sm:col-span-4">
                <InputLabel for="base_price" value="Precio base" />
                <TextInput
                    id="base_price"
                    v-model="form.base_price"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete="base_price"
                />
                <InputError :message="form.errors.base_price" class="mt-2" />
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
