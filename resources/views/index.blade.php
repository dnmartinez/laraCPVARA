<!doctype html>
<html lang="{{ app()->getLocale() }}">
		<head>
			<meta charset="utf-8">
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<!-- CSRF Token -->
		    <meta name="csrf-token" content="{{ csrf_token() }}">
			<!-- Title -->
		    <title>{{ config('app.name', 'CPVARA') }}</title>
			<!-- Styles -->
			<!--<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">-->
			<link href="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/css/select2.min.css" rel="stylesheet" />
			<link href="{{ asset('css/app.css') }}" rel="stylesheet" type="text/css">
			<script defer src="https://use.fontawesome.com/releases/v5.0.7/js/all.js"></script>
		</head>

		<body>
			<div id="app">
				<nav-component></nav-component>
					<router-view></router-view>
			</div>

			<!--<section class="container-fluid d-flex justify-content-center justify-content-md-end justify-content-lg-end align-items-end align-items-md-end hero">
		    <!--<a href="http://www.freepik.com">Designed by ijeab / Freepik</a>-->
				<!--<h1 class="text-center">Constructores Precolados VARA</h1>
		    </section-->




		<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
		<script src="{{ asset('js/app.js') }}"></script>

		<script src="https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.6-rc.0/js/select2.min.js"></script>

		<script async defer
    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC7VsN9lLgC5EtyDrEwaK0ffnLgM3aPZv8&callback=initMap">
    </script>
		</body>
</html>
