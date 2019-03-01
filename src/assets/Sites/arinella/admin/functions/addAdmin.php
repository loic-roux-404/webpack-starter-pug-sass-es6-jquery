<?php
//error_reporting(E_ALL);
//ini_set('display_errors', 1);

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
	<title>Ajout...</title>
</head>
<body>
	<style type="text/css" media="screen">
	body{
		overflow:hidden;
	}
	#alert-add-admin{
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

<div id="alert-add-admin" class="bloc center">
	<p class="nunito f500">
<?php
// Vérification de la validité des informations

// Hachage du mot de passe
require_once '../../php/login.php';
$conn = new mysqli($hn, $un, $pw, $db);
if ($conn->connect_error) {
	die($conn->connect_error);
}

// var_dump($_POST);
if (isset($_POST['adm_id']) && isset($_POST['adm_mail']) && isset($_POST['adm_mdp'])) {
	$adm_id = $_POST['adm_id'];
	$adm_mail = $_POST['adm_mail'];
	$adm_mdp = password_hash($_POST['adm_mdp'], PASSWORD_DEFAULT);

	$query = 'INSERT INTO ARINELLA_adm VALUES ("NULL", "' . $adm_mail . '","' . $adm_mdp . '")';

	$result = $conn->query($query);
	if ($result) {
		die("Vous avez bien ajouté un administrateur" . $conn->error);
	} else {
		$reponse = "Erreur soumission du formulaire ";
	}

	// Deconnexion a la BD
	$conn->close();

}

?>
	</p>

</div>

</body>
</html>
