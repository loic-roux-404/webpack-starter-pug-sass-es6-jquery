
<!DOCTYPE html>
<html>
<head>
	<link rel="favico" href="../image/favico.png">
	<link rel="shortcut icon" href="../image/favico.png">
	<link rel="stylesheet" href="../css/fonts.css">
	<link rel="stylesheet" href="../css/style.css">
	<link rel="stylesheet" href="../css/form.css">
	<link rel="stylesheet" href="./admin.css">
	<link rel="stylesheet" href="../css/buttons.css">
	<!-- loader enabled for background-->
	<link rel="stylesheet" type="text/css" href="../css/loader.css">
	<!--  material icons add-->
	<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
	<!-- Add jquery's library-->
	<script src="../res/jquery-res/jquery/jquery-3.3.1.js"></script>
	<script src="../res/jquery-res/jquery-ui/jquery-ui.js"></script>
	<!--scripts-->
	<script src="./validate/validate-connexion.js"></script>
	<script src="../res/validate/jquery.validate.js"></script>

	<title>Connexion - Admin</title>
</head>
<body>
	<style type="text/css" media="screen">
	body{
		overflow:hidden;
	}
	#connexion-container{
		width:28em;
		height:auto;
		position: absolute;
		top:50%;
		left:49.3%;
		transform:translate(-50%,-50%);
		padding:5% auto;
	}
	#connexion-container p{
		padding:1.6em 0.9em;
		font-size:22pt;
		color:#E8814F;
		text-shadow:0 0 px #8B8B8B;
	}
	#connexion-container h1{
		color:#566573;
		margin-top:0.7em;
	}
	/*form setting*/
	form input{
		font-size:12pt;
	}
	/*button setting*/
	form{
		width:80%;
		margin:auto;
	}
	form .btn-1{
		text-transform: initial;
		margin:0.8em auto 1.2em auto !important;
		color:#8E8E8E !important;
		font:300 14pt 'Lato';
	}
	form .btn-1 span{
		display: block;
		line-height: 1em;
	}
	form .btn-1 svg{
		height:3.7em;
	}
	/*error and checked place*/
	.error{
		margin-bottom:1em;
	}
	/*status connection*/
	.connexion-info span{
		margin-top:1.25em;
	}

</style>

<div id="connexion-container" class="bloc center">
	<h1 class="basic f300 h-20pt center">Connexion à l'espace d'administration</h1>
	<form id="connexion" class="basic f400 f16pt" method="post" action="">
		<div class="input-content didact f12pt">
			<span></span>
			<input type="email" id="conn_mail" name="conn_mail" value="<?php if (isset($_POST['conn_mail'])) {echo $_POST['conn_mail'];}?>" placeholder="Mail de l'administrateur">
		</div>
		<div class="input-content didact f12pt">
			<span></span>
			<input type="password" id="conn_mdp" name="conn_mdp"  placeholder="Mot de passe">
		</div>
		<button type="submit" class="btn btn-1 connection-submit">
			<svg>
				<rect x="0" y="0" fill="none" width="100%" height="100%" />
			</svg><span>Connexion</span>
		</button>
	</form>
	<div class="form-reponse">
		<?php

//error_reporting(E_ALL);
//ini_set('display_errors', 1);

require_once '../php/login.php';
$conn = new mysqli($hn, $un, $pw, $db);
if ($conn->connect_error) {
	die($conn->connect_error);
}

if (isset($_POST['conn_mail']) && isset($_POST['conn_mdp'])) {

	$conn_mail = mysqli_real_escape_string($conn, htmlspecialchars($_POST['conn_mail']));

	$conn_mdp = mysqli_real_escape_string($conn, htmlspecialchars($_POST['conn_mdp']));

	$query1 = "SELECT COUNT(*) AS exist FROM ARINELLA_adm WHERE adm_mail= '" . $conn_mail . "' ";
	$result = $conn->query($query1);
	if (!$result) {
		die($conn->error);
	}

// afficher

	$rows = $result->num_rows;
	for ($j = 0; $j < $rows; $j++) {
		$result->data_seek($j); // recherche la j-ème entrée
		// ‘fetch_array’ retourne un tableau assoc. pour cette entrée
		$row = $result->fetch_array(MYSQLI_ASSOC);

		if ($row['exist'] != 0) // Si le mail existe.
		{
			$query2 = "SELECT * FROM ARINELLA_adm WHERE adm_mail='" . $conn_mail . "' ";

			$result = $conn->query($query2);
			if (!$result) {
				die($conn->error);
			}

			// afficher

			$rows = $result->num_rows;
			for ($j = 0; $j < $rows; $j++) {
				$result->data_seek($j); // recherche la j-ème entrée
				// ‘fetch_array’ retourne un tableau assoc. pour cette entrée
				$row = $result->fetch_array(MYSQLI_ASSOC);

				$adm_mdp = $row['adm_mdp'];

				$verif_mdp = password_verify($conn_mdp, $adm_mdp);

				if ($verif_mdp) {
					$_SESSION['conn_mail'] = $conn_mail;
					// la session peut être appelée différemment et son contenu aussi peut être autre chose que le pseudo
					echo '<span class=\'connected hammersmith-one f11pt\'>Connexion réussi</span>';
					echo '<script type=\'text/javascript\'>document.location.reload(true)</script>';

				} else // Si le couple pseudo/ mot de passe n'est pas bon.
				{
					echo '<span class=\'fail hammersmith-one f11pt display-none\'>Vous n\'avez pas rentré le bon mot de passe</span>';
					echo '<script type=\'text/javascript\'>$(\'.fail\').slideToggle(\'slow\');</script>';

				}

			}
		} else {
			echo '<span class=\'fail hammersmith-one f11pt display-none\'>Mail à vérifier ou non enregistré en admin</span>';
			echo '<script type=\'text/javascript\'>$(\'.fail\').slideToggle(\'slow\');</script>';
		}

	}
}

// Deconnexion a la BD
$conn->close();
?>
</div>



</div>

</body>
</html>
