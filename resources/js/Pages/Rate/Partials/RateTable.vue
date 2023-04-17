<script setup>

import Link from '@/inertiajs/vue3';

// Set the current date with format YYYY-MM-DD

const props = defineProps({
    rate: {
        type: Object,
        required: true,
    },
    room: {
        type: Object,
        required: true,
    },
});


const navigate = (direction) => {
    alert(direction);
}
</script>

<template>
    <div>
        <div class="p-6 lg:p-8 bg-white dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent border-b border-gray-200 dark:border-gray-700">

            <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                {{ props.room.name }}
            </h1>
            
            <!-- Filters -->
            <section>
                <div class="text-slate-50 font-bold text-xl flex gap-4 rounded-xl p-2">

                    <div class="flex p-2 w-full max-w-md justify-center space-x-0">
                        <button @click="navigate('Prev Week')" innerText="<< prev week" class="min-w-auto w-32 h-10 bg-sky-500 p-2 rounded-l-xl hover:bg-sky-700  text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out overflow-hidden"></button>
                        <button @click="navigate('This Week')" innerText="Today" class="min-w-auto w-32 h-10 bg-sky-500 p-2 rounded-none hover:bg-sky-700 text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out border-x-2 border-x-sky-300"></button>
                        <Link href="/">
                            <button @click="navigate('Next Week')" innerText="next week >>" class="min-w-auto w-32 h-10 bg-sky-500 p-2 rounded-r-xl hover:bg-sky-700 text-white font-semibold hover:flex-grow transition-all duration-200 ease-in-out overflow-hidden"></button>
                        </Link>
                    </div>

                </div>
            </section>

            <div class="text-white border border-gray-200 dark:border-gray-700 md:rounded-lg overflow-auto" id="thin-scroll">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 cursor-pointer box-shadow">
                    <thead>
                        <tr>
                            <th class="px-4 py-3.5 font-bold text-gray-500 dark:text-gray-400 text-center"><span class="font-bold block text-xl">&nbsp;</span></th>
                            <th v-for="rate in props.rate" class="px-4 py-3.5 font-bold text-gray-500 dark:text-gray-400 text-center" :class="(rate.day_name == 'Sun' || rate.day_name == 'Sat') ? 'dark:bg-gray-700 bg-gray-200' : '' "><span>{{ rate.day_name }}</span><span class="font-bold block text-xl">{{ rate.day }}</span></th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">

                        <tr class="dark:hover:bg-gray-600 hover:bg-gray-100">

                            <th class="px-4 py-3.5 font-bold text-gray-500 dark:text-gray-400 text-center text-sm whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span>Disponibles</span></th>


                            <td v-for="rate in props.rate" class="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span>{{ rate.availability }}</span></td>
                            
                        </tr>

                        <tr class="dark:hover:bg-gray-600 hover:bg-gray-100">

                            <th class="px-4 py-3.5 font-bold text-gray-500 dark:text-gray-400 text-center text-sm whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span>Precio</span></th>


                            <td v-for="rate in props.rate" class="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700 cursor-text"><span contenteditable>{{ rate.price }}</span></td>
                            
                        </tr>

                    </tbody>
                </table>

                
            </div>
        </div>

    </div>
</template>

<style>
[contenteditable]:focus {
    outline: 0px solid transparent;
}

#thin-scroll::-webkit-scrollbar {
    width: 4px;
    height: 10px;
    cursor: pointer;
    /*background-color: rgba(229, 231, 235, var(--bg-opacity));*/
}
#thin-scroll::-webkit-scrollbar-track {
    background-color: rgba(229, 231, 235, var(--bg-opacity));
    cursor: pointer;
    /*background: red;*/
    border-radius: 10px;
}
#thin-scroll::-webkit-scrollbar-thumb {
    cursor: pointer;
    background-color: #a0aec0;
    /*outline: 1px solid slategrey;*/
    border-radius: 10px;
}

</style>