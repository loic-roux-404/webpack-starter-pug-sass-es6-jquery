<!DOCTYPE html>
<html lang="fr" class="no-js">
<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>ALT 2 CROUS - Accueil</title>
<meta name="description"
	content="Site web de l'agence de communication InaProd spécialisée dans l'audiovisuel.Nous réalisons tous vos projets 
	audiovisuel tel que des clips vidéo ou encore des films d'entreprise.
	Prise en charge des effets spéciaux, du montage et du tournage" />
<meta name="keywords"
	content="graille,crous,alternative, Grenoble, IUT, etudiant, restaurant, Menu by copdrops, css, html5,flat,material" />
<meta name="author" content="Loic Roux" />
<link rel="favico" href="./image/logo.png">
<link rel="shortcut icon" href="./image/logo.png">
<link rel="stylesheet" type="text/css" href="css/fonts.css" />
<link rel="stylesheet" type="text/css" href="css/html5-deco.css" />
<link rel="stylesheet" type="text/css" href="css/component.css" />
<link rel="stylesheet" type="text/css" href="css/style-grid.css" />
<link rel="stylesheet" type="text/css" href="css/functions.css" />
<link rel="stylesheet" type="text/css" href="css/form.css" />

<!--material icons add-->
<link rel="stylesheet"
	href="https://fonts.googleapis.com/icon?family=Material+Icons">
<!-- Add jquery library -->
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<!-- csstransforms3d-->
<script src="js/modernizr.custom.25376.js"></script>
<!--  my scripts-->
<script src="js/jquery.js"></script>



</head>
<body>

	<div id="perspective" class="perspective effect-airbnb">
		<div class="container">
			<div class="wrapper">
				<!-- top Navigation -->


				<nav class="main clearfix comfortaa f400 f13pt fixed">
					<nav class="nav-laptop">
						<a href="index.php"
							class="md-logo md-active-logo fix-left main-logo Gugi"
							title="Aller à l'accueil">Alt2Crous</a> <a href="a-propos.html"
							class="md-news"><i class="material-icons md-22">face</i>Notre
							concept</a> <a href="./proximite.html" class="md-image"><i
							class="material-icons md-22">&#xE0C8;</i>&Agrave; proximité</a> <a
							href="./avis.html" class="md-upload"><i
							class="material-icons md-22">star_border</i>Meilleurs restos</a> <a
							href="./contacter.html" class="md-star"><i
							class="material-icons md-22">&#xE8A3;</i>Contacter</a>
					</nav>
					<div id="mobile-nav">

						<button id="showMenu">
							<i class="material-icons md-36">&#xE5D2;</i>
						</button>
						<a href="index.php" class="md-active-logo fix-left mobile-logo"
							title="Aller à l'accueil">Alt2Crous</a>

					</div>


				</nav>
				<div class="nav-height"></div>

				<div class="global">
					<section class="block">
						<article class="article-1 grey-3">
							<div class="container1 lato f300 f13pt center">

								<div class="span-10 style-col gutter span-form">
									<div id="content">
										<h1 class="md-title-1 oswald f500 content center">Bienvenue
											sur Alt2Crous !</h1>
										<h2 class="content center muli">L'alternative est arrivée</h2>
										<p>Tu n'as pas le temps de rentrer chez toi le midi ? Tu
											en as marre des cafeterias où seul le dessert industriel
											paraît comestible ? Marre d'avoir l'impression de gacher un
											repas en passant la porte pour retourner en cours ? Alors
											n'attend plus, et rejoint le mouvement ALT2CROUS, qui te
											permet de de trouver des alternatives simple et rapides
											adaptées à tes besoins comme à tes envies !</p>
									</div>


									<div class="content center">
										<header>
											<h1 class="md-title-1 oswald f500">Trouver un restaurant</h1>
											<p>Selectionne tes options dans les champs ci-dessous :</p>
										</header>


										<div class="bloc-finder">

											<form action="" method="post" class="form-finder">


									            <h1 class="f300">
													Lieu d'étude proche <i class="material-icons">&#xE313;</i>
												</h1>
												
												  <div class="logo-after">
                                                  <select
														name="find_restaurant" class="raleway f16pt f400 center">
															<option value="">&nbsp; Tous</option>
															<option value="Campus St Martin d'Heres">&nbsp;
																Saint Martin d'hères - Campus</option>
															<option value="IUT1(ville) et IUT2">&nbsp;
																Grenoble - IUT1 et 2 - Quai Claude Bernard</option>
															<option value="Ecole de Management">&nbsp; Ecole
																de management</option>
															<option value="IGA et IUG">&nbsp; Grenoble -
																Vigny-Musset - IGA et IUG</option>
															<option value="ESPE">&nbsp; Grenoble - Berthelot
																- ESPE</option>
																<option value="Lycée Stendhal">&nbsp; Grenoble - Lycée Stendhal</option>
													</select>
													</div>



												<h1 class="f300">
													Prix (de € à €€€) <i class="material-icons">&#xE313;</i>
												</h1>
	                                         	<div class="logo-after">
												<select name="find_restaurant_prix" class="raleway f16pt f400 center select-dropdown select-dropdown-white">
															<option value="">&nbsp; Tous</option>
															<option value="&#8364;">&nbsp; € - &nbsp;(à partir de
																3,25€)</option>
															<option value="&#8364;&#8364;">&nbsp; €€ -&nbsp;(à partir de
																6,50€)</option>
															<option value="&#8364;&#8364;&#8364;">&nbsp; €€€ - &nbsp;(à partir
																de 10€)</option>

													</select>
													</div>

												<input type="submit" value="Trouve ton resto" id="submit-button"
													class="find-resto" />

											</form>

										</div>
									</div>
								</div>

								<div class="span-10">
									<div class="bloc-php no-pad no-marg container1">

										<?php
