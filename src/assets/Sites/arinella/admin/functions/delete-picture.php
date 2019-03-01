<?php
session_start();
header('Refresh:0.0001;../lukecage.php');
?>

<!DOCTYPE html>
<html>
<head>
	<title>Suppression</title>
	<link rel="stylesheet" type="text/css" href="../admin.css">
</head>
<body style="background: #D6EAF8;">>


	<?php

error_reporting(E_ALL);
ini_set('display_errors', 1);

require_once '../../php/login.php';
$conn = new mysqli($hn, $un, $pw, $db);
if ($conn->connect_error) {
	die($conn->connect_error);
}

if (isset($_POST['pic_del']) && isset($_POST['pic_order']) && isset($_POST['pic_path'])) {
	$pic_del = $_POST['pic_del'];
	$pic_order = $_POST['pic_order'];
	$pic_path = $_POST['pic_path'];

	// on recherche l'id de la case a supprimer

	//suppression
	//
	$file_supp = 'SELECT * FROM ARINELLA_pictures WHERE id_picture="' . $pic_del . '"';
	//echo $file_supp;
	$type_supp = $conn->query($file_supp);

	$rows = $type_supp->num_rows;

	for ($j = 0; $j < $rows; $j++) {
		$type_supp->data_seek($j);
		$row = $type_supp->fetch_array(MYSQLI_ASSOC);

		//echo $row['type_picture'];
		$type_picture = $row['type_picture'];
		$id_picture = $row['id_picture'];

		if ($type_picture === "1") {
			unlink('../../image/photos/exterieur/' . $pic_path);
		} else {
			unlink('../../image/photos/interieur/' . $pic_path);
		}

		//===================\\
		//==========algo reorder pictures==========\\
		//===================\\
		if ($type_picture === "0") {

			//=========QUERIES for reorder higher and lower row in db=======\\

			$update_high = "UPDATE ARINELLA_pictures
				SET order_picture = order_picture - 1
				WHERE order_picture > $pic_order  AND type_picture='0'
				";
			//echo $update_high;
			//=========exec QUERY for reorder higher row in db=======\\
			$reorder_int = $conn->query($update_high);
			//=========exec QUERY for reorder lower row in db=======\\
			//			$reorder_int = $conn->query($update_low);

			//delete if algo finish
			//	}

		} else {
			//=========QUERIES for reorder higher and lower row in db=======\\

			$update_high = "UPDATE ARINELLA_pictures
				SET order_picture =order_picture - 1
				WHERE order_picture > $pic_order  AND type_picture='1'
				";
			//echo $update_high;
			//=========exec QUERY for reorder higher row in db=======\\
			$reorder_int = $conn->query($update_high);
			//=========exec QUERY for reorder lower row in db=======\\
			//			$reorder_int = $conn->query($update_low);

			//delete if algo finish
			//	}
		}
	}
//=========delete QUERY==========\\
	$query = 'DELETE FROM ARINELLA_pictures WHERE id_picture="' . $pic_del . '"';
	//====execution of delete row in db=========\\

	$result = $conn->query($query);

	if ($result) {
		$info_return = "true";
		//$_SESSION['info_return'] = $info_return;
		//reorder after delete\\

	} else {
		echo "Erreur";
		$info_return = "error";
	}

}
// Deconnexion a la BD
$conn->close();

?>



</body>
</html>