<?php

header("Refresh:1;url=../lukecage.php");

?>



<!DOCTYPE html>
<html>
<head>
	<link rel="favico" href="../../image/favico.png">
	<link rel="shortcut icon" href="../../image/favico.png">
	<link rel="stylesheet" href="../../css/fonts.css">
	<link rel="stylesheet" href="../../css/style.css">
	<!-- loader -->
	<link rel="stylesheet" type="text/css" href="../../css/loader.css">
	<title>Suppression...</title>
	<!--<script> location.replace("../lukecage.php"); </script>-->
</head>
<body>
	<style type="text/css" media="screen">
	body{
		overflow:hidden;
	}
	#alert-del-admin{
		width:26em;
		height:15em;
		position: absolute;
		top:50%;
		left:50%;
		transform:translate(-50%,-50%);
	}
	p{
		padding:1.6em 0.9em;
		font-size:22pt;
		color:#E8814F;
		text-shadow:0 0 px #8B8B8B;
	}
</style>

<div id="alert-del-admin" class="bloc center">
	<p class="nunito f500">


		<?php
//Connexion a la BD
require_once '../../php/login.php';
$conn = new mysqli($hn, $un, $pw, $db);
if ($conn->connect_error) {
	die($conn->connect_error);
}

//supression par id d'un formulaire et de son utilisateur
// on teste si la variable du formulaire est bien déclarée
if (isset($_GET['adm_del'])) {
	$adm_del = $_GET['adm_del'];

	// on recherche le numedu membre à supprimer

	$result = 'DELETE FROM ARINELLA_adm WHERE adm_mail= "' . $adm_del . '" ';
	$result = $conn->query($result);
	if (!$result) {
		die($conn->error);
	}
	if ($result) {
		echo "Vous avez bien supprimer votre compte admin : " . $adm_del;
	} else {
		echo "Erreur";
	}

	//deconnexion de la session
	session_start();
	session_destroy();
	// lancement de la requête pour effacer notre membre
	//exécution de la requête:
}

?>
	</p>
</div>


</body>
</html>