// Connexion a la BD
require_once './php/login.php';
$conn = new mysqli($hn, $un, $pw, $db);
if ($conn->connect_error)
    die($conn->connect_error);
    

  if(isset($_POST['find_restaurant']) && isset($_POST['find_restaurant_prix'])) 
{
	$find_restaurant=$_POST['find_restaurant'];
	$find_restaurant_prix=$_POST['find_restaurant_prix'];
}
if(empty($find_restaurant) && empty($find_restaurant_prix))
{
	echo "<header class=\"f16pt comfortaa f400 span-10 style-col gutter\"><h3 class=\"center\">Tous les restaurants</h3></header>";
}
elseif(empty($find_restaurant_prix))
{
    echo "<header class=\"f16pt comfortaa f400 span-10 style-col gutter\"><h3 class=\"center\">Restaurants proche de&nbsp;".$find_restaurant."</h3></header>";
}
elseif(empty($find_restaurant))
{
    echo "<header class=\"f16pt comfortaa f400 span-10 style-col gutter\"><h3 class=\"center\">Catégorie de prix à ".$find_restaurant_prix."</h3></header>";
}
else
{
	echo "<header class=\"f16pt comfortaa f400 span-10 style-col gutter\"><h3 class=\"center\">Restaurants proche de ".$find_restaurant." et catégorie de prix à ".$find_restaurant_prix."</h3></header>";
}

if(empty($find_restaurant_prix) && empty($find_restaurant)){
	$query ='SELECT * FROM RESTAURANTS';
}
elseif(empty($find_restaurant_prix))
{
	$query ='SELECT * FROM RESTAURANTS WHERE loc_restaurant= "'.$find_restaurant.'" ';
} elseif(empty($find_restaurant))
{
	$query ='SELECT * FROM RESTAURANTS WHERE prix_restaurant="'.$find_restaurant_prix.'"';
}
else{
	$query ='SELECT * FROM RESTAURANTS WHERE prix_restaurant="'.$find_restaurant_prix.'" AND loc_restaurant= "'.$find_restaurant.'"';
}


    
$result = $conn->query($query);
if (! $result)
    die($conn->error);
// afficher

