<script setup>
import { Link, router } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';
import Swal from 'sweetalert2';
import Dropdown from '@/Shared/Dropdown.vue';
import DropdownItem from '@/Shared/DropdownItem.vue';

const props = defineProps({
    bookings: {
        type: Object,
        required: false,
    },
    queryFilters: {
        type: Object,
        required: false,
    },
});

const paginationData = ref({
    links: [],
    previusLinks: [],
    nextLinks: [],
});

const handlePagination = (PaginationAware) => {
    if(PaginationAware.last_page <= 1) {
        return {
            links: [],
            previusLinks: [],
            nextLinks: [],
        };
    }
    const links = [...PaginationAware.links];
    links.unshift();
    links.pop();
    const limit = 3;
    let previusLinks = [];
    if(PaginationAware.current_page >= PaginationAware.last_page) {
        previusLinks = links.slice(PaginationAware.current_page -limit, PaginationAware.current_page);
    } else {
        previusLinks = links.slice(PaginationAware.current_page, PaginationAware.current_page + limit);
    }
    const nextLinks = links.slice(-1);
    return {
        links,
        previusLinks,
        nextLinks,
    };
}

// Add internal reference

const AddInternalReferenceBooking = (data, booking) => {
    console.log(booking);
    Swal.fire({
    title: 'Agregar referencia interna para la reservación #' + data.id,
    input: 'text',
    inputAttributes: {
        autocapitalize: 'off',
        placeholder: 'Referencia interna',
    },
    inputValue: booking.internal_reference ?? '',
    showCancelButton: true,
    confirmButtonText: 'Confirmar',
    showLoaderOnConfirm: true,
    inputValidator: (value) => {
    if (!value) {
      return 'Necesita agregar una referencia interna'
    }},
    preConfirm: async (reference) => {
        return fetch(route('bookings.reference',{ booking: data.id , reference: reference}))
        .then(response => {
            if (!response.ok) {
            throw new Error(response.statusText)
            }
            
            return response.json();
        })
        .catch(error => {
            console.log(error);
            Swal.showValidationMessage(
            `La solicitud ha fallado: ${error}`
            )
        })
    },
    allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
    if (result.isConfirmed) {
        console.log(result.value);
        router.visit(route('bookings.index', props.queryFilters));
        Swal.fire({
        title: `La referencia ha sido agregada correctamente`,
        icon: 'success',
        confirmButtonColor: '#3085d6',
        })
    }
    })
}

const useFilters = (filter, allFilters) => {

    // Merge filters
    const filters = mergeFilters(filter, allFilters);
    return route('bookings.index', filters);
}

const mergeFilters = (filter, allFilters) => {
    return {
        ...allFilters,
        ...filter,
    };;
}

const convertFiltersToQueryString = (filters) => {
    const filtersCopy = {...filters};
    // Remove page Filter
    delete filtersCopy.page;
    const query = Object.keys(filtersCopy)
        .map((key) => {
            return encodeURIComponent(key) + '=' + encodeURIComponent(filtersCopy[key]);
        })
        .join('&');
    return query ? query : '';
}

const translateFilter = (filter) => {
    switch(filter) {
        case 'pending':
            return 'Pendientes';
        case 'confirmed':
            return 'Confirmadas';
        case 'canceled':
            return 'Canceladas';
        default:
            return 'Pendientes';
    }
}

onMounted(() => {
    paginationData.value = handlePagination(props.bookings);
    // console.clear();
    // Pagination
    // console.log(paginationData.value);
    console.log(props.bookings);
    // Query Params
    // console.log(props.queryFilters);
});

</script>

