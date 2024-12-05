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
    <div class="flex text-center items-center">
        <OutlinedButton @click="counter > minCount ? $emit('update:counter',counter -= step) : null" class="px-3 py-1 border rounded">
            <span>-</span>
        </OutlinedButton >
        <div class="pl-3 pr-3 py-1 w-10">
            <span class="my-auto font-bold">{{ counter }}</span>
            <input
            hidden
            type="number"
            class="hidden"
            :value="counter"
            @input="$emit('update:counter', $event.target.value)"
            >
        </div>
        <OutlinedButton @click="counter < maxCount ? $emit('update:counter',counter += step) : null" class="px-3 py-1 border rounded">
            <span>+</span>
        </OutlinedButton >
    </div>
</template>