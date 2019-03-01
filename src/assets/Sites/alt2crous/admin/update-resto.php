<?php
header('Refresh: 2;url=./admin.php');

require_once'../php/login.php';
$conn=new mysqli($hn,$un,$pw,$db);
if ($conn->connect_error)
    die ($conn->connect_error);


//modifier resto

if(isset($_POST['id_restaurant_modif']) && isset($_POST['nom_restaurant_modif']) && isset($_POST['type_restaurant_modif']) && isset($_POST['loc_restaurant_modif'])
 && isset($_POST['prix_restaurant_modif']) && isset($_POST['equilibre_restaurant_modif']))
{
	$id_restaurant_modif=$_POST['id_restaurant_modif'];
	$nom_restaurant_modif=htmlspecialchars($_POST['nom_restaurant_modif']);
	$type_restaurant_modif=$_POST['type_restaurant_modif'];
	$loc_restaurant_modif=$_POST['loc_restaurant_modif'];
	$prix_restaurant_modif=htmlspecialchars($_POST ['prix_restaurant_modif']);
	$equilibre_restaurant_modif=$_POST['equilibre_restaurant_modif'];
//	echo $id_restaurant_modif ."</br>".$nom_restaurant_modif ."</br>".$type_restaurant_modif."</br>".$loc_restaurant_modif."</br>".$prix_restaurant_modif."</br>".$equilibre_restaurant_modif;
 $equilibre_restaurant_modif=$nom_restaurant=$type_restaurant_modif=$type_restaurant_modif=
 strtr($equilibre_restaurant_modif,$nom_restaurant,$type_restaurant_modif,$type_restaurant_modif,
'ÀÁÂÃÄÅÇÈÉÊËÌÍÎÏÒÓÔÕÖÙÚÛÜÝàáâãäåçèéêëìíîïðòóôõöùúûüýÿ"',
'AAAAAACEEEEIIIIOOOOOUUUUYaaaaaaceeeeiiiioooooouuuuyy“');
 
if ($_FILES['img_restaurant_modif']['size'] > 0) {
    $img_restaurant_modif=$_FILES['img_restaurant_modif']['name'];
    
    // si un fichier est envoyé, on enregistre ce fichier
    $file_tmp_name = $_FILES['img_restaurant_modif']['tmp_name'];
    move_uploaded_file($file_tmp_name, "../image/upload-images/$img_restaurant_modif");


} 

    // puis on l'enregistre en bdd
    $sql= 'UPDATE RESTAURANTS SET nom_restaurant = "'.$nom_restaurant_modif.'", 
    type_restaurant = "'.$type_restaurant_modif.'",
    prix_restaurant = "'.$prix_restaurant_modif.'",
  loc_restaurant = "'.$loc_restaurant_modif.'",
  equilibre_restaurant = "'.$equilibre_restaurant_modif.'" ,
  img_restaurant = "'.$img_restaurant_modif.'"
  
  WHERE id_restaurant = "'.$id_restaurant_modif.'"';
  

  $resultat = $conn->query($sql);
  echo $resultat;
if ($resultat)
	die("<br><br>Success " . $conn->error);  
    
else
{
	$reponse= "Erreur soumission du formulaire";
	/*echo $reponse ;*/
}


}

?>