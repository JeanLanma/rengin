<script setup>
import OutlinedButton from '@/Shared/OutlinedButton.vue';

defineProps({
    counter: {
        type: Number,
        default: 0
    },
    step: {
        type: Number,
        default: 1
    },
    maxCount: {
        type: Number,
        default: 99999
    },
    minCount: {
        type: Number,
        default: 0
    }
})

defineEmits(['update:counter'])

</script>

<template>
    <div class="flex align-baseline text-center dark:text-white">
        <OutlinedButton @click="counter > minCount ? $emit('update:counter',counter -= step) : null" class="px-3 py-1 border dark:border-gray-400 rounded">
            <span class="dark:text-white">-</span>
        </OutlinedButton >
        <div class="px-3 py-1 align-middle">
            <span class="my-auto font-bold">{{ counter }}</span>
            <input
            hidden
            type="number"
            class="hidden"
            :value="counter"
            @input="$emit('update:counter', $event.target.value)"
            >
        </div>
        <OutlinedButton @click="counter < maxCount ? $emit('update:counter',counter += step) : null" class="px-3 py-1 border dark:border-gray-400 rounded">
            <span class="dark:text-white">+</span>
        </OutlinedButton >
    </div>
</template>