$rows = $result->num_rows;
for ($j = 0; $j < $rows; $j ++) {
    $result->data_seek($j); // recherche la j-ème entrée
                            // ‘fetch_array’ retourne un tableau assoc. pour cette entrée
    $row = $result->fetch_array(MYSQLI_ASSOC);
    
    
    echo '<div class="span-5 style-col resto-gen lato f400">';
   
    
    // affichage des01 résultats avec ‘echo’
    echo '<p class="f14pt gugi">	  ' . $row['nom_restaurant'] . '<br>';
    echo '</p>';
    echo '<p>';
    echo ' <strong>Type de nourriture </strong>:	' . $row['type_restaurant'] . '<br>';
    echo '</p>';
   /* echo '<p>';
    echo 'Localisation		' . $row['loc_restaurant'] . '<br>';
    echo '</p>';*/
    echo '<p>';
    echo '<strong> Prix : </strong>' . $row['prix_restaurant'] . '&nbsp; <br>';
    echo '</p>';
    echo '<p>';
    echo '<strong>Description : </strong>' . $row['equilibre_restaurant'] . '<br>';
    echo '</p>';
    
    echo '<p>';
    echo '<img src="./image/upload-images/'.$row['img_restaurant'].'"<br>';
    echo '</p>';
    
    echo '</div>';
}

// Deconnexion a la BD
$conn->close();


?>

									</div>
								</div>



							</div>
						</article>
					</section>



				</div>
				<!-- /main -->
				<footer>
					<div class="flex-c comfortaa 400 f12pt grey-1">
						<div class="container1 no-pad flex-b cat-footer">

							<div class="container1 span-2 no-pad">
								<span class="span-10 no-marg no-pad mentions raleway f16pt f500">Divers</span>
								<a href="./footer/mentions.html" class=" span-10">Mentions
									légales</a> <a href="./footer/mentions.html" class=" span-10">&Agrave;
									propos</a> <a href="./admin/admin.php" class="span-10">Administration
								</a> <span class="span-10 no-marg no-pad blank">&nbsp;</span> <span
									class="span-10 no-marg no-pad blank">&nbsp;</span>
							</div>
							<div class="container1 span-2 no-pad">
								<span class="span-10 no-marg no-pad mentions raleway f16pt f500">Plan
									du site</span> <a href="./index.php" class="span-10">Accueil</a> <a
									href="./a-propos.html" class="span-10">Notre concept</a> <a
									href="proximité.html" class="span-10">&Agrave; Proximité</a> <a
									href="#" class="span-10">Meilleurs restaurants</a>

							</div>


							<div class="container1 span-2 no-pad">
								<span class="span-10 no-marg no-pad mentions raleway f16pt f600">Aide</span>
								<a href="./footer/tuto.html" class="span-10">Tutoriels</a> <a
									href="./communaute.html" class="span-10">Communauté</a> <a
									href="./contacter.html" class="span-10">Contact</a> <span
									class="span-10 no-marg no-pad">&nbsp;</span> <span
									class="span-10 no-marg no-pad">&nbsp;</span>
							</div>

						</div>

					</div>
					<div class="flex-c comfortaa f11pt grey-1">
						<div class="span-7">
							<a href="index.html"><img src="image/logo.png" class="logo"></a>
						</div>
						<div class="span-7">Tous droits réservés - 2018®</div>

					</div>
				</footer>
			</div>

		</div>

		<!-- /container -->
		<nav class="outer-nav left vertical rubik ">
			<a href="index.php" class="active-mob"><i
				class="material-icons md-28">&#xE88A;</i>Accueil</a><a
				href="a-propos.html" class="md-news"><i
				class="material-icons md-22">face</i>Notre concept</a> <a
				href="./proximite.html" class="md-image"><i
				class="material-icons md-22">&#xE80E;</i>&Agrave; proximité</a> <a
				href="./avis.html" class="md-upload"><i
				class="material-icons md-22">&#xE80D;</i>Meilleurs restos</a> <a
				href="./contacter.html" class="md-star"><i
				class="material-icons md-22">&#xE42D;</i>Contacter</a>
		</nav>
		<script src="js/classie.js"></script>
		<script src="js/menu.js"></script>



	</div>
	<!-- /perspective -->


</body>
</html>