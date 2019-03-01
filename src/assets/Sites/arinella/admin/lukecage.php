<?php
/* Configure le limiteur de cache à 'private' */
session_cache_limiter('private');

/* Configure le délai d'expiration à 30 minutes */
define('SESSION_TIMEOUT', "3600");
session_cache_expire(3600);

session_start();
if (!isset($_SESSION['conn_mail'])) {

	echo '<div class="connexion-info">

 <span class="nunito">Non connecté en tant qu\'administrateur du site.';
	echo '<br>Retour à <a href=\'../index.php\'>l\'accueil</a>
 </span>
 </div>';
	include "connexion.php";
	exit();

} else {
	echo '<div class="connexion-info nunito">
 <span>
 Vous ête connecté (admin :&nbsp;<span class="connected">' . $_SESSION['conn_mail'] . '</span>&nbsp)';
	echo '
 <a href="disconnect.php" class="disconnect nunito f12pt" title="deconnexion"><i class="material-icons">exit_to_app</i></a>
 </span>
 </div>';
}
?>
<!DOCTYPE html>
<html lang="fr" class="no-js">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Administration</title>
  <link rel="favico" href="../image/favico.png">
  <link rel="shortcut icon" href="../image/favico.png">
  <link rel="stylesheet" href="../css/fonts.css">
  <link rel="stylesheet" href="../css/style.css">
  <link rel="stylesheet" href="../css/form.css">
  <link rel="stylesheet" href="../css/buttons.css">
  <link rel="stylesheet" href="../res/normalize/normalize.css">
  <link rel="stylesheet" href="../res/bootstrap/css/bootstrap-grid.css">

  <!--admin page special css-->
  <link rel="stylesheet" href="./admin.css">
  <!--  material icons add + arinella icon pack-->
  <link rel="stylesheet" type="text/css" href="../fonts/arinella-icon.css">
  <link rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <!--CSS PLUGINS-->
  <link rel="stylesheet" type="text/css"
  href="../res/jquery-res/jquery-ui/jquery-ui.css" />
  <link rel="stylesheet" href="../res/flexslider/flexslider.css">
  <!-- Add jquery's library -->
  <script src="../res/jquery-res/jquery/jquery-3.3.1.js"></script>
  <script src="../res/jquery-res/jquery-ui/jquery-ui.js"></script>
  <script src="../res/jquery-res/jquery-easing/jquery-easing.js"></script>
  <!--form plugin-->
  <script src="../res/validate/jquery.validate.js"></script>
  <!--  scripts-->
  <script src="../js/menu.js" type="text/javascript"></script>
  <script src="../res/flexslider/jquery.flexslider.js"></script>
  <script src="./validate/validate-adm-form.js"></script>
  <script src="./js/admin.js" type="text/javascript"></script>


</head>
<body style="background: #D6EAF8;">
  <section id="main" class="admin">

    <div class="head">
      <header id="header" class="f15pt lato f300">
        <div class="logo-spacing"></div>
        <button type="button" id="mob">
          <span></span> <span></span> <span></span>
        </button>
        <nav class="cl-effect-15">
          <span><a href="../index.php" class="logo"><img
            src="../image/logo.png" height="55" width="75"></a>


            <h1 id="mob-text" class="rubik f300 f15pt">L'Arinella</h1> </span>
            <div class="menu">
              <a href="../index.php" data-hover="Accueil">Accueil</a> <a
              href="../a-propos.php" data-hover="&Agrave; Propos">&Agrave; Propos</a> <a href="../photos.php"
              data-hover="Photos">Photos</a> <a href="../alentours.php"
              data-hover="Aux alentours">Aux alentours</a> <a
              href="../reserver.php" data-hover="Réserver">Réserver</a>
            </div>
          </nav>
        </header>
      </div>

      <div id="container">

        <section id="section-1">
          <div id="" class="row">

            <article class="col-lg-12">
              <div class="bloc">
                <h2 class="f17pt f600 nunito-sans center md-title-2 admin-banner">
                  <strong class="barlo h-28pt f700">A</strong>dministration
                </h2>

                <div class="row">
                  <div class="col-lg-12">
                    <h2 class="f15pt f600 nunito-sans center sm-title-2">Photos</h2>
                  </div>

                  <div class="col-lg-6 center form-bloc">
                    <form enctype="multipart/form-data"
                    action="./functions/add-picture.php" method="post"
                    id="int_add_pic">

                    <h1 class="nunito f15pt center md-title-1 no-pad-top">Intérieur</h1>
                    <div class="file-field">
                      <input type="file" name="int_picture" id="int_picture"
                      accept=".png, .jpg, .jpeg" />
                    </div>
                    <input type="hidden" name="id_picture" value="">
                    <button class="pic-add btn btn-7 btn-7b fa-continue"
                    type="submit">Ajouter</button>

                  </form>

                  <div class="col-lg-12">
                    <h2 class="nunito f15pt center md-title-1"></h2>
                  </div>
                  <div class="col-lg-12">


                    <?php

