<?php session_start();?>
<!DOCTYPE html>
<html>
<head>
	<title>Envoi...</title>
	<meta http-equiv="refresh" content="0; URL=../index.php">
	<link rel="stylesheet" type="text/css" href="../css/form.css">
</head>
<style type="text/css" media="screen">

body{
	background: linear-gradient(90deg, rgba(35,235,235,0.6) 0%, rgba(33,228,255,0.7) 29%, rgba(130,221,255,0.8) 63%, rgba(0,212,255,0.5) 100%) !important;
	height:100vh;
	width:100vh;
}

.error-message{
	position: absolute;
	width:40%;
	padding:3em 1em;
	left:50%;
	top:50%;
	transform: translate(-50%,-50%);
}
</style>
<body>


	<!--function form recuperation-->

	<p class="center">
		<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$toggleRep = ' <script>$(\'#form-answer\').fadeToggle(2200);
		$(\'#form-answer\').delay(200).fadeToggle(2200);

		</script>';

require_once '../php/login.php';

$conn = new mysqli($hn, $un, $pw, $db);
if ($conn->connect_error) {
	die($conn->connect_error);
}

//var_dump($_POST);

//echo $_POST['res_date_2'];
//echo $_POST['res_date_1'];

if (isset($_POST['res_nom']) && isset($_POST['res_prenom']) && isset($_POST['res_mail']) && isset($_POST['res_date_1']) && isset($_POST['res_date_2']) && isset($_POST['res_tel']) && isset($_POST['res_message'])) {

	$res_id = $_POST['res_id'];
	$res_nom = $_POST['res_nom'];
	$res_prenom = $_POST['res_prenom'];
	$res_mail = $_POST['res_mail'];
	$res_tel = $_POST['res_tel'];
	$res_date_1 = htmlspecialchars($_POST['res_date_1']);
	$res_date_2 = htmlspecialchars($_POST['res_date_2']);
	$res_message = $_POST['res_message'];

	$query = 'INSERT INTO ARINELLA_res VALUES ("NULL", "' . $res_nom . '","' . $res_prenom . '","' . $res_mail . '","' . $res_tel . '",
			"' . $res_date_1 . '","' . $res_date_2 . '","' . $res_message . '")';

	//test sql query
	//echo $query;

//--------------EXECUTION DE LA REQUETE--------------------
	$result = $conn->query($query);

//---------------fin requete execution boucle test-----//

//----------------------SEND EMAIL TO ADMIN-------------------\\

	//echo $row . "<br>";

	//============= mail settings PHP MAILER==============
	require './php-mailer.php';
	require './smtp.php';
//Create a new PHPMailer instance
	$mail = new PHPMailer\PHPMailer\PHPMailer();
//Tell PHPMailer to use SMTP
	$mail->IsSMTP();
//Enable SMTP debugging
	// 0 = off (for production use)
	// 1 = client messages
	// 2 = client and server messages
	$mail->SMTPDebug = 0;
	//Set the encryption system to use - ssl (deprecated) or tls
	$mail->SMTPSecure = 'ssl';
//Whether to use SMTP authentication
	$mail->SMTPAuth = true;

	//Set the hostname of the mail server
	$mail->Host = 'smtp.gmail.com';
//Set the SMTP port number - 465 for authenticated TLS, a.k.a. RFC4409 SMTP submission
	$mail->Port = 465;
//Ask for HTML-friendly debug output
	//$mail->Debugoutput = 'html';
	$mail->IsHTML(true);
//Username to use for SMTP authentication - use full email address for gmail
	$mail->Username = 'andregope999@gmail.com';
//Password to use for SMTP authentication
	$mail->Password = 'igsoft3299A';
//Set who the message is to be sent from
	$mail->SetFrom($res_mail, $res_prenom);
//Set an alternative reply-to address
	$mail->AddReplyTo($res_mail, $res_prenom . $res_nom);
	//----------Set who the message is to be sent to-----------\\

	//---search all admin mail in BD--\\

	$query2 = 'SELECT adm_mail FROM ARINELLA_adm';

	$result2 = $conn->query($query2);
	if (!$result2) {
		die($conn->error);
	}

	$rows = $result2->num_rows;

	for ($j = 0; $j < $rows; $j++) {
		$result2->data_seek($j);
		$row = $result2->fetch_array(MYSQLI_ASSOC);

		$tab_adress = array();
		$tab_adress = $row['adm_mail'];
		//var_dump($tab_adress);

		$mail->AddAddress($tab_adress);
		//test addresses to be sent
	}
	//Set the subject line
	$mail->Subject = 'Reservation Arinella';
	//Read an HTML message body from an external file, convert referenced images to embedded, convert HTML into a basic plain-text alternative body
	//$mail->MsgHTML(file_get_contents('contents.html'), dirname(__FILE__));
	//Replace the plain text body with one created manually
	$mail->Body = "<html>
			<head>
			<style type=\"text/css\">
			@import url('https://fonts.googleapis.com/css?family=Montserrat+Alternates|Montserrat:300,400|Roboto');
			p{
				display:inline-block;
			}
			.content{
				text-align:center;
				padding:1em 4em;
				color:#A7A7A7;
				font-family: Montserrat;
				color:#898989 !important;
			}
			@media (max-width:718px){
				.content{
					padding:0 1em;
					text-align:center;
				}
			}
			</style>
			</head>
			<body style=\"
			background:#fafafa;
			font:400 13pt Montserrat Alternates;
			border-radius:5px;
			border:1px solid silver;
			margin:0.2em 0 2em 0;
			padding:0 0.1em;
			\">

			<h4 style=\"text-align:center;font-size:17pt;font-family:Roboto;color:#000;\">
			Demande R&eacute;servation Arinella
			</h4>

			<div style=\"content\">
			<br> Identité du demandeur : " . $res_nom . "&nbsp;" . $res_prenom . "<br>Télephone :" . $res_tel . "<br>Mail:&nbsp;" . $res_mail . "
			</div>

			<div class=\"content\">
			<br>Réservation du <p style=\"color:blue;\">" . $res_date_1 . "</p>&nbsp;au&nbsp;<p style=\"color:blue;\">" . $res_date_2 .
		"</p></div>
			<div style=\"font-size:14.5pt;text-align:center;padding:1em;border:1px solid #dadada;margin:1.5em auto;width:80%;background:#fff;\">


			<br><br><span style=\"background:#fff;\">" . $res_message . "</span></div></body></html>";

//final test for see the mail aspect
	//Attach an image file
	//$mail->AddAttachment('images/phpmailer_mini.gif');

//Send the message, check for errors
	if (!$mail->Send()) {
		echo 'mail invalide ou erreur de serveur: ' . $mail->ErrorInfo;
	}

	if ($result) {

		$reponse = "<div class='valid-message error-message nunito f13pt f500 center'> Votre demande de réservation a bien été envoyée </div>";
		$_SESSION['form-rep'] = "true";
		die($reponse . $toggleRep . $conn->error);

	} else {
		$reponse = "<div class='error-message nunito f13pt f500 center'>
				<i class='fa-x'></i>
				Erreur avec la soumission de la demande </div> ";
		echo $reponse && $toggleRep;
		$_SESSION['form-rep'] = "error";

	}

}

// Deconnexion a la BD
$conn->close();

?>
	</p>




</body>
</html>

