<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Rengine Page not Found') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @vite(['resources/js/app.js', "resources/css/app.css"])
    </head>
    <body class="font-sans antialiased">
<!-- component -->
        <main class="h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]">
            <h1 class="text-9xl font-extrabold text-white tracking-widest">403</h1>
            <div class="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
                Accion no permitida
            </div>
            <button class="mt-5">
            <a
                class="relative inline-block text-sm font-medium text-[#FF6A3D] group active:text-orange-500 focus:outline-none focus:ring"
            >
                <span
                class="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0"
                ></span>

                <span class="relative block px-8 py-3 bg-[#1A2238] border border-current">
                <router-link to="/">Ir al dashboard</router-link>
                </span>
            </a>
            </button>
        </main>
    </body>
</html>
