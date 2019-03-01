<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Photos - L'Arinella</title>
    <link rel="favico" href="./image/favico.png">
    <link rel="shortcut icon" href="./image/favico.png">
    <link rel="stylesheet" href="./css/fonts.css">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/buttons.css">
    <link rel="stylesheet" href="./res/normalize/normalize.css">
    <link rel="stylesheet" href="./res/bootstrap/css/bootstrap-grid.css">
    <!-- loader -->
    <link rel="stylesheet" type="text/css" href="./css/loader.css">
    <!--  material icons add + arinella icon pack-->
    <link rel="stylesheet" type="text/css" href="./fonts/arinella-icon.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <!--CSS PLUGINS-->
    <link rel="stylesheet" type="text/css" href="./res/jquery-res/jquery-ui/jquery-ui.css" />
    <link rel="stylesheet" href="./res/flexslider/flexslider.css">
    <link  href='./res/unitegallery/css/unite-gallery.css' rel='stylesheet' type='text/css' />
    <!-- Add jquery's library -->
    <script src="./res/jquery-res/jquery/jquery-3.3.1.js"></script>
    <script src="./res/jquery-res/jquery-ui/jquery-ui.js"></script>
    <script src="./res/jquery-res/jquery-easing/jquery-easing.js"></script>
    <!--plugins-->
    <script src="./res/flexslider/jquery.flexslider.js"></script>
    <script src="./res/aos/aos.js"></script>
    <!--  unite gallery plugin-->
    <script src='./res/unitegallery/js/unitegallery.min.js' type='text/javascript'  ></script>
    <script src='./res/unitegallery/themes/tiles/ug-theme-tiles.js' type='text/javascript'></script>
    <!--  my scripts-->
    <script src="./js/loader.js" type="text/javascript"></script>
    <script src="./js/menu.js" type="text/javascript"></script>
    <script src="js/myscript.js" type="text/javascript"></script>
    <script src="js/gallery.js" type="text/javascript"></script>


</head>

<body class="photos">

    <section id="main">
        <header id="header" class="f15pt lato f300">
            <div class="logo-spacing"></div>
            <button type="button" id="mob">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav class="cl-effect-15">
                <span><a href="./index.php" class="logo"><img src="./image/logo.png"
                    height="55" width="75"></a>


                    <h1 id="mob-text" class="rubik f300 f15pt">L'Arinella</h1>


                </span>
                <div class="menu">
                    <a href="./index.php" data-hover="Accueil">Accueil</a>
                    <a href="./a-propos.php" data-hover="&Agrave; Propos">&Agrave; Propos</a>
                    <a href="./photos.php">Photos</a> <a href="./alentours.php" data-hover="Aux alentours">Aux alentours</a>
                    <a href="./reserver.php" data-hover="Réserver">Réserver</a>
                </div>
            </nav>
        </header>
        <div id="container">
            <section id="section-1">
                <div class="row">
                    <article class="col-lg-12">
                        <div class="bloc photos">


                            <article id="galleries">

                              <div class="buttons row">

                                <button type="button" id="btn-int" class="btn btn-3e btn-3 fa-home"><span class="muli h-20pt f500 lh-sm">Intérieur</span></button>
                                <button type="button" id="btn-ext" class="btn btn-3e btn-3 fa-sun"><span class="muli h-20pt f500 lh-sm">Extérieur</span></button>
                            </div>

                            <?php

require_once './php/login.php';
$conn = new mysqli($hn, $un, $pw, $db);
if ($conn->connect_error) {
	die($conn->connect_error);
}

?>


                           <div id="interieur">
                            <div id="gallery-int" class="raleway f13pt f400 center">


                                <?php

$query = 'SELECT id_picture,picture FROM ARINELLA_pictures WHERE type_picture="0" ORDER BY order_picture';

$result = $conn->query($query);
if (!$result) {
	die($conn->error);
}

$rows = $result->num_rows;

for ($j = 0; $j < $rows; $j++) {
	$result->data_seek($j);
	$row = $result->fetch_array(MYSQLI_ASSOC);
	if (($j + 1) <= 8) {
		//class=\"img-diapo\"

		echo "

                                      <img src=\"./image/photos/interieur/" . $row['picture'] . "\"
                                      data-image=\"./image/photos/interieur/" . $row['picture'] . "\"
                                      data-description=\"photo intérieur " . $row['id_picture'] . "\"
                                      alt=\"photo intérieur " . $row['id_picture'] . "\">


                                      ";
	}
}?>
                          </div>
                      </div>

                      <div id="exterieur" style="display: none;">
                        <div id="gallery-ext" class="raleway f13pt f400 center">
                            <?php

$query = 'SELECT id_picture,picture FROM ARINELLA_pictures WHERE type_picture="1"';

$result = $conn->query($query);
if (!$result) {
	die($conn->error);
}

$rows = $result->num_rows;

for ($j = 0; $j < $rows; $j++) {
	$result->data_seek($j);
	$row = $result->fetch_array(MYSQLI_ASSOC);
	if (($j + 1) <= 8) {

		echo "
                                  <img src=\"./image/photos/exterieur/" . $row['picture'] . "\"
                                  data-image=\"./image/photos/exterieur/" . $row['picture'] . "\"
                                  data-description=\"photo extérieur " . $row['id_picture'] . "\"
                                  alt=\"photo extérieur " . $row['id_picture'] . "\">

                                  ";
	}
}
?>
                      </div>
                  </div>
              </article>

          </div>

      </article>
  </div>
</section>

<footer id="footer" class="bloc">
    <div class="row justify-content-center">
        <article id="rights"
        class="col-sm-6 center lato f12pt lato f300 md-title-2">
    Tous droits réservés - 2018</article>
    <article id="contact" class="col-sm-6 center">
        <div class="row justify-content-around">
            <div class="contact-icon col-2 left">
                <i class="fa-contact" title="Pour plus d'info contactez nous">
                    <span class="path1"></span><span class="path2"></span><span
                    class="path3"></span><span class="path4"></span><span
                    class="path5"></span><span class="path6"></span><span
                    class="path7"></span><span class="path8"></span><span
                    class="path9"></span><span class="path10"></span><span
                    class="path11"></span><span class="path12"></span><span
                    class="path13"></span><span class="path14"></span><span
                    class="path15"></span><span class="path16"></span>
                </i>
            </div>
            <div
            class="contact-infos col-10 left lh-md lato f300 f12-5pt xs-pad-top">
            <ul>
                <li>69loloro10@gmail.com</li>
                <li>0778264035</li>
            </ul>
        </div>
    </div>
</article>
</div>
</footer>
</div>
</section>
<div id="loading-screen">
    <div id="container">
        <header class="bloc reverse"></header>
        <div class="row gutter-top">
            <article class="col-sm-12">
                <div class="bloc load"></div>
            </article>
            <article class="col-sm-6 loader-gutter">
                <div class="bloc reverse gutter-top"></div>
            </article>
            <article class="col-sm-6 ">
                <div class="bloc reverse gutter-top"></div>
            </article>


        </div>
    </div>
</div>
</body>





</html>