<meta charset="UTF-8" />


<?php
header('Refresh: 0.2;url=./admin.php');




//Connexion a la BD
require_once '../php/login.php';	
$conn =	 mysql_connect($hn,$un,$pw,$db);
$db = mysql_select_db( "ALT2CROUS" ) ;




//suppression de restaurants 

    //supression par id d'un formulaire et de son utilisateur
     // on teste si la variable du formulaire est bien déclarée
     if (isset($_POST['id_restau_suppr'])){ 
    $id_suppr=$_POST['id_restau_suppr'];
        	// on recherche le numedu membre à supprimer

	$query ='DELETE FROM RESTAURANTS WHERE id_restaurant='.$id_suppr;
    
     
	// lancement de la requête pour effacer notre membre
    //exécution de la requête:
    $result = mysql_query($query,$conn) ;

  if($result)
  {
    echo("La suppression par id a ete correctement effectuee <br>") ;
  }
  else
  {
    echo("La suppression à échouée ou aucun id n'a été entrée <br>");
  }
}

 
    //supression par id d'un formulaire et du reto
     // on teste si la variable du formulaire est bien déclarée
     

  if (isset($_POST['nom_restau_suppr'])){ 
           $nom_suppr=$_POST['nom_restau_suppr'];
        	// on recherche le numedu membre à supprimer

	$query ='DELETE FROM RESTAURANTS WHERE nom_restaurant='.'"'.$nom_suppr.'"';
    

	// lancement de la requête pour effacer notre membre
    //exécution de la requête:
    $result = mysql_query($query) ;

  if($result)
  {
    echo("Suppression effectuee</br>") ;
  }
  else
  {
    echo("La suppression à échouée ou aucun nom n'a ete entrée </br>");
  }
}



//deonnexion a la BD
   mysql_close($conn);



?>








