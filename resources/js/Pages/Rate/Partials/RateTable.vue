<script setup>

import VueDatePicker from '@vuepic/vue-datepicker';
import InputLabel from '@/Components/InputLabel.vue';
import NumberInput from '@/Components/AppInput.vue';
import Modal from '@/Components/DialogModal.vue';
import { Link, router } from '@inertiajs/vue3';
import '@vuepic/vue-datepicker/dist/main.css'
import { ref, onBeforeMount } from 'vue';
import { hasDarkMode } from '#utils';
import OutlinedButton from '@/Shared/OutlinedButton.vue';
import { DateTime } from 'luxon';
import axios from 'axios';
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

const priceCells = ref([]);
const availabilityCells = ref([]);
const priceCellsModified = ref([]);
const date = ref([]);
const showSuccess = ref(false);
const switchPriceOrAvailability = ref(null);

const updateTypes = {
    'perDay':'perDay',
    'perPeriod':'perPeriod',
}
const updateType = ref(updateTypes.perDay);


const periodDistribution = ref({
    price: 0,
    availability: 0,
    start_date: '',
    end_date: '',
    priceOrAvailability: 'precio',
})

const getPriceCells = (element) => {
    if(element && !priceCells.value.includes(element)) {
        priceCells.value.push(element);
    }
}

const getAvailabilityCells = (element) => {
    if(element && !availabilityCells.value.includes(element)) {
        availabilityCells.value.push(element);
    }
}

const updateRoomPrice = (rate, price, index) => {

    let rateClone = {};

    if(!isInModifiedList(rate.id)) {
        rateClone = {...rate, price: price}
        priceCellsModified.value = [...priceCellsModified.value, rateClone];
    } else {
        priceCellsModified.value = priceCellsModified.value.map((item) => {
            if(item.id == rate.id) {
                item.price = price;
            }
            return item;
        });
    }

    if(priceCells.value[index]) {
        priceCells.value[index].classList.add('dark:bg-indigo-600', 'bg-indigo-100');
    }

    if(isOriginalDistribution(rateClone.id, price, rateClone.availability)){
        priceCellsModified.value = priceCellsModified.value.filter((item) => item.id != rate.id);
        priceCells.value[index].classList.remove('dark:bg-indigo-600', 'bg-indigo-100');
    }

}
const updateRoomAvailability = (rate, availability, index) => {

    let rateClone = {};

    if(!isInModifiedList(rate.id)) {
        rateClone = {...rate, availability: availability}
        priceCellsModified.value = [...priceCellsModified.value, rateClone];
    }

    if(availabilityCells.value[index]) {
        availabilityCells.value[index].classList.add('dark:bg-indigo-600', 'bg-indigo-100');
    }

    if(isOriginalDistribution(rateClone.id, rateClone.price, availability)){
        priceCellsModified.value = priceCellsModified.value.filter((item) => item.id != rate.id);
        availabilityCells.value[index].classList.remove('dark:bg-indigo-600', 'bg-indigo-100');
    }

}

const isOriginalDistribution = ( id, price, availability ) => {
    return props.rate.find((item) => {
                return  (item.id == id && 
                        item.price == price && 
                        item.availability == availability);
            }) 
            ? true 
            : false;
}

const isInModifiedList = ( id ) => {
    return  priceCellsModified.value.find((item) => item.id == id) 
            ? true 
            : false;
}

