<script setup>

import { Link } from '@inertiajs/vue3';
import { DateTime } from 'luxon';
import { ref } from 'vue';

// Set the current date with format YYYY-MM-DD

const currentDate = ref(DateTime.local());

const props = defineProps({
    rate: {
        type: Object,
        required: true,
    },
    room: {
        type: Object,
        required: true,
    },
    start_date: {
        type: String,
        required: false,
    },
});

const formatDT = (date) => {
    return DateTime.fromFormat(date, 'yyyy-LL-dd');
}

const nextWeek = (queryDate) => {
    return formatDT(queryDate).plus({days: 7}).toFormat('yyyy-LL-dd');
}

const prevWeek = (queryDate) => {
    return formatDT(queryDate).minus({days: 7}).toFormat('yyyy-LL-dd');
}

const thisWeek = () => {
    return DateTime.local().toFormat('yyyy-LL-dd');
}

const testDate = () => {
    console.clear();

    console.log(props.start_date);
}

testDate();
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
                        
                        <Link :href="route('distribution.getByRoomId', { 'roomId': props.room.id, 'date': prevWeek(props.start_date) })" :only="['rate', 'start_date']" class="min-w-auto w-32 h-10 bg-sky-500 p-2 rounded-l-xl hover:bg-sky-700  text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out overflow-hidden">
                            <button innerText="<< prev week" ></button>
                        </Link>
                        <Link :href="route('distribution.getByRoomId', { 'roomId': props.room.id, 'date': thisWeek() })" :only="['rate', 'start_date']" class="min-w-auto w-32 h-10 bg-sky-500 p-2 rounded-none hover:bg-sky-700 text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out border-x-2 border-x-sky-300 text-center">
                            <button innerText="Today"></button>
                        </Link>
                        <Link :href="route('distribution.getByRoomId', { 'roomId': props.room.id, 'date': nextWeek(props.start_date) })" :only="['rate', 'start_date']" class="min-w-auto w-32 h-10 bg-sky-500 p-2 rounded-r-xl hover:bg-sky-700 text-white font-semibold hover:flex-grow transition-all duration-200 ease-in-out overflow-hidden" >
                            <button innerText="next week >>"></button>
                        </Link>
                    </div>

                </div>
            </section>

            <div class="text-white border border-gray-200 dark:border-gray-700 md:rounded-lg overflow-auto" id="thin-scroll">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 cursor-pointer box-shadow">
                    <thead>
                        <tr>
                            <th class="px-4 py-3.5 font-bold text-gray-500 dark:text-gray-400 text-center"><span class="font-bold block text-xl">&nbsp;</span></th>
                            <th v-for="rate in props.rate" class="px-4 py-3.5 font-bold text-gray-500 dark:text-gray-400 text-center" :class="(rate.day_name == 'Dom' || rate.day_name == 'Sáb') ? 'dark:bg-gray-700 bg-gray-200' : '' "><span>{{ rate.day_name }}</span><span class="font-bold block text-xl">{{ rate.day }}</span></th>
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