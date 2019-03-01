<?php
session_start();
?>
<!DOCTYPE html>
<html lang="fr">
<head>
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>L'Arinella</title>
	<link rel="favico" href="./image/favico.png">
	<link rel="shortcut icon" href="./image/favico.png">
	<link rel="stylesheet" href="./css/fonts.css">
	<link rel="stylesheet" href="./css/style.css">
	<link rel="stylesheet" href="./css/buttons.css">
	<link rel="stylesheet" href="./css/index-slider.css">
	<link rel="stylesheet" href="./res/normalize/normalize.css">
	<link rel="stylesheet" href="./res/bootstrap/css/bootstrap-grid.css">
	<!-- loader -->
	<link rel="stylesheet" type="text/css" href="./css/loader.css">
	<!--  material icons add + arinella icon pack-->
	<link rel="stylesheet" type="text/css" href="./fonts/arinella-icon.css">
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<!--plugin css-->
	<link rel="stylesheet" type="text/css" href="../res/jquery-res/jquery-ui/jquery-ui.css" />
	<link rel="stylesheet" href="./res/flexslider/flexslider.css">
	<!-- Add jquery's library -->
	<script src="./res/jquery-res/jquery/jquery-3.3.1.js"></script>
	<script src="./res/jquery-res/jquery-ui/jquery-ui.js"></script>
	<script src="./res/jquery-res/jquery-easing/jquery-easing.js"></script>
	<!--  my scripts-->
	<script src="./js/loader.js" type="text/javascript"></script>
	<script src="./js/menu.js" type="text/javascript"></script>
	<script src="js/myscript.js" type="text/javascript"></script>
	<!--plugin-->
	<script src="./res/flexslider/jquery.flexslider.js"></script>
	<script src="./res/aos/aos.js"></script>

</head>
<body class="index">

	<section id="main-index">
		<div class="flexslider-container">
			<div class="flexslider">
				<ul class="slides">
					<li style="background-image: url(./image/index-slider/villa-0.png)"></li>
					<li style="background-image: url(./image/index-slider/villa-1.png);"></li>
					<li style="background-image: url(./image/index-slider/villa-2.png);"></li>
					<li style="background-image: url(./image/index-slider/villa-3.png);"></li>

				</ul>
			</div>
		</div>


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
					<a href="./index.php">Accueil</a>
					<a href="./a-propos.php" data-hover="&Agrave; Propos">&Agrave; Propos</a>
				<a href="./photos.php" data-hover="Photos">Photos</a>
				<a href="./alentours.php" data-hover="Aux alentours">Aux alentours</a>
				<a class="home-hided" href="./reserver.php" data-hover="Réserver">Réserver</a>

			</div>
		</nav>
	</header>


	<a href="./reserver.php" id="reservation-button" class="btn btn-3 btn-3e fa-continue"><p class="roboto f14pt f500 px-2">Réserver</p></a>

	<?php
$form_rep = $_SESSION['form-rep'];
if (isset($form_rep)) {

	?>
		<script type="text/javascript">
			$('#lightbox').fadeToggle('300');
		</script>";




		<?php
if ($form_rep === "true") {

		echo "<div id=\"dialog-res\">
			<span class=\"add\">Demande de reservation envoyée<br>Nous vous repondrons au plus tôt sur votre boîte mail</span>
			</div>";

	}
}

//sleep(10);
//unset($_SESSION['form-rep']);

?>
	<div id="lightbox"></div>
</section>
<div id="loading-screen">
	<div id="container">
		<header class="bloc reverse"></header>
	</div>
</div>



</body>

<?php unset($_SESSION['form-rep']);?>
</html>