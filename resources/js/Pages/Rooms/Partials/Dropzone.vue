<script setup>
import { ref } from 'vue';

const emit = defineEmits(['file-dropped']);


const dragging = ref(false);

const handleDragEnter = (event) => {
    dragging.value = true;
};

const handleDragLeave = (event) => {
    dragging.value = false;
};

const handleDragOver = (event) => {};

const handleDrop = (event) => {
    dragging.value = false;

    const files = event.dataTransfer.files;
    if (files.length) {
    const file = files[0];
    if (file.type.startsWith('image/')) {
        emit('file-dropped', file);
    } else {
        alert('Por favor, arrastra sólo archivos de imagen.');
    }
    }
};

</script>

<template>

<span
    class="block rounded h-40 w-full bg-cover bg-no-repeat bg-center bg-sky-500"
    @dragenter.prevent.stop="handleDragEnter"
    @dragleave.prevent.stop="handleDragLeave"
    @dragover.prevent.stop="handleDragOver"
    @drop.prevent.stop="handleDrop"
    >Sin imagen</span>

</template>