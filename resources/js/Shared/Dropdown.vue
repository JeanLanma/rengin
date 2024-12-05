<script setup>

import { ref, onMounted, onUnmounted } from 'vue';

const props = defineProps({
    title: {
        type: String,
        default: 'Dropdown',
        required: false,
    }
});

const isOpen = ref(false);

onMounted(() => {
    document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
    document.removeEventListener('click', handleClickOutside);
});

const handleClickOutside = (event) => {
    if (!event.target.closest('.relative')) {
        isOpen.value = false;
    }
}

</script>

<template>
<div class="relative" @click-outside="isOpen = false">
    <button @click="isOpen = !isOpen" class="bg-sky-500 text-white px-6 py-2 rounded-lg rounded-b-none">
    {{ props.title }}
    </button>
    <div v-show="isOpen" @click.away="isOpen = false" class="absolute w-48 rounded-lg rounded-tl-none shadow-lg bg-white">
    <div class="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <slot></slot>
    </div>
    </div>
</div>
</template>