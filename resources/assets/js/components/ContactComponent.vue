<template>
    <section class="contact">
        <div class="container-fluid container-contact">
			<div class=" container wrap-contact">
				<form class="contact-form validate-form">
					<h1 class="text-center">
						Contáctanos
					</h1>

					<div class="wrap-input validate-input" data-validate="Name is required">
						<input class="input" type="text" name="name">
						<span class="focus-input" data-placeholder="NOMBRE"></span>
					</div>

                    <div class="row">
                        <div class="col-sm-12 col-md-6 col-lg-6">
                            <div class="wrap-input validate-input" data-validate = "Valid email is required: ex@abc.xyz">
        						<input class="input" type="text" name="email">
        						<span class="focus-input" data-placeholder="CORREO"></span>
        					</div>
                        </div>
                        <div class="col-sm-12 col-md-6 col-lg-6">
                            <div class="wrap-input validate-input" data-validate = "Valid email is required: ex@abc.xyz">
        						<input class="input" type="text" name="email">
        						<span class="focus-input" data-placeholder="CORREO"></span>
        					</div>
                        </div>
                    </div>
					<div class="wrap-input validate-input" data-validate = "Message is required">
						<textarea class="input form-control" rows="3" name="message"></textarea>
						<span class="focus-input" data-placeholder=" MENSAJE"></span>
					</div>

					<div class="container-contact-form-btn">
						<div class="wrap-contact-form-btn">
							<div class="contact-form-bgbtn"></div>
							<button class="contact-form-btn">
								Enviar
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
        <div class="container-fluid other-contact">
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-sm-12 col-md-6 col-lg-4 phone">
                    <h1 class="">Llámanos</h1>
                    <!--<ul class="fa-ul">
                        <li><span class="fa-li"><i class="fas fa-check-square"></i></span>List icons can</li>
                        <li><i class=" fas fa-phone fa-fw" aria-hidden="true"></i>Oficina: 55 7784 82</li>
                        <li><i class="fa-li fas fa-phone-volume" aria-hidden="true"></i>Nextel: 4617 4193 ID. 92*13*33908</li>
                        <li><i class="fa-li fas fa-phone-volume" aria-hidden="true"></i>Nextel: 6294 3752 ID. 92*13*14785</li>
                        <li><i class="fa-li fas fa-phone-volume" aria-hidden="true"></i>Nextel: 4322 4523 ID. 92*13*82664</li>

                    </ul>-->
                    <ul class="fa-ul phone">
  <li><span class="fa-li"><i class="fas fa-phone"></i></span>Oficina: 55 7784 82</li>
  <li><span class="fa-li"><i class="fas fa-phone-volume"></i></span>Nextel: 4617 4193 ID. 92*13*33908</li>
  <li><span class="fa-li"><i class="fas fa-phone-volume"></i></span>Nextel: 6294 3752 ID. 92*13*14785</li>
  <li><span class="fa-li"><i class="fas fa-phone-volume"></i></span>Nextel: 4322 4523 ID. 92*13*82664</li>
</ul>
                </div>
                <div class="col-sm-12 col-md-6 col-lg-4">
                    <h1>Encuéntranos</h1>
                    <p>
                        Izcoatl 106,<br />Santa Isabel Tola,<br />Gustavo A. Madero,<br />Distrito Federal México
                    </p>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-4 map">
                    <div id="map"></div>
                </div>
            </div>

        </div>
    </section>
</template>
