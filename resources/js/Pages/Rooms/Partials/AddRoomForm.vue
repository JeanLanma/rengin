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
import Tooltip from '@/Components/Tooltip.vue';
import FormNumberInput from '@/Shared/FormNumberInput.vue';

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
const photoMaxSize = 1024 * 1024 * 2; // 2MB

const storeRoom = () => {
    if (photoInput.value && photoInput.value.files[0]) {
        form.cover = photoInput.value.files[0];
    }

    form.post(route('rooms.store'), {
        errorBag: 'storeRoom',
        preserveScroll: true,
        onSuccess: () => clearPhotoFileInput(),
        onError: (errors) =>{
            alert('Error al guardar la habitación');
            console.log(errors);
        }
    });
};

const selectNewPhoto = () => {
    photoInput.value.click();
};

const updatePhotoPreview = (Photo = null) => {
    const photo = photoInput.value.files[0] ?? Photo;

    if (! photo) return;

    if ( photo.size && photo.size >  photoMaxSize ) return alert('La imagen no puede ser mayor a 2MB');
    
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
                    id="cover"
                    @change="updatePhotoPreview"
                >

                <div class="flex">
                    <InputLabel for="photo" value="Imagen Principal" />
                    <div class="tooltip group text-white relative whitespace-nowrap">
                        <svg class="fill-white w-6 ml-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm168-72c0-30.9 25.1-56 56-56h56.9c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4V272v24H232V272 250.5 236.6l12.1-6.9 44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H224c-4.4 0-8 3.6-8 8l0 6.5-48 0V184zm64 152h48v48H232V336z"/></svg>
                        <span class="after:content-[''] after:absolute after:bottom-full after:left-1/2 after:-mr-1 after:border-[5px] after:border-solid after:border-b-2-transparent after:border-t-transparent after:border-r-transparent after:border-l-transparent tooltiptext invisible group-hover:visible  absolute top-[125%] left-1/2 -translate-x-1/2 w-max max-w-[17rem] px-4 py-1 bg-white text-black/60 rounded whitespace-pre-wrap">Esta sera la imagen Principal (tamaño maximo 2mb)</span>
                    </div>
                </div>

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

                <InputError :message="form.errors.cover" class="mt-2" />
            </div>

            <!-- Name -->
            <div class="col-span-6 sm:col-span-4">
                <div class="flex">
                    <InputLabel for="name" value="Nombre" />
                    <Tooltip text="El nombre que se mostrara al publico"/>
                </div>
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
                <div class="flex">
                    <InputLabel for="type" value="Tipo" />
                    <Tooltip text="Nombre interno o referencia interna de la habitación, Sencilla, Doble Suite etc.."/>
                </div>
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
                <div class="flex">
                    <InputLabel for="base_price" value="Precio base" />
                    <Tooltip text="Precio para la distribución en MXN Sin Impuestos para la habitación"/>
                </div>
                <TextInput
                    id="base_price"
                    v-model="form.base_price"
                    type="text"
                    class="mt-1 block w-full"
                    autocomplete="base_price"
                />
                <InputError :message="form.errors.base_price" class="mt-2" />
            </div>
            <div class="col-span-6 sm:col-span-4">
                <FormNumberInput />
            </div>
        </template>

        <template #actions>
            <ActionMessage :on="form.recentlySuccessful" class="mr-3">
                Saved.
            </ActionMessage>

            <PrimaryButton id="save_room" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Save
            </PrimaryButton>
        </template>
    </FormSection>
</template>
