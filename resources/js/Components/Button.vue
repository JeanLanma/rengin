<script setup>

defineProps({
    text: String,
})

</script>

<template>
    <button class="bg-sky-600 text-white active:bg-sky-700 hover:bg-sky-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">
        {{ text }}
    </button>
</template>