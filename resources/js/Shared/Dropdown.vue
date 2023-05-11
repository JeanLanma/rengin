<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
const selected = ref('Opciones');
</script>
<template>
<div class="relative inline-block text-left">
    <button @click="isOpen = !isOpen" class="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" v-bind:aria-expanded="isOpen">
    {{ selected }}
    <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
    </svg>
    </button>
    <div v-show="isOpen" @click="isOpen = false" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
    <div class="py-1" role="none">
        <slot />
    </div>
    </div>
</div>
</template>