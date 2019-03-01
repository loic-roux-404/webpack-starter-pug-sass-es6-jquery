
<?php

header('Refresh:6;../lukecage.php');

//error_reporting(E_ALL);
//ini_set('display_errors', 1);

require_once '../../../php/login.php';
$conn = new mysqli($hn, $un, $pw, $db);
if ($conn->connect_error) {
	die($conn->connect_error);
}

if (isset($_POST['move_up']) && isset($_POST['id_pic'])) {
	$order = $_POST['move_up'];
	$id_item = $_POST['id_pic'];

	$isUp = true;

/*$select = "
SELECT order_picture
FROM ARINELLA_pictures
WHERE type_picture ='0' AND order_picture < $move_up
LIMIT 1
";
echo $select;

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

}

$high = $row['order_picture'];
echo $high;
$sauv_high = $high;
$sauv_order = $move_up;
//$low = $row['low']; used to move-down

if ($move_up > "1") {
$update = "
UPDATE ARINELLA_pictures
SET order_picture = CASE order_picture
WHEN '$high' THEN '$move_up'
WHEN '$move_up' THEN '$sauv_high'
END
WHERE id_picture = '$id_pic' AND order_picture IN( '$sauv_high','$sauv_order')";
echo $update;
echo "true";
} else {
echo "Impossible cette photo est dejà en tête";
}

}*/

	if ($isUp) {
		$operator = "<";
		$order = "DESC";
	} else {
		$operator = ">";
		$order = "ASC";
	}

// Get row we are moving
	$request = "
SELECT order_picture, id_picture FROM ARINELLA_pictures
WHERE id_picture = '$id_item' AND type_picture='1'
LIMIT 1";

// Save data for row we are moving

	$res = $conn->query($request);
	if (!$res) {
		die($conn->error);
	}

	$rows = $res->num_rows;

	for ($j = 0; $j < $rows; $j++) {
		$res->data_seek($j);
		$row = $res->fetch_array(MYSQLI_ASSOC);

		$isPos1 = true;
		$position1 = $row[$col_position];
		$id_item1 = $row[$col_id];
	}

// Get row we want to swap with
	$request2 = "
SELECT order_picture, id_picture FROM ARINELLA_pictures
WHERE '$col_position' '$operator' '$position1'
ORDER BY order_picture '$order' LIMIT 1";

	$res = $conn->query($request2);
	if (!$res) {
		die($conn->error);
	}

	$rows = $res->num_rows;

	for ($j = 0; $j < $rows; $j++) {
		$res->data_seek($j);
		$row = $res->fetch_array(MYSQLI_ASSOC);

		$isPos2 = true;
		$position2 = $row[$order];
		$id_item2 = $row[$col_id];
	}

// If both rows exist (indicating not top or bottom row), continue
	if ($isPos1 && $isPos2) {
		$query_update = mysql_query("
		UPDATE ARINELLA_pictures
		SET '$col_position' = '$position2'
		WHERE id_picture = '$id_item1'");

		$query_update2 = "
	UPDATE ARINELLA_pictures
	SET '$col_position' = '$position1'
	WHERE id_picture = '$id_item2'";
	}

//REQUEST EXECUTION

// on envoie la requête
	$res = $conn->query($query_update);
	$res = $conn->query($query_update2);
	if (!$res) {
		die($conn->error);
	}
}

?>