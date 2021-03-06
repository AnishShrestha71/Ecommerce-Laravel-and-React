<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>



    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>

<body>
    <div id="">
        <div id="app">
            <Navbar />
        </div>


        <main class="py-4">
            @yield('content')
        </main>
    </div>
    <script>
        window.AuthUser = '{!! Auth::user() !!}';

        window.__auth = function() {
            try {
                return JSON.parse(AuthUser);
            } catch (err) {
                return null;
            }
        }
        console.log(AuthUser)
    </script>
    <script src="{{ asset('js/app.js') }}" defer></script>
</body>


</html>
