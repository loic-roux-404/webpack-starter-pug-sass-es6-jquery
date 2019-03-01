


<?php
header('Refresh: 0.2;url=./admin.php');

//Connexion a la BD
require_once'../php/login.php';
$conn=new mysqli($hn,$un,$pw,$db);
if ($conn->connect_error)
	die ($conn->connect_error);
//Restaurants et leur gestion

 
if(isset($_POST['id_restaurant']) && isset($_POST['nom_restaurant']) && isset($_POST['type_restaurant']) && isset($_POST['loc_restaurant'])
 && isset($_POST['prix_restaurant']) && isset($_POST['equilibre_restaurant']))
{
	$id_restaurant=$_POST['id_restaurant'];
	$nom_restaurant=$_POST['nom_restaurant'];
	$type_restaurant=$_POST['type_restaurant'];
	$loc_restaurant=$_POST['loc_restaurant'];
	$prix_restaurant=htmlspecialchars($_POST['prix_restaurant']);
	$equilibre_restaurant=$_POST['equilibre_restaurant'];
	/*echo $id_restaurant ."</br>".$nom_restaurant ."</br>".$type_restaurant."</br>".$loc_restaurant."</br>"
	.$prix_restaurant."</br>".$equilibre_restaurant;*/
    

//ajout d'une image
if ($_FILES['img_restaurant']['size'] > 0) {
    $img_restaurant=$_FILES['img_restaurant']['name'];
    
    $extensions = array( 'jpg' , 'jpeg' , 'gif' , 'png' );
    
    
    
    // si un fichier est envoyé, on enregistre ce fichier
    $file_tmp_name = $_FILES['img_restaurant']['tmp_name'];
    move_uploaded_file($file_tmp_name, "../image/upload-images/$img_restaurant");


} 


    
	$query= 'INSERT INTO RESTAURANTS VALUES ("NULL","'.$nom_restaurant.'","'.$type_restaurant.'","'.$loc_restaurant.'","'.$prix_restaurant.'","'.$equilibre_restaurant.'","'.$img_restaurant.'")';

    
  $result = $conn->query($query);
if ($result){
	die("Success " . $conn->error);  
    
}
else
{
	$reponse= "Erreur";
	echo $reponse ;
}

}






?>