<template>
    <div>
        <div class="p-3 py-6 lg:p-8 bg-white dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent border-b border-gray-200 dark:border-gray-700">

            <div class="flex justify-between items-center mb-8">
            
                <h1 class="text-2xl font-medium text-gray-900 dark:text-white mb-4">
                    Ultimas reservaciones
                </h1>


            </div>
            <Dropdown :title="'Reservaciones ' + translateFilter(props.queryFilters.status) ?? 'Pendientes'">
                <DropdownItem>
                    <Link :href="useFilters({status: 'pending'}, props.queryFilters)" :only="['bookings', 'queryFilters']">Pendientes</Link>
                </DropdownItem>
                <hr>
                <DropdownItem>
                    <a :href="useFilters({status: 'confirmed'}, props.queryFilters)"  :only="['bookings', 'queryFilters']">Confirmadas</a>
                </DropdownItem>
                <hr>
                <DropdownItem>
                    <a :href="useFilters({status: 'canceled'}, props.queryFilters)"  :only="['bookings', 'queryFilters']">Canceladas</a>
                </DropdownItem>
            </Dropdown>

            <div class="text-white inner-shadow shadow-xl overflow-auto border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 cursor-pointer">
                    <thead>
                        <tr>
                            <th class="lg:px-4 px-6 lg:py-3.5 py-6 font-bold text-left text-gray-500 dark:text-gray-400">ID</th>
                            <th class="lg:px-4 px-6 lg:py-3.5 py-6 font-bold text-left text-gray-500 dark:text-gray-400">Huesped</th>
                            <th class="lg:px-4 px-6 lg:py-3.5 py-6 font-bold text-left text-gray-500 dark:text-gray-400">Check-In</th>
                            <th class="lg:px-4 px-6 lg:py-3.5 py-6 font-bold text-left text-gray-500 dark:text-gray-400">Check-Out</th>
                            <th class="lg:px-4 px-6 lg:py-3.5 py-6 font-bold text-left text-gray-500 dark:text-gray-400">Habitación</th>
                            <th class="lg:px-4 px-6 lg:py-3.5 py-6 font-bold text-left text-gray-500 dark:text-gray-400">Total</th>
                            <th class="lg:px-4 px-6 lg:py-3.5 py-6 font-bold text-left text-gray-500 dark:text-gray-400">Creada el</th>
                            <th class="lg:px-4 px-6 lg:py-3.5 py-6 font-bold text-left text-gray-500 dark:text-gray-400">Ref. interna</th>
                            <th class="lg:px-4 px-6 lg:py-3.5 py-6 font-bold text-right text-gray-500 dark:text-gray-400">			          
                                <svg
                                class="w-6 text-right fill-current text-grey-dark"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                >
                                <path
                                d="M4 12a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm6 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                                />
			                    </svg>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y shadow-inner divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">

                        <tr v-if="props.bookings.data.length > 1" v-for="booking in props.bookings.data" class="dark:hover:bg-gray-600 hover:bg-gray-100">

                            <td class="lg:px-4 px-6 lg:py-4 py-6 lg:text-base font-bold text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"># {{ booking.id }}</td>

                            <td class="lg:px-4 px-6 lg:py-4 py-6 lg:text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700">{{ booking.guest.full_name }}</td>

                            <td class="lg:px-4 px-6 lg:py-4 py-6 lg:text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700">{{ booking.check_in_formatted }}</td>

                            <td class="lg:px-4 px-6 lg:py-4 py-6 lg:text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700">{{ booking.check_out_formatted }}</td>

                            <td class="lg:px-4 px-6 lg:py-4 py-6 lg:text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700">{{ booking.room.type }}<span class="text-xs text-gray-500/40 dark:text-gray-300/25"> x{{booking.number_of_rooms}}</span><br>{{ booking.room.name }}</td>

                            <td class="lg:px-4 px-6 lg:py-4 py-6 lg:text-sm text-left text-green-500 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700">{{ booking.total_price_formatted }}</td>

                            <td class="lg:px-4 px-6 lg:py-4 py-6 lg:text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700">{{ booking.created_at.split('T')[0] }}</td>

                            <td v-if="booking.internal_reference && booking.internal_reference != ''" class="font-bold lg:px-4 px-6 lg:py-4 py-6 lg:text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700">{{ booking?.internal_reference}}</td>
                            <td @click="AddInternalReferenceBooking({id: booking.id}, booking)" v-else class="lg:px-4 px-6 lg:py-4 py-6 lg:text-sm text-left whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700 underline text-sky-500">
                                <div class="flex">
                                    <div class="w-5 transform hover:text-indigo-500 hover:scale-110 flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                        </svg>
                                    </div>
                                    <p>
                                        agregar
                                    </p>
                                </div>
                            </td>
                            
                            <td class="lg:px-4 px-6 lg:py-4 py-6 lg:text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700">

                                <Link :href="route('bookings.show', {booking: booking.id})" class="flex gap-2">
                                    <div class="w-5 mr-2 transform hover:text-sky-500 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div>
                                </Link>

                            </td>

                        </tr>

                        <tr v-else class="dark:hover:bg-gray-600 hover:bg-gray-100">

                            <td colspan="9" class="lg:px-4 px-6 lg:py-4 py-6 lg:text-base font-bold text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700 text-center">Sin datos disponibles</td>

                        </tr>

                    </tbody>
                </table>    
            </div>

            <!-- Pagination -->
            <section v-if="props.bookings.links">
                <div class="text-slate-50 font-bold text-xl flex flex-col justify-center items-center gap-4 rounded-xl p-2">

                    <span class="text-base dark:text-slate-50 text-slate-600">Mostrando {{ props.bookings.per_page }} por pagina de {{ props.bookings.total }} en total</span>
                    <div class="flex p-2 w-full max-w-md justify-center space-x-0">
                        <Link :disabled="props.bookings.prev_page_url == null" as="button" :href="props.bookings.prev_page_url + '&' + convertFiltersToQueryString(props.queryFilters) ?? '#'" class="min-w-auto w-32 h-10 bg-sky-500 dark:bg-sky-500/50 p-2 rounded-l-xl hover:bg-sky-700  text-white font-semibold  transition-all duration-200 ease-in-out border-y-2 border-l-2 flex justify-center items-center" preserveScroll>
                            <button innerText="Previo" ></button>
                        </Link>
                        
                        <Link aria-disabled="true" disabled href="#" as="button" class="min-w-auto h-10 bg-sky-500 dark:bg-sky-500/50  p-2 rounded-none hover:bg-sky-700 text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out border-2 text-center flex justify-center items-center" preserveScroll>
                            <button :innerText="`pag. ${props.bookings.current_page}`"></button>
                        </Link>

                        <Link :disabled="props.bookings.next_page_url == null" as="button" :href="props.bookings.next_page_url + '&' + convertFiltersToQueryString(props.queryFilters) ?? '#'" class="min-w-auto w-32 h-10 bg-sky-500 dark:bg-sky-500/50 p-2 rounded-r-xl hover:bg-sky-700 text-white font-semibold transition-all duration-200 ease-in-out overflow-hidden border-y-2 border-r-2 flex justify-center items-center" preserveScroll>
                            <button innerText="Siguiente"></button>
                        </Link>
                    </div>

                </div>
            </section>
        </div>

    </div>
</template>