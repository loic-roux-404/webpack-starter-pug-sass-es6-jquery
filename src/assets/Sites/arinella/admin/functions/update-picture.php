<?php
session_start();
header('Refresh:0.01;../lukecage.php');

error_reporting(E_ALL);
ini_set('display_errors', 1);
?>


<!DOCTYPE html>
<html>
<head>
	<title>Mise a jour..</title>
	<link rel="stylesheet" type="text/css" href="../admin.css">
	<link rel="stylesheet" type="text/css" href="../../css/loader.css">
</head>
<body>



	<?php

require_once '../../php/login.php';
$conn = new mysqli($hn, $un, $pw, $db);
if ($conn->connect_error) {
	die($conn->connect_error);
}
//ajout d'une image
//var_dump($_FILES);
echo "<br>";
if (isset($_FILES['update_pic']['name']) && isset($_POST['id_pic'])) {
	$insert_picture = $_FILES['update_pic']['name'];
	$id_pic = $_POST['id_pic'];
	//var_dump($_FILES);

	$select = 'SELECT * FROM ARINELLA_pictures WHERE id_picture=' . $id_pic;
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

//replace file
		$pic_to_replace = $row['picture'];

		// si un fichier est envoyé, on enregistre ce fichier

		$file_tmp_name = $_FILES['update_pic']['tmp_name'];
		if ($row['type_picture'] === "1") {
			unlink("../../image/photos/exterieur/$pic_to_replace");
			move_uploaded_file($file_tmp_name, "../../image/photos/exterieur/$insert_picture");
		} elseif ($row['type_picture'] === "0") {
			unlink("../../image/photos/interieur/$pic_to_replace");
			move_uploaded_file($file_tmp_name, "../../image/photos/interieur/$insert_picture");
		}
		$query = "UPDATE ARINELLA_pictures SET id_picture = 'NULL', picture = '$insert_picture' WHERE id_picture ='$id_pic' ";

	}
}

$result = $conn->query($query);

if (!$result) {
	//$reponse = '<span class=\'connected hammersmith-one f13pt\'>Photo ajoutée</span>';
	die($conn->error);
}
if ($result) {
	$info_return = "update";

} else {
	echo '<span class=\'fail hammersmith-one f13pt\'>Echec de l’import</span><br>';
	$info_return = "error";
}

$_SESSION['info_return'] = $info_return;

//var_dump($_SESSION);
?>



</body>
</html>