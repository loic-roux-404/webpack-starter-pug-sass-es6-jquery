<?php
header('Refresh: 1;url=../contacter.html');
?>
<?php


require_once'login.php';
$conn=new mysqli($hn,$un,$pw,$db);
if ($conn->connect_error)
	die ($conn->connect_error);
    
// var_dump($_POST);
 
if(isset($_POST['id_contact']) && isset($_POST['nom_contact']) && isset($_POST['prenom_contact']) && isset($_POST['mail_contact']) && isset($_POST['age_contact'])
 && isset($_POST['lieuetu_contact']) && isset($_POST['remarque_contact']))
{
	$id_contact=$_POST['id_contact'];
	$nom_contact=$_POST['nom_contact'];
	$prenom_contact=$_POST['prenom_contact'];
	$mail_contact=$_POST['mail_contact'];
	$age_contact=$_POST['age_contact'];
	$lieuetu_contact=$_POST['lieuetu_contact'];
	$remarque_contact=$_POST['remarque_contact'];
	/*echo $id_contact."</br>" .$nom_contact ."</br>".$prenom_contact 
	."</br>".$mail_contact ."</br>".$age_contact."</br>".$lieuetu_contact."</br>".$remarque_contact;*/
    

    
	$query= 'INSERT INTO CONTACT VALUES ("NULL", "'.$nom_contact.'","'.$prenom_contact.'","'.$age_contact.'","'.$mail_contact.'","'.$lieuetu_contact.'","'.$remarque_contact.'")';
    
  $result = $conn->query($query);
if ($result){
	die(" Succes" . $conn->error);  
}
else
{
	$reponse= "Erreur soumission du formulaire ";
	/*echo $reponse ;*/
}

}




?>