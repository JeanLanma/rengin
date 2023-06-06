<script setup>
import { Link } from '@inertiajs/vue3';
import { onMounted, ref } from 'vue';
import Swal from 'sweetalert2';

const props = defineProps({
    bookings: {
        type: Object,
        required: false,
    },
});

const paginationData = ref({
    links: [],
    previusLinks: [],
    nextLinks: [],
});


onMounted(() => {
    paginationData.value = handlePagination(props.bookings);
    console.clear();
    console.log(paginationData.value);
    console.log(props.bookings);
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

const AddInternalReferenceBooking = (data) => {

    Swal.fire({
    title: 'Agregar referencia interna para la reservación #' + data.id,
    input: 'text',
    inputAttributes: {
        autocapitalize: 'off'
    },
    showCancelButton: true,
    confirmButtonText: 'Confirmar',
    showLoaderOnConfirm: true,
    preConfirm: async (reference) => {
        // return console.log(route('bookings.reference',{ booking: data.id , reference: reference}));
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
            `Request failed: ${error}`
            )
        })
    },
    allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
    if (result.isConfirmed) {
        console.log(result.value);
        Swal.fire({
        title: `La referencia ha sido agregada correctamente`,
        })
    }
    })
}

</script>

<template>
    <div>
        <div class="p-3 py-6 lg:p-8 bg-white dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent border-b border-gray-200 dark:border-gray-700">

            <div class="flex justify-between items-center mb-8">
            
                <h1 class="text-2xl font-medium text-gray-900 dark:text-white mb-4">
                    Ultimas reservaciones
                </h1>

            </div>

            <div class="text-white inner-shadow shadow-xl overflow-auto border border-gray-200 dark:border-gray-700 md:rounded-lg">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 cursor-pointer">
                    <thead>
                        <tr>
                            <th class="lg:px-4 px-6 lg:py-3.5 py-6 font-bold text-left text-gray-500 dark:text-gray-400">ID</th>
                            <th class="lg:px-4 px-6 lg:py-3.5 py-6 font-bold text-left text-gray-500 dark:text-gray-400">Huesped</th>
                            <th class="lg:px-4 px-6 lg:py-3.5 py-6 font-bold text-left text-gray-500 dark:text-gray-400">Check-In</th>
                            <th class="lg:px-4 px-6 lg:py-3.5 py-6 font-bold text-left text-gray-500 dark:text-gray-400">Check-Out</th>
                            <th class="lg:px-4 px-6 lg:py-3.5 py-6 font-bold text-left text-gray-500 dark:text-gray-400">Habitación</th>
                            <th class="lg:px-4 px-6 lg:py-3.5 py-6 font-bold text-left text-gray-500 dark:text-gray-400">Precio</th>
                            <th class="lg:px-4 px-6 lg:py-3.5 py-6 font-bold text-left text-gray-500 dark:text-gray-400">Creada el</th>
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

                        <tr v-if="props.bookings.data" v-for="booking in props.bookings.data" class="dark:hover:bg-gray-600 hover:bg-gray-100">

                            <td class="lg:px-4 px-6 lg:py-4 py-6 lg:text-base font-bold text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"># {{ booking.id }}</td>

                            <td class="lg:px-4 px-6 lg:py-4 py-6 lg:text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700">{{ booking.guest.full_name }}</td>

                            <td class="lg:px-4 px-6 lg:py-4 py-6 lg:text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700">{{ booking.check_in_formatted }}</td>

                            <td class="lg:px-4 px-6 lg:py-4 py-6 lg:text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700">{{ booking.check_out_formatted }}</td>

                            <td class="lg:px-4 px-6 lg:py-4 py-6 lg:text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700">{{ booking.room.type }}<span class="text-xs text-gray-500/40 dark:text-gray-300/25"> x{{booking.number_of_rooms}}</span><br>{{ booking.room.name }}</td>

                            <td class="lg:px-4 px-6 lg:py-4 py-6 lg:text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700">{{ booking.total_price_formatted }}</td>

                            <td class="lg:px-4 px-6 lg:py-4 py-6 lg:text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700">{{ booking.created_at.split('T')[0] }}</td>
                            
                            <td class="lg:px-4 px-6 lg:py-4 py-6 lg:text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><p @click="AddInternalReferenceBooking({id: booking.id})" class="text-sky-600 dark:text-white hover:text-sky-700 hover:dark:text-gray-200 underline">Ver detalles</p></td>

                        </tr>

                        <tr v-else class="dark:hover:bg-gray-600 hover:bg-gray-100">

                            <td class="lg:px-4 px-6 lg:py-4 py-6 lg:text-base font-bold text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"># 1234</td>

                            <td class="lg:px-4 px-6 lg:py-4 py-6 lg:text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"> Jhon Doe</td>

                            <td class="lg:px-4 px-6 lg:py-4 py-6 lg:text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"> Vie, 19/05/23</td>

                            <td class="lg:px-4 px-6 lg:py-4 py-6 lg:text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"> Lun, 22/05/23</td>

                            <td class="lg:px-4 px-6 lg:py-4 py-6 lg:text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700">STD, Sencilla</td>

                            <td class="lg:px-4 px-6 lg:py-4 py-6 lg:text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"> $ 3,000.00</td>
                            
                            <td class="lg:px-4 px-6 lg:py-4 py-6 lg:text-sm text-left text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><a href="#" class="text-sky-600 dark:text-white hover:text-sky-700 hover:dark:text-gray-200 underline">Ver detalles</a></td>

                        </tr>

                    </tbody>
                </table>    
            </div>

            <!-- Pagination -->
            <section v-if="props.bookings.links">
                <div class="text-slate-50 font-bold text-xl flex flex-col justify-center items-center gap-4 rounded-xl p-2">

                    <span class="text-base dark:text-slate-50 text-slate-600">Mostrando {{ props.bookings.per_page }} por pagina de {{ props.bookings.total }} en total</span>
                    <div class="flex p-2 w-full max-w-md justify-center space-x-0">
                        <Link :disabled="props.bookings.prev_page_url == null" as="button" :href="props.bookings.prev_page_url ?? '#'" class="min-w-auto w-32 h-10 bg-sky-500 dark:bg-sky-500/50 p-2 rounded-l-xl hover:bg-sky-700  text-white font-semibold  transition-all duration-200 ease-in-out border-y-2 border-l-2 flex justify-center items-center" preserveScroll>
                            <button innerText="Previo" ></button>
                        </Link>
                        
                        <Link v-if="false" v-for="link in paginationData.previusLinks" :href="link.url" as="button" class="min-w-auto h-10 bg-sky-500 dark:bg-sky-500/50  p-2 rounded-none hover:bg-sky-700 text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out border-2 border-x-sky-300 text-center flex justify-center items-center" preserveScroll>
                            <button :innerText="link.label"></button>
                        </Link>
                        <Link aria-disabled="true" disabled href="#" as="button" class="min-w-auto h-10 bg-sky-500 dark:bg-sky-500/50  p-2 rounded-none hover:bg-sky-700 text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out border-2 text-center flex justify-center items-center" preserveScroll>
                            <button :innerText="`pag. ${props.bookings.current_page}`"></button>
                        </Link>
                        <Link v-if="false" v-for="link in paginationData.nextLinks" :href="link.url" as="button" class="min-w-auto h-10 bg-sky-500 dark:bg-sky-500/50  p-2 rounded-none hover:bg-sky-700 text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out border-2 border-x-sky-300 text-center flex justify-center items-center" preserveScroll>
                            <button :innerText="link.label"></button>
                        </Link>

                        <Link :disabled="props.bookings.next_page_url == null" as="button" :href="props.bookings.next_page_url ?? '#'" class="min-w-auto w-32 h-10 bg-sky-500 dark:bg-sky-500/50 p-2 rounded-r-xl hover:bg-sky-700 text-white font-semibold transition-all duration-200 ease-in-out overflow-hidden border-y-2 border-r-2 flex justify-center items-center" preserveScroll>
                            <button innerText="Siguiente"></button>
                        </Link>
                    </div>

                </div>
            </section>
        </div>

    </div>
</template>