const formatDT = (date) => {
    return DateTime.fromFormat(date, 'yyyy-LL-dd');
}
// ! Check if the prop date is today by string comparison
const isBeforeToday = (date) => {
    return formatDT(date) <= DateTime.local();
}
// ! Check if the prop date is today by string comparison
const isToday = (date) => {
    return (date == DateTime.local().toFormat('yyyy-LL-dd'));
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

const format = ([DateStart, DateEnd]) => {

    const day = DateStart.getDate();
    const month = DateStart.getMonth() + 1;
    const year = DateStart.getFullYear();

    let day2;
    let month2;
    let year2;

    if(!DateEnd)
    {
        day2 = DateStart.getDate();
        month2 = DateStart.getMonth() + 1;
        year2 = DateStart.getFullYear();
    }else {
        day2 = DateEnd.getDate();
        month2 = DateEnd.getMonth() + 1;
        year2 = DateEnd.getFullYear();
    }

    return `${day}/${month}/${year} - ${day2}/${month2}/${year2}`;
}

const updatePeriodDistribution = () => {
    // format date to string
    const startDate = DateTime.fromJSDate(date.value[0]).toFormat('yyyy-LL-dd');
    const endDate = DateTime.fromJSDate(date.value[1]).toFormat('yyyy-LL-dd');
    
    periodDistribution.value = {
        ...periodDistribution.value,
        start_date: startDate,
        end_date: endDate,
    }

    // return console.log(periodDistribution.value);
    axios.post(route('distribution.update.period', {'roomId': props.room.id}), {data: periodDistribution.value})
        .then((response) => {
            router.reload({ only: ['rate'] })
            showSuccess.value = true;
            
            periodDistribution.value = {
                price: 0,
                availability: 0,
                start_date: '',
                end_date: '',
                priceOrAvailability: 'precio',
            }
            date.value = [];

            if (switchPriceOrAvailability.value.classList.contains('right-1')){
                switchPriceOrAvailability.value.classList.remove('right-1')
                switchPriceOrAvailability.value.classList.add('left-1')
            }else {
                switchPriceOrAvailability.value.classList.remove('left-1')
                switchPriceOrAvailability.value.classList.add('right-1')
            }
        })
        .catch((error) => {
            console.log(error);
        })
}

function togglePeriodDistribution(isModfied){
    periodDistribution.value.priceOrAvailability = isModfied;

    if (switchPriceOrAvailability.value.classList.contains('right-1')){
        switchPriceOrAvailability.value.classList.remove('right-1')
        switchPriceOrAvailability.value.classList.add('left-1')
    }else {
        switchPriceOrAvailability.value.classList.remove('left-1')
        switchPriceOrAvailability.value.classList.add('right-1')
    }
}

function setUpdateType (type) {
    if(type == updateType.value) return null;
    updateType.value = type;
}

function isUpdateType (type) {
    return updateType.value == type;
}
</script>

<template>
    <div>
        <!-- Modal -->
        <Modal :show="showSuccess" @close="showSuccess = false">
            <template #title>
                Operación exitosa
            </template>
            <template #content>
                La actulalización de la distribución se ha realizado con éxito.
            </template>
            <template #footer>
                <OutlinedButton @click.native="showSuccess = false">
                    Entendido
                </OutlinedButton>
            </template>
        </Modal>
        <!-- /Modal -->
        <div class="p-6 lg:p-8 bg-white dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent border-b border-gray-200 dark:border-gray-700">

            <section class="sm:flex sm:justify-between">

                <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                    {{ props.room.name }}
                </h1>

            </section>

            <section>
            <!-- Tab Navigation -->
            <div>
                <nav class="flex flex-col sm:flex-row text-center">
                    <span @click="setUpdateType(updateTypes.perDay)" :class="isUpdateType(updateTypes.perDay) ? 'border-b-2 font-bold border-indigo-500 text-indigo-500' : ''" class="cursor-pointer text-gray-600 py-4 px-6 block hover:text-indigo-500 focus:outline-none">
                        actulalización por dia
                    </span>
                    <span @click="setUpdateType(updateTypes.perPeriod)" :class="isUpdateType(updateTypes.perPeriod) ? 'border-b-2 font-bold border-indigo-500 text-indigo-500' : ''" class="cursor-pointer text-gray-600 py-4 px-6 block hover:text-indigo-500 focus:outline-none">
                        actulalización por periodo
                    </span>
                </nav>
            </div>
            </section>

            <section>
                
                <div v-if="priceCellsModified.length > 0">
                    <h2 class="text-xl text-gray-900 dark:text-white mb-4"> Se modificaran {{ priceCellsModified.length }} elementos! <Link :href="route('distribution.update.multiple')" :data="{data: priceCellsModified}" method="POST" as="button" class="text-base bg-sky-500 p-2 rounded-lg font-bold hover:bg-sky-600 duration-200 outline-white text-white" >Guardar {{ priceCellsModified.length }} cambios!</Link></h2>
                </div>
            
            </section>
            <div v-if="isUpdateType(updateTypes.perPeriod)" class="px-2 py-8 border border-gray-200 dark:border-gray-700 md:rounded-lg mb-12">

                <h2 class="text-2xl text-gray-900 dark:text-white mb-4 font-bold">Actulalización colectiva</h2>
                <h4 class="text-white font-bold">Tipo de actulalización </h4>
                <div class="mb-8 mx-8 max-w-sm shadow rounded-full h-10 mt-4 flex p-1 relative items-center dark:bg-gray-800 bg-gray-50">
                    <div class="w-full flex justify-center dark:text-white">
                        <button @click="togglePeriodDistribution('precio')">Precio</button>
                    </div>
                    <div class="w-full flex justify-center dark:text-white">
                        <button @click="togglePeriodDistribution('disponibilidad')">Disponibilidad</button>
                    </div>
                    <span 
                    ref="switchPriceOrAvailability"
                    class="elSwitch bg-sky-500 shadow text-white flex items-center justify-center w-1/2 rounded-full h-8 transition-all top-[4px] absolute left-1 ">
                    {{ periodDistribution.priceOrAvailability }}
                    </span>
                </div>

                <div class="flex justify-around items-baseline xl:items-center flex-wrap">

                    <div class="w-full md:w-1/3" >

                        <InputLabel for="datePicker" value="Fechas a modificar"/>
                        <VueDatePicker class="mt-2" :format="format"  v-model="date" range :dark="hasDarkMode()" multi-calendars placeholder="Seleccione un rango de fechas"/>
                    
                    </div>

                    <div class="flex w-full md:w-1/3">

                        <div v-if="periodDistribution.priceOrAvailability == 'precio'" class="w-full">
                            
                            <InputLabel for="periodPrice" value="Precio" />
                            <NumberInput
                                type="number"
                                id="periodPrice"
                                v-model="periodDistribution.price"
                                class="mt-1 w-full"
                            />
                            
                        </div>
                        <div v-else class="w-full">
                            
                            <InputLabel for="PeriodAvailability" value="Disponibilidad" />
                            <NumberInput
                                type="number"
                                id="PeriodAvailability"
                                v-model="periodDistribution.availability"
                                class="mt-1 block w-full"
                            />
                            
                        </div>
                    
                    </div>

                    <div class="mr-auto xl:mr-0 mt-4">                            
                            <OutlinedButton @click="updatePeriodDistribution" >Guardar los cambios</OutlinedButton>
                    </div>
                </div>

            </div>
                
            <div>

                <!-- Filters -->
                <section>
                    <div class="text-slate-50 font-bold text-xl flex gap-4 rounded-xl p-2">

                        <div class="flex p-2 w-full max-w-md justify-center space-x-0">
                            
                            <Link as="button" :disabled="isBeforeToday(props.start_date)" :href="route('distribution.getByRoomId', { 'roomId': props.room.id, 'date': prevWeek(props.start_date) })" :only="['rate', 'start_date']" class="min-w-auto w-32 h-10 bg-sky-500 p-2 rounded-l-xl hover:bg-sky-700  text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out border-y-2 border-l-2 flex justify-center items-center" preserveScroll>
                                <button innerText="<<" ></button>
                            </Link>
                            <Link as="button" :disabled="isToday(props.start_date)" :href="route('distribution.getByRoomId', { 'roomId': props.room.id, 'date': thisWeek() })" :only="['rate', 'start_date']" class="min-w-auto w-32 h-10 bg-sky-500 p-2 rounded-none hover:bg-sky-700 text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out border-2 border-x-sky-300 text-center flex justify-center items-center" preserveScroll>
                                <button innerText="Today"></button>
                            </Link>
                            <Link :href="route('distribution.getByRoomId', { 'roomId': props.room.id, 'date': nextWeek(props.start_date) })" :only="['rate', 'start_date']" class="min-w-auto w-32 h-10 bg-sky-500 p-2 rounded-r-xl hover:bg-sky-700 text-white font-semibold hover:flex-grow transition-all duration-200 ease-in-out overflow-hidden border-y-2 border-r-2 flex justify-center items-center" preserveScroll>
                                <button innerText=">>"></button>
                            </Link>
                        </div>

                    </div>
                </section>

                <div class="text-white border border-gray-200 dark:border-gray-700 md:rounded-lg overflow-auto " id="thin-scroll">
                    <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 cursor-pointer box-shadow">
                        <thead>
                            <tr>
                                <th class="px-4 py-1 font-bold text-gray-500 dark:text-gray-400 text-center"><span class="font-bold block text-xl">&nbsp;</span></th>
                                <th v-for="rate in props.rate" class="px-4 py-1 font-bold text-gray-500 dark:text-gray-400 text-center min-w-[5.5rem]" :class="(rate.day_name == 'Dom' || rate.day_name == 'Sáb') ? 'dark:bg-gray-700 bg-gray-200' : '' "><span>{{ isToday(rate.date) ? 'Hoy' : rate.day_name }}</span><span class="font-bold block text-2xl">{{ rate.day }}</span><span class="text-sm font-normal">{{ rate.month_name }}</span></th>
                            </tr>
                        </thead>
                        <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">

                            <tr class="dark:hover:bg-gray-600 hover:bg-gray-100">

                                <th class="px-4 py-3.5 font-bold text-gray-500 dark:text-gray-400 text-center text-sm whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span>Disponibles</span></th>


                                <template  v-for="(rate, index) in props.rate" :key="rate.id">
                                    <td :ref="getAvailabilityCells" class="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span contenteditable @keydown.enter.prevent.stop="updateRoomAvailability(rate, $event.target.textContent, index)" @blur="updateRoomAvailability(rate, $event.target.textContent, index)" >{{ rate.availability }}</span></td>
                                </template>
                                
                            </tr>

                            <tr class="dark:hover:bg-gray-600 hover:bg-gray-100">

                                <th class="px-4 py-3.5 font-bold text-gray-500 dark:text-gray-400 text-center text-sm whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span>Precio</span></th>

                                <template v-for="(rate, index) in props.rate" :key="rate.id">

                                    <td :ref="getPriceCells" class="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700 cursor-text"><span contenteditable @keydown.enter.prevent.stop="updateRoomPrice(rate, $event.target.textContent, index)" @blur="updateRoomPrice(rate, $event.target.textContent, index)">{{ rate.price }}</span></td>
                                
                                </template>
                                
                            </tr>

                        </tbody>
                    </table>

                    
                </div>

            </div>
            
        </div>

    </div>
</template>

<style>

/* Distribution Table */
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