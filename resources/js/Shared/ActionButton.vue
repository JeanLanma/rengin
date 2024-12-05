<script setup>
const props = defineProps({
    bgColor: {
        type: String,
        default: null,
    },
    as: {
        type: String,
        default: 'button',
    },
})

const bgColors = {
    'primary': 'bg-sky-500 hover:bg-sky-700',
    'secondary': 'bg-green-500 hover:bg-green-700',
    'danger': 'bg-red-500 hover:bg-red-700',
    'warning': 'bg-yellow-500 hover:bg-yellow-700',
    'info': 'bg-blue-500 hover:bg-blue-700',
    'light': 'bg-gray-200 hover:bg-gray-400',
    'dark': 'bg-gray-800 hover:bg-gray-900'
}

const getBgColor = () => {
    if(props.bgColor !== null) {
        return props.bgColor;
    } else if (props.as != null) {
        return bgColors[props.as] ?? bgColors['primary'];
    }
    return bgColors['primary'];
}
</script>
<template>
    <button :class="getBgColor() + ' px-4 py-2 rounded-md text-white font-bold hover:shadow-2xl hover:box-shadow dark:hover:box-shadow-dark transition-all duration-200'">
        <slot></slot>
    </button>
</template>