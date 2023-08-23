<script setup>
import { onMounted, reactive, ref } from 'vue';


const props = defineProps({
    room: Object
})

const currentScroll = ref(0);
const maxScrollCount = ref((props.room.gallery.length - 2) * 100);
const intervalTime = 5000;

const styleObj =  reactive({
    transform: `translateX(-${currentScroll.value}%)`
})

let autoScrollInterval = null;

const nextImage = () => {
    if(currentScroll.value <= maxScrollCount.value){
        currentScroll.value += 100;
        styleObj.transform = `translateX(-${currentScroll.value}%)`
    }else{
        currentScroll.value = 0;
        styleObj.transform = `translateX(-${currentScroll.value}%)`
    }
}

const prevImage = () => {
    if(currentScroll.value > 0){
        currentScroll.value -= 100;
        styleObj.transform = `translateX(-${currentScroll.value}%)`
    }else{
        currentScroll.value = maxScrollCount.value;
        styleObj.transform = `translateX(-${currentScroll.value}%)`
    }
}

const handleMouseEnter = () => {
    clearInterval(autoScrollInterval);
}
const handleMouseLeave = () => {
    autoScrollInterval = setInterval(()=>{
        nextImage();
    }, intervalTime);
    autoScrollInterval = null;
}

onMounted(() => {
    autoScrollInterval = setInterval(()=>{
        nextImage();
    }, intervalTime);
});
</script>

<template>
    <div @mouseenter="handleMouseEnter" @mouseleave="handleMouseLeave" class='h-[14.75rem] md:h-[21.25rem] md:w-2/5 bg-cover bg-center overflow-hidden flex relative'>
            
        <span @click="nextImage" class="absolute z-50 top-1/2 -translate-y-1/2 right-0 hover:bg-white/20 cursor-pointer transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="70px" height="70px" viewBox="0 0 24 24" fill="none">
                <path d="M10 7L15 12L10 17" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>
        <span @click="prevImage" class="absolute z-50 top-1/2 -translate-y-1/2 left-0 hover:bg-white/20 cursor-pointer transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="70px" height="70px" viewBox="0 0 24 24" fill="none">
                <path d="M15 7L10 12L15 17" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>

        <img
        v-for="(image, index) in props.room.gallery" 
        :src="image.image_src"
        :alt="image.image_alt"
        class="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-110 z-10"
        :style="styleObj"
        >
    </div>
</template>