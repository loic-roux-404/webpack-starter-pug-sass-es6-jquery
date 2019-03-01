


<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
// db connection
require_once '../../php/login.php';
$conn = new mysqli($hn, $un, $pw, $db);
if ($conn->connect_error) {
	die($conn->connect_error);
}
if (isset($_POST["adm_mail"])) {
	$email = $_POST['adm_mail'];
	$query = "SELECT adm_id FROM ARINELLA_adm WHERE adm_mail = '" . $email . "'";
	$results = $conn->query($query);
	if ($results->num_rows == 0) {
		echo "true"; //good to register
	} else {
		echo "false"; //already registered
	}
}

?>
