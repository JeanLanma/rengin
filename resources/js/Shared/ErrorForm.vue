<script setup>
const props = defineProps({
    error: {
        type: String,
        default: null
    },
    errorText: {
        type: String,
        default: null
    }
})
</script>
<template>
    <div class="alert alert-danger" role="alert">
        <span v-if="error" class="text-red-500">{{ errorText ?? error }}</span>
    </div>
</template>