require_once '../php/login.php';
$conn = new mysqli($hn, $un, $pw, $db);
if ($conn->connect_error) {
	die($conn->connect_error);
}

$query = 'SELECT * FROM ARINELLA_pictures WHERE type_picture="0" ORDER BY order_picture';

$result = $conn->query($query);
if (!$result) {
	die($conn->error);
}

$rows = $result->num_rows;

for ($j = 0; $j < $rows; $j++) {
	$result->data_seek($j);
	$row = $result->fetch_array(MYSQLI_ASSOC);
	if (($j + 1) <= 8) {
		?>

                      <table class="gallery-admin">
                        <tbody>

                          <?php echo "<tr><td rowspan=\"2\" colspan=\"3\"> <img src=\"../image/photos/interieur/" . $row['picture'] . "\"></td>"; ?>
                          <td>

                            <form action="./functions/delete-picture.php" method="post"
                            enctype="multipart/form-data" class="delete">
                            <?php
echo "<input type=\"hidden\" name=\"pic_del\"
                            value=\"" . $row['id_picture'] . "\">
                            <input type=\"hidden\" name=\"pic_order\"
                            value=\"" . $row['order_picture'] . "\">

                            <input type=\"hidden\" name=\"pic_path\"
                            value=\"" . $row['picture'] . "\">

                            ";

		?>
                            <button class="pic-del-btn" type="submit"
                            title="supprimer cette photo">
                            <i class="fa-trash"></i>
                          </button>
                        </form>
                      </td>

                      <td rowspan="1" colspan="1">


                        <form action="./functions/ajax/move-up-int.php" method="post"
                        enctype="multipart/form-data" data-remote="true" class="form-move-up-int">
                        <?php
echo "<input type=\"hidden\" name=\"id_pic\"
                        value=\"" . $row['id_picture'] . "\" class=\"move_id\">

                        <input type=\"hidden\" name=\"move_up\"
                        value=\"" . $row['order_picture'] . "\" class=\"move_order\">

                        ";
		?>
                        <button class="pic-del-btn move-up-int"
                        type="submit" title="Remonter la photo">
                        <i class="fa-arrow-up"></i>
                      </button>
                    </form>
                  </td>


                </tr>

                <tr>

                  <td>
                    <form action="./functions/update-picture.php"
                    method="post" enctype="multipart/form-data">
                    <div class="upload-wrapper">
                      <?php echo " <input type=\"hidden\" name=\"id_pic\" value=\"" . $row['id_picture'] . "\">" ?>
                      <input type="file" name="update_pic"
                      class="input-update" title="Mettre a jour cette photo"
                      onchange="this.form.submit();"> <i class="fa-edit"></i>

                    </div>
                  </form>
                </td>


                <td rowspan="1" colspan="1">


                  <form action="" method="post" enctype="multipart/form-data">
                    <?php
echo "<input type=\"hidden\" name=\"id_pic\"
                    value=\"" . $row['id_picture'] . "\" class=\"move_id\">


                    <input type=\"hidden\" name=\"move_down\"
                    value=\"" . $row['order_picture'] . "\" class=\"move_order\">


                    "; ?>

                    <button class="pic-del-btn move-down-int"
                    type="submit" title="Descendre la photo">
                    <i class="fa-arrow-down"></i>
                  </button>
                </form>

              </td>



            </tr>

            <?php
} else {
		echo "<span class=\"error nunito f12pt f300\">Vous pouvez uniquement afficher 8 images</span>";
	}
}
?>


      </tbody>
    </table>
  </div>
</div>


<div class="col-lg-6 center form-bloc">

  <form enctype="multipart/form-data"
  action="./functions/add-picture.php" method="post"
  id="ext_add_pic">

  <h1 class="nunito f15pt center md-title-1 no-pad-top">Extérieur</h1>

  <div class="file-field">
    <input type="file" name="ext_picture" id="ext_picture"
    accept=".png, .jpg, .jpeg" />
  </div>

  <input type="hidden" name="id_picture" value="">
  <button class="pic-add btn btn-7 btn-7b fa-continue"
  type="submit">Ajouter</button>

</form>


<div class="col-lg-12">

  <h2 class="md-title-1"></h2>
</div>
<div class="col-lg-12">

  <?php
// var_dump($_SESSION);

$query = 'SELECT * FROM ARINELLA_pictures WHERE type_picture="1" ORDER BY order_picture';

$result = $conn->query($query);
if (!$result) {
	die($conn->error);
}

$rows = $result->num_rows;

