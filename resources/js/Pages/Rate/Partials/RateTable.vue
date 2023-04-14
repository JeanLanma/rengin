<script setup>

const props = defineProps({
    rate: {
        type: Object,
        required: true,
    },
});

</script>

<template>
    <div>
        <div class="p-6 lg:p-8 bg-white dark:bg-gray-800 dark:bg-gradient-to-bl dark:from-gray-700/50 dark:via-transparent border-b border-gray-200 dark:border-gray-700">

            <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Habitación Sencilla
            </h1>
            
            <!-- Filters -->
            <section>
                <div class="text-slate-50 font-bold text-xl flex gap-4 rounded-xl p-2">

                    <div class="flex p-2 w-full max-w-md justify-center space-x-0">
                        <button innerText="<< prev week" class="min-w-auto w-32 h-10 bg-sky-500 p-2 rounded-l-full hover:bg-sky-700  text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out overflow-hidden"></button>
                        <button innerText="Today" class="min-w-auto w-32 h-10 bg-sky-500 p-2 rounded-none hover:bg-sky-700 text-white font-semibold  hover:flex-grow transition-all duration-200 ease-in-out border-x-2 border-x-sky-300"></button>
                        <button innerText="next week >>" class="min-w-auto w-32 h-10 bg-sky-500 p-2 rounded-r-full hover:bg-sky-700 text-white font-semibold hover:flex-grow transition-all duration-200 ease-in-out overflow-hidden"></button>
                    </div>

                </div>
            </section>

            <div class="text-white border border-gray-200 dark:border-gray-700 md:rounded-lg overflow-auto">
                <table class="min-w-full divide-y divide-gray-200 dark:divide-gray-700 cursor-pointer">
                    <thead>
                        <tr>
                            <th class="px-4 py-3.5 font-bold text-gray-500 dark:text-gray-400 text-center"><span class="font-bold block text-xl">&nbsp;</span></th>
                            <th class="px-4 py-3.5 font-bold text-gray-500 dark:text-gray-400 text-center hover:bg-slate-50 rounded blur-in-expand"><span>Dom</span><span class="font-bold block text-xl">3</span></th>
                            <th class="px-4 py-3.5 font-bold text-gray-500 dark:text-gray-400 text-center"><span>Lun</span><span class="font-bold block text-xl">4</span></th>
                            <th class="px-4 py-3.5 font-bold text-gray-500 dark:text-gray-400 text-center"><span>Mar</span><span class="font-bold block text-xl">5</span></th>
                            <th class="px-4 py-3.5 font-bold text-gray-500 dark:text-gray-400 text-center"><span>Mie</span><span class="font-bold block text-xl">6</span></th>
                            <th class="px-4 py-3.5 font-bold text-gray-500 dark:text-gray-400 text-center"><span>Jue</span><span class="font-bold block text-xl">7</span></th>
                            <th class="px-4 py-3.5 font-bold text-gray-500 dark:text-gray-400 text-center"><span>Vie</span><span class="font-bold block text-xl">8</span></th>
                            <th class="px-4 py-3.5 font-bold text-gray-500 dark:text-gray-400 text-center"><span>Sab</span><span class="font-bold block text-xl">9</span></th>
                            <th class="px-4 py-3.5 font-bold text-gray-500 dark:text-gray-400 text-center"><span>Dom</span><span class="font-bold block text-xl">10</span></th>
                            <th class="px-4 py-3.5 font-bold text-gray-500 dark:text-gray-400 text-center"><span>Lun</span><span class="font-bold block text-xl">11</span></th>
                            <th class="px-4 py-3.5 font-bold text-gray-500 dark:text-gray-400 text-center"><span>Mar</span><span class="font-bold block text-xl">12</span></th>
                            <th class="px-4 py-3.5 font-bold text-gray-500 dark:text-gray-400 text-center"><span>Mie</span><span class="font-bold block text-xl">13</span></th>
                            <th class="px-4 py-3.5 font-bold text-gray-500 dark:text-gray-400 text-center"><span>Jue</span><span class="font-bold block text-xl">14</span></th>
                            <th class="px-4 py-3.5 font-bold text-gray-500 dark:text-gray-400 text-center"><span>Vie</span><span class="font-bold block text-xl">15</span></th>
                            <th class="px-4 py-3.5 font-bold text-gray-500 dark:text-gray-400 text-center"><span>Sab</span><span class="font-bold block text-xl">16</span></th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">

                        <tr class="dark:hover:bg-gray-600 hover:bg-gray-100">

                            <th class="px-4 py-3.5 font-bold text-gray-500 dark:text-gray-400 text-center text-sm whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span>Disponibles</span></th>


                            <td class="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span>3</span></td>

                            <td class="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span>3</span></td>

                            <td class="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span>4</span></td>

                            <td class="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span>5</span></td>
                            
                            <td class="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span>6</span></td>

                            <td class="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span>7</span></td>

                            <td class="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span>8</span></td>


                            <td class="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span>3</span></td>

                            <td class="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span>3</span></td>

                            <td class="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span>4</span></td>

                            <td class="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span>5</span></td>
                            
                            <td class="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span>6</span></td>

                            <td class="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span>7</span></td>

                            <td class="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span>8</span></td>
                            
                        </tr>

                        <tr class="dark:hover:bg-gray-600 hover:bg-gray-100">

                            <th class="px-4 py-3.5 font-bold text-gray-500 dark:text-gray-400 text-center text-sm whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span>Precio</span></th>


                            <td class="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span>300</span></td>

                            <td class="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span>300</span></td>

                            <td class="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span>400</span></td>

                            <td class="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span>500</span></td>
                            
                            <td class="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span>600</span></td>

                            <td class="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span>700</span></td>

                            <td class="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span>800</span></td>


                            <td class="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span contenteditable class="foc">300</span></td>

                            <td class="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span>300</span></td>

                            <td class="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span>400</span></td>

                            <td class="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span>500</span></td>
                            
                            <td class="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span>600</span></td>

                            <td class="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span>700</span></td>

                            <td class="px-4 py-4 text-sm text-center text-gray-500 dark:text-gray-300 whitespace-nowrap border-r border-r-gray-200 dark:border-r-gray-700"><span>800</span></td>
                            
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
</style>