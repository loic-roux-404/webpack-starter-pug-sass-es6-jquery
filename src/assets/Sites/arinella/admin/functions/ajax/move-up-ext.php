
<?php
header('Refresh:1;../lukecage.php');

//error_reporting(E_ALL);
//ini_set('display_errors', 1);

require_once '../../../php/login.php';
$conn = new mysqli($hn, $un, $pw, $db);
if ($conn->connect_error) {
	die($conn->connect_error);
}

if (isset($_GET['move_up']) && isset($_GET['id_pic'])) {
	$move_up = $_GET['move_up'];
	$id_pic = $_GET['id_pic'];

	$select = "SELECT order_picture FROM ARINELLA_pictures WHERE id_picture ='$id_pic' AND type_picture ='1'";
//affichage de la colonnne de la bd pour verifiaction id <=>

	// on envoie la requête
	$res = $conn->query($select);
	if (!$res) {
		die($conn->error);
	}

	$rows = $res->num_rows;

	for ($j = 0; $j < $rows; $j++) {
		$res->data_seek($j);
		$row = $res->fetch_array(MYSQLI_ASSOC);

		//echo $move_up . "</br>";
		//echo $row['order_picture'];

		if ($move_up > "1") {
			$move_up = $move_up-"1"; //INCREMENTATION loops = number of picture
			$update = "UPDATE ARINELLA_pictures SET order_picture ='$move_up' WHERE id_picture = '$id_pic'";
		} else {
			echo "Cet élément est déjà en première position";
			$return = "first-pic";
		}

	}

//REQUEST EXECUTION
	$res = $conn->query($update);
	if (!$update) {
		//$reponse = '<span class=\'connected hammersmith-one f13pt\'>Photo ajoutée</span>';
		die($conn->error);
	}
}
// on envoie la requête
$res = $conn->query($update);
if (!$res) {
	die($conn->error);
}

?>