for ($j = 0; $j < $rows; $j++) {
	$result->data_seek($j);
	$row = $result->fetch_array(MYSQLI_ASSOC);
	if (($j + 1) <= 8) {
		?>
    <table class="gallery-admin">


      <tbody>

        <?php echo "<tr><td rowspan=\"2\" colspan=\"3\"> <img src=\"../image/photos/exterieur/" . $row['picture'] . "\"></td>"; ?>
        <td>

          <form action="" method="post"
          enctype="multipart/form-data" class="delete">
          <?php
echo "<input type=\"hidden\" name=\"pic_del\"
          value=\"" . $row['id_picture'] . "\">

          <input type=\"hidden\" name=\"pic_order\"
          value=\"" . $row['order_picture'] . "\">
          <input type=\"hidden\" name=\"pic_path\"
          value=\"" . $row['picture'] . "\">
          ";

		?>

          <button class="pic-del-btn" type="submit"
          title="supprimer cette photo">
          <i class="fa-trash"></i>
        </button>
      </form>
    </td>

    <td rowspan="1" colspan="1">


      <form action="" method="get" enctype="multipart/form-data">
        <?php
echo "<input type=\"hidden\" name=\"id_pic\"
        value=\"" . $row['id_picture'] . "\" class=\"move_id\">


        <input type=\"hidden\" name=\"move_up\"
        value=\"" . $row['order_picture'] . "\" class=\"move_order\">


        "; ?>
        <button class="pic-del-btn move-up-ext" type="submit"
        title="Remonter la photo">
        <i class="fa-arrow-up"></i>
      </button>
    </form>
  </td>


</tr>

<tr>

  <td>
    <form action="./functions/update-picture.php"
    method="post" enctype="multipart/form-data">
    <div class="upload-wrapper">
      <?php echo " <input type=\"hidden\" name=\"id_pic\" value=\"" . $row['id_picture'] . "\">" ?>
      <input type="file" name="update_pic" class="input-update"
      title="Mettre a jour cette photo"
      onchange="this.form.submit();"> <i class="fa-edit"></i>

    </div>
  </form>
</td>


<td rowspan="1" colspan="1">


  <form action="" method="get" enctype="multipart/form-data">
    <?php
echo "<input type=\"hidden\" name=\"id_pic\"
    value=\"" . $row['id_picture'] . "\" class=\"move_id\">


    <input type=\"hidden\" name=\"move_down\"
    value=\"" . $row['order_picture'] . "\" class=\"move_order\">


    "; ?>

    <button class="pic-del-btn move-down-ext" type="submit"
    title="Descendre la photo">
    <i class="fa-arrow-down"></i>
  </button>
</form>

</td>



</tr>

<?php
} else {
		echo "<span class=\"error nunito f12pt f300\">Vous pouvez uniquement afficher 8 images</span>";
	}
}

?>

</tbody>
</table>



</div>


</div>
<div class="reponse col-lg-12">
 <?php

$info_return = $_SESSION["info_return"];
// echo $info_return;

if (isset($info_return)) {

	echo " <script src=\"./js/lightbox.js\" type=\"text/javascript\">

   </script>";

	if ($info_return != "true") {
		echo "<div id=\"lightbox-rep\"><p class=\"add nunito f13pt f300\">Photos ajoutée</span></p></div>";
	} elseif ($info_return === "update") {
		echo "<div id=\"lightbox-rep\"><p class=\"add nunito f13pt f300\">Mis a jour</span></p></div>";
	} else {
		echo "<div id=\"lightbox-rep\"><p class=\"add nunito f13pt f300\">Erreur ou trop de photos<br> (8 maximum)</p></div>";
	}
}
?></div>

</div>

<span class="separate-border"></span>
<h1 class="f15pt f600 nunito-sans center w-100">Gestion des
comptes</h1>
<article class="adm-account row justify-content-around xl-title-1">

  <div id="add-admin" class="col-lg-6 form-bloc ">
    <section class="container-4 center">


      <h1 class="nunito f14pt center">Ajouter un administrateur</h1>
      <form id="addAdmin" action="functions/addAdmin.php"
      method="post" enctype="multipart/form-data">
      <input type="hidden" name="adm_id" value="">
      <div class="input-content">
        <input type="email" id="adm_mail" name="adm_mail"
        placeholder="Mail qui servira d'identifiant à l'admin">
        <p id="search-result"></p>
      </div>
      <div class="input-content">
        <input type="password" name="adm_mdp" id="adm_mdp"
        placeholder="mot de passe">
      </div>
      <div class="input-content">
        <input type="password" name="adm_mdp_confirm"
        id="adm_mdp_confirm"
        placeholder="Confirmer le mot de passe">
      </div>

      <button type="submit"
      class="submit btn btn-7 btn-7b fa-continue">Ajouter</button>

    </form>

  </section>
</div>
<div id="sup-admin" class="col-lg-6 form-bloc">
  <section class="container-4 center">
    <div id="delete">
      <h1 class="nunito f14pt center">Supprimer mon compte</h1>

      <a id="confirm" class="btn btn-7 btn-7b fa-continue"
      href="./functions/delete.php?adm_del=<?php echo $_SESSION['conn_mail']; ?>">Supprimer</a>

    </div>
  </section>
</div>

</article>
</div>
</article>

</div>
</section>
</div>
</section>

<div id="lightbox"></div>



</body>
<!--  scripts ajax  -->
<script src="./functions/ajax/move.js" type="text/javascript"></script>
<script src="./functions/ajax/delete.js" type="text/javascript"></script>

<?php unset($_SESSION['info_return']);?>


</html>
