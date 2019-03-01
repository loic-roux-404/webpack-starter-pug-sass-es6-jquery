

<?php
//Connexion a la BD
require_once '../php/login.php';	
$conn =	 mysql_connect($hn,$un,$pw,$db);
$db = mysql_select_db( "ALT2CROUS" ) ;
    
    //supression par id d'un formulaire et de son utilisateur
     // on teste si la variable du formulaire est bien déclarée
    if(isset($_GET['idDel'])){
          $id_suppr=$_GET['idDel'];
    
        	// on recherche le numedu membre à supprimer

	$query='DELETE FROM CONTACT WHERE id_contact='.$id_suppr;
	
	$result = mysql_query($query,$conn) ;
	
	if($result){
	    echo "Succes";
	}
	else{
	    echo "Erreur";
	}
    
     
	// lancement de la requête pour effacer notre membre
    //exécution de la requête:
}
header('Refresh: 0.2;url=./admin.php');
?>