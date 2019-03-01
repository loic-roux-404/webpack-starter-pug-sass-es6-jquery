<!DOCTYPE html>
<html lang="fr">

<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Réserver - L'Arinella</title>
	<link rel="favico" href="./image/favico.png">
	<link rel="shortcut icon" href="./image/favico.png">
	<link rel="stylesheet" href="./css/fonts.css">
	<link rel="stylesheet" href="./css/style.css">
	<link rel="stylesheet" href="./css/form.css">
	<link rel="stylesheet" href="./css/buttons.css">
	<link rel="stylesheet" href="./res/normalize/normalize.css">
	<link rel="stylesheet" href="./res/bootstrap/css/bootstrap-grid.css">
	<!-- loader -->
	<link rel="stylesheet" type="text/css" href="./css/loader.css">
	<!--  material icons add + arinella icon pack-->
	<link rel="stylesheet" type="text/css" href="./fonts/arinella-icon.css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<!--jquery plugin css-->
	<link rel="stylesheet" href="./res/flexslider/flexslider.css">
	<link rel="stylesheet" type="text/css" href="./res/jquery-res/jquery-ui/jquery-ui.css" />
	<!-- Add jquery's library -->
	<script src="./res/jquery-res/jquery/jquery-3.3.1.js"></script>
	<script src="./res/jquery-res/jquery-ui/jquery-ui.js"></script>
	<script src="./res/jquery-res/jquery-ui/fr.datepicker.js" type="text/javascript"></script>
	<script src="./res/validate/jquery.validate.js"></script>
	<script src="./res/validate/additional-methods.js"></script>
	<script src="./res/jquery-res/jquery-easing/jquery-easing.js"></script>
	<!--  my scripts and plugin-->
	<script src="./res/flexslider/jquery.flexslider.js"></script>
	<script src="./res/aos/aos.js"></script>
	<!--scripts-->
	<script src="./js/loader.js" type="text/javascript"></script>
	<script src="./js/menu.js" type="text/javascript"></script>
	<script src="./js/form.js" type="text/javascript"></script>
</head>

<body class="reserver">
	<section id="main">
		<div class="head">
			<header id="header" class="f15pt lato f300">
				<div class="logo-spacing"></div>
				<button type="button" id="mob">
					<span></span>
					<span></span>
					<span></span>
				</button>
				<nav class="cl-effect-15">
					<span><a href="./index.php" class="logo"><img src="./image/logo.png"
						height="55" width="75"></a>


						<h1 id="mob-text" class="rubik f300 f15pt">L'Arinella</h1>


					</span>
					<div class="menu">
						<a href="./index.php" data-hover="Accueil">Accueil</a> <a href="./a-propos.php" data-hover="&Agrave; Propos">&Agrave; Propos</a>
						<a href="./photos.php" data-hover="Photos">Photos</a> <a href="./alentours.php" data-hover="Aux alentours">Aux alentours</a>
						<a href="./reserver.php">Réserver</a>
					</div>
				</nav>
			</header>
			<!-- /header -->
		</div>
		<div id="container">
			<section id="section-reserver" class="bloc">
				<article class="row">
					<figure class="col-lg-6">
						<picture>
							<source media="(max-width: 991px)" srcset="./image/main-pics/form/villa-draw-sm.jpg" />
							<source media="(max-width: 1191px)" srcset="./image/main-pics/form/villa-draw-xl.jpg" />
							<img src="./image/main-pics/form/villa-draw.jpg" alt="image villa piscine" />
						</picture>
					</figure>
					<div id="form-container" class="col-lg-6">
						<div class="headline">
							<h2 class="text-headline hammersmith-one f500">L'Arinella</h2>
							<h4 class="text-subheadline nunito">Réserver pour un séjour dans la villa</h4>
						</div>
						<article>
							<form id="reservation" action="./php/form.php" method="post" enctype="multipart/form-data">
								<div id="accordion">

									<section id="page1">

										<span>
											<label for="res_nom" class="text-small-uppercase">Nom</label>
											<input class="text-body" id="res_nom" name="res_nom" type="text">
										</span>
										<span>
											<label for="res_prenom" class="text-small-uppercase">Prénom</label>
											<input class="text-body" id="res_prenom" name="res_prenom" type="text">
										</span>
										<span>

											<label for="res_mail" class="text-small-uppercase">Email</label>
											<input class="text-body" id="res_mail" name="res_mail" type="email">
										</span>
										<span>
											<label for="res_tel" class="text-small-uppercase">Telephone</label>
											<input class="text-body" id="res_tel" name="res_tel" type="tel">
										</span>
										<button type="button" class="next btn btn-3 btn-3e fa-arrow-right"><span>Suivant</span></button>
									</section>

									<section id="page2">
										<!--<i class="fa-disc"></i>-->
										<span>
											<label for="res_date_1" class="text-small-uppercase">Date de début</label>
											<input class="text-body" id="res_date_1" name="res_date_1" type="text" autocomplete="off">
										</span>

										<span>
											<label for="res_date_2" class="text-small-uppercase">Date de fin de la reservation</label>
											<input class="text-body" id="res_date_2" name="res_date_2" type="text" autocomplete="off">
										</span>

										<span>
											<label for="res_message" class="text-small-uppercase">Message</label>
											<textarea name="res_message" id="res_message"></textarea>
										</span>

										<input id="res_id" name="res_id" type="hidden" value="">

										<div id="nav-form" class="row">

											<button type="button" class="prev btn btn-3 btn-3e fa-arrow-left">
												<span>Précedent</span>
											</button>

											<button type="submit" class="submit btn btn-3 btn-3e fa-check">
												<span>Envoyer</span>
											</button>


										</div>
									</section>
								</div>
							</form>
							<!--	<div id="form-answer">-->





								<!--</div>-->
							</article>
						</div>
					</article>
				</section>


				<footer id="footer" class="bloc">
					<div class="row justify-content-center">
						<article id="rights"
						class="col-sm-6 center lato f12pt lato f300 md-title-2">
					Tous droits réservés - 2018</article>
					<article id="contact" class="col-sm-6 center">
						<div class="row justify-content-around">
							<div class="contact-icon col-2 left">
								<i class="fa-contact" title="Pour plus d'info contactez nous">
									<span class="path1"></span><span class="path2"></span><span
									class="path3"></span><span class="path4"></span><span
									class="path5"></span><span class="path6"></span><span
									class="path7"></span><span class="path8"></span><span
									class="path9"></span><span class="path10"></span><span
									class="path11"></span><span class="path12"></span><span
									class="path13"></span><span class="path14"></span><span
									class="path15"></span><span class="path16"></span>
								</i>
							</div>
							<div
							class="contact-infos col-10 left lh-md lato f300 f12-5pt xs-pad-top">
							<ul>
								<li>69loloro10@gmail.com</li>
								<li>0778264035</li>
							</ul>
						</div>
					</div>
				</article>
			</div>
		</footer>
	</div>
</section>

<div id="loading-screen">
	<div id="container">
		<header class="bloc reverse"></header>
		<div class="row gutter-top">
			<article class="col-sm-6 loader-gutter">
				<div class="bloc load"></div>
			</article>
			<article class="col-sm-6">
				<div class="bloc reverse"></div>
			</article>
			<article class="col-sm-12 loader-gutter" ">
				<div class="bloc reverse gutter-top "></div>
			</article>

		</div>
	</div>
</div>





</body>