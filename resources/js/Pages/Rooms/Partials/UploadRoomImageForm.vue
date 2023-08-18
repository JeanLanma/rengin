<script setup>
import { ref } from 'vue';
import { useForm } from '@inertiajs/vue3';
import DeleteX from '@/Shared/DeleteX.vue';

const props = defineProps({
    room: Object,
});

const PhotoInput = ref(null);
const photoMaxSize = 1024 * 1024 * 2; // 2MB

const form = useForm({
    image: null,
    gallery_id: props.room.id,
    gallery_type: 'App\\Models\\Room',
});

const uploadImageForm = () => {
    
    const photo = PhotoInput.value.files[0] ?? Photo;
    
    if (! photo) return;
    
    if ( photo.size && photo.size >  photoMaxSize ) return alert('La imagen no puede ser mayor a 2MB');
    
    form.image = photo;
    
    form.post(route('upload.image'), {
        preserveScroll: true,
        onSuccess: () => {
            form.reset();
        },
    });
};

const clicInputPhoto = () => {
    PhotoInput.value.click();
}

const deleteImage = (ImageID) => {
    form.delete(route('delete.image', {image_id: ImageID}), {
        preserveScroll: true,
        onSuccess: () => {
            form.reset();
        },
    });
};
</script>

<template>
    <div class="flex w-full flex-wrap content-center justify-center md:justify-end p-1.5 md:p-0">
    <div class="grid md:grid-cols-2 gap-3">

        <input
            ref="PhotoInput"
            type="file"
            class="hidden"
            @change="uploadImageForm"
        >
        <div 
            @click="clicInputPhoto"
            class="w-80 bg-white dark:bg-gray-800 p-3">
            <svg class="h-52 p-8 fill-gray-400 hover:fill-gray-600 mx-auto w-full bg-gray-700 opacity-50 scale-up-center" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M389.8 125.2C363.7 88.1 320.7 64 272 64c-77.4 0-140.5 61-143.9 137.5c-.6 13-9 24.4-21.3 28.8C63.2 245.7 32 287.2 32 336c0 61.9 50.1 112 112 112H512c53 0 96-43 96-96c0-36.8-20.7-68.8-51.2-84.9c-13.4-7.1-20-22.5-15.8-37.1c2-6.9 3-14.3 3-22c0-44.2-35.8-80-80-80c-12.3 0-23.9 2.8-34.3 7.7c-14.1 6.7-30.9 2.3-39.9-10.5zM272 32c59.5 0 112.1 29.5 144 74.8C430.5 99.9 446.8 96 464 96c61.9 0 112 50.1 112 112c0 10.7-1.5 21-4.3 30.8C612.3 260.2 640 302.9 640 352c0 70.7-57.3 128-128 128H144C64.5 480 0 415.5 0 336c0-62.8 40.2-116.1 96.2-135.9C100.3 106.6 177.4 32 272 32zM228.7 244.7l80-80c6.2-6.2 16.4-6.2 22.6 0l80 80c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L336 214.6V368c0 8.8-7.2 16-16 16s-16-7.2-16-16V214.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6z"/></svg>
            <ul class="mt-3 flex flex-wrap">
                <li class="mr-auto">
                    <div @click="clicInputPhoto" class="flex text-gray-400 hover:text-gray-600 cursor-pointer">
                        <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" width="800px" height="800px" viewBox="0 0 32 32" version="1.1">
                            <path d="M0 16v-1.984q0-3.328 2.336-5.664t5.664-2.336q1.024 0 2.176 0.352 0.576-2.752 2.784-4.544t5.056-1.824q3.296 0 5.632 2.368t2.368 5.632q0 0.896-0.32 2.048 0.224-0.032 0.32-0.032 2.464 0 4.224 1.76t1.76 4.224v2.016q0 2.496-1.76 4.224t-4.224 1.76h-0.384q0.288-0.8 0.352-1.44 0.096-1.312-0.32-2.56t-1.408-2.208l-4-4q-1.76-1.792-4.256-1.792t-4.224 1.76l-4 4q-0.96 0.96-1.408 2.24t-0.32 2.592q0.032 0.576 0.256 1.248-2.72-0.608-4.512-2.784t-1.792-5.056zM10.016 22.208q-0.096-0.96 0.576-1.6l4-4q0.608-0.608 1.408-0.608 0.832 0 1.408 0.608l4 4q0.672 0.64 0.608 1.6-0.032 0.288-0.16 0.576-0.224 0.544-0.736 0.896t-1.12 0.32h-1.984v6.016q0 0.832-0.608 1.408t-1.408 0.576-1.408-0.576-0.576-1.408v-6.016h-2.016q-0.608 0-1.088-0.32t-0.768-0.896q-0.096-0.288-0.128-0.576z"/>
                        </svg>
                        &nbsp; Subir imagen
                    </div>
                </li>
            </ul>
        </div>
        
        <template v-if="props.room.gallery" v-for="image in props.room.gallery">
            <div class="w-80 bg-white dark:bg-gray-800 p-3">
                <img class="h-52 w-full object-cover" :src="image.path" :alt="image.image_alt"/>
                <ul class="mt-3 flex flex-wrap">
                    <li class="mr-auto group">
                        <div @click="deleteImage(image.id)" class="flex text-red-400 group-hover:text-red-500 cursor-pointer">
                            <DeleteX class="w-6 h-6 fill-red-400 group-hover:fill-red-500" />
                            &nbsp;Borrar
                        </div>
                    </li>
                </ul>
            </div>
        </template>
    </div>
    </div>
</template>