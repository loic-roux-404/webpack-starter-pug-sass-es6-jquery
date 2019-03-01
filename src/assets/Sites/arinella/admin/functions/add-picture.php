<?php
session_start();
header('Refresh:0.001;../lukecage.php');

//error_reporting(E_ALL);
//ini_set('display_errors', 1);
?>


<!DOCTYPE html>
<html>
<head>
	<title>Ajout...</title>
	<link rel="stylesheet" type="text/css" href="../admin.css">
</head>
<body style="background: #D6EAF8;">>



	<?php

require_once '../../php/login.php';
$conn = new mysqli($hn, $un, $pw, $db);
if ($conn->connect_error) {
	die($conn->connect_error);
}
//ajout d'une image
//var_dump($_FILES);
echo "<br>";
if (isset($_FILES['int_picture']['name'])) {

	//var_dump($_FILES);

	$select = 'SELECT COUNT(*) AS nb FROM ARINELLA_pictures WHERE type_picture="0"';
	//echo $select;
	// on envoie la requête
	$res = $conn->query($select);
	if (!$res) {
		die($conn->error);
	}

	$rows = $res->num_rows;

	for ($j = 0; $j < $rows; $j++) {
		$res->data_seek($j);
		$row = $res->fetch_array(MYSQLI_ASSOC);

		if ($row['nb'] <= 8) {
			// si un fichier est envoyé, on enregistre ce fichier
			$nb = $row['nb']+"1";
			//echo $nb;
			$insert_picture = $_FILES['int_picture']['name'];
			$file_tmp_name = $_FILES['int_picture']['tmp_name'];

			move_uploaded_file($file_tmp_name, "../../image/photos/interieur/$insert_picture");
			$query = 'INSERT INTO ARINELLA_pictures VALUES ("NULL","' . $insert_picture . '","0","' . $nb . '")';

			//echo $query;
			//echo $file_tmp_name;
		} else {
			$info_return = "error";
//echo $add_return . "plus de 8 entrée";
		}

	}
} elseif (isset($_FILES['ext_picture']['name'])) {

	$select = 'SELECT COUNT(*) AS nb FROM ARINELLA_pictures WHERE type_picture="1"';
	$res = $conn->query($select);
	if (!$res) {
		die($conn->error);
	}

	$rows = $res->num_rows;

	for ($j = 0; $j < $rows; $j++) {
		$res->data_seek($j);
		$row = $res->fetch_array(MYSQLI_ASSOC);

		if ($row['nb'] <= 8) {
			// si un fichier est envoyé, on enregistre ce fichier
			$nb = $row['nb'] + 1;
			$insert_picture2 = $_FILES['ext_picture']['name'];
			$file_tmp_name = $_FILES['ext_picture']['tmp_name'];
// si un fichier est envoyé, on enregistre ce fichier
			move_uploaded_file($file_tmp_name, "../../image/photos/exterieur/$insert_picture2");
			$query = 'INSERT INTO ARINELLA_pictures VALUES ("NULL","' . $insert_picture2 . '","1","' . $nb . '")';

			//echo $query;
			//echo $file_tmp_name;
		} else {
			$info_return = "error";
//			echo $add_return;
		}

	}
	//echo $query;
}

$result = $conn->query($query);

if (!$result) {
	//$reponse = '<span class=\'connected hammersmith-one f13pt\'>Photo ajoutée</span>';
	die($conn->error);
}
if ($result) {
	$info_return = "false";

} else {
	echo '<span class=\'fail hammersmith-one f13pt\'>Echec de l’import</span><br>';
	$info_return = "error";
}

$_SESSION['info_return'] = $info_return;

//var_dump($_SESSION);
?>



</body>
</html>