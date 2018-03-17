<template>
	<nav class="navbar fixed-top navbar-expand-sm navbar-light bg-light">
				<a class="navbar-brand" href="#"><img src="../../images/logo-xlg.png" class="desktop" alt="Your browser does not support this image">
				<img src="../../images/logo-sm.png" class="mobile" alt="Your browser does not support this image"></a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
				<div class="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div class="navbar-nav ml-auto is-active">
						<router-link to="/" class="nav-item nav-link">Nosotros</router-link>
						<router-link to="/services" class="nav-item nav-link">Servicios</router-link>
						<router-link to="/contact" class="nav-item nav-link">Contáctanos</router-link>
					</div>
				</div>
			</nav>
</template>
