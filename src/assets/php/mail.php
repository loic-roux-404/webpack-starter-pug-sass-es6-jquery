<?php
// require_once '../php/login.php';

// $conn = new mysqli($hn, $un, $pw, $db);
// if ($conn->connect_error) {
// 	die($conn->connect_error);
// }

//var_dump($_GET);

if (isset($_GET['nom']) && isset($_GET['email']) && isset($_GET['message'])) {

	$nom = $_GET['nom'];
	$email = $_GET['email'];
	$message = nl2br($_GET['message']);

//----------------------SEND EMAIL-------------------\\

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
	//$mail->Debugoutput = 'html met -UTF8';

	$mail->IsHTML(true);
	$mail->CharSet = 'UTF-8';
	//Username to use for SMTP authentication - use full email address for gmail
	$mail->Username = 'andregope999@gmail.com';
//Password to use for SMTP authentication
	$mail->Password = 'Azye-69igsoft';
//Set who the message is to be sent from
	$mail->SetFrom('andregope999@gmail.com');
//Set an alternative reply-to address
	$mail->AddReplyTo($email, $nom);
	//----------Set who the message is to be sent to-----------\\

	//---search all admin mail in BD--\\

	$mail->AddAddress("loic.roux.404@gmail.com");
	//test addresses to be sent
	//Set the subject line
	$mail->Subject = 'Message portfolio';
	//Read an HTML message body from an external file, convert referenced images to embedded, convert HTML into a basic plain-text alternative body
	//$mail->MsgHTML(file_get_contents('contents.html'), dirname(__FILE__));
	//Replace the plain text body with one created manually
	$mail->Body = "
	<!DOCTYPE html>
	<html>
			<head>
			<style type=\"text/css\">
			@import url('https://fonts.googleapis.com/css?family=Montserrat+Alternates|Montserrat:300,400,500,600,800|Roboto:300,400,500,600,700,800');

			#body{
				background:#fafafa;
				box-shadow:0 0 1px 2px #a7a7a7;
			}
			h4{
				margin:1.5em auto 0.7em auto;
				text-align:center;
				font-size:2rem;
				color:#1a1a1a;
				font-family:Roboto;
				text-transform:uppercase;
				font-weight:800;
				letter-spacing:4px;
			}
			p{
				display:block;
				background:#0a0a0a;
				height:1px;
				width:80%;
				margin:2px auto;
			}
			.message{
				font-size:13pt;
				text-align:center;
				padding:1em;
				box-shadow: 0 0 3px 2px #dadada;
				margin:0.2em auto;
				width:80%;
				background:#fff;
			}
			.content{
				text-align:center;
				color:#A7A7A7;
				font-size:1.4em;
				font-family: Montserrat;
				color:#0a0a0a!important;
			}
			h1{
				text-align:center;
				color:#283747!important;
				margin:1em auto 0.2em auto;
				font-family:Montserrat;
				font-weight:600;
				letter-spacing:4px;
			}
			.spacer{
				height:1.3em;
				width:100%;
				display:block;
			}
			@media (max-width:768px){
				h1{
					font-size:1.2em;
					letter-spacing:1.5px
				}
				.content{
					padding:0.2em 1em;
					text-align:center;
				}
			}
			</style>
			</head>
			<body>
			<div id=\"body\">
				<br>
				<h4>
				Portfolio message
				</h4>
				<p></p>

				<div class=\"content\">
				<br> Identité: " . $nom . "&nbsp;<br>Mail:&nbsp;" . $email . "
				</div>

				<h1>Message</h1>
				<div class=\"message\">
						<span>" . $message . "</span>
				</div>

				<span class=\"spacer\"></span>

			</div>

			</body></html>";

//Send the message, check for errors
	if (!$mail->Send()) {
		echo 'mail invalide ou erreur de serveur: ' . $mail->ErrorInfo;
		$reponse = "<div class='error-message nunito f13pt f500 center'>
				<i class='fa-x'></i>
				Erreur avec la soumission de la demande </div> ";
		return $reponse;

	} else {
		$reponse = "Votre demande de réservation a bien été envoyée";
		die($reponse . $conn->error);
	}

}

// Deconnexion a la BD
//$conn->close();

?>