<?php
// On démarre la session AVANT d'écrire du code HTML
/*session_start();*/

?>
<!DOCTYPE html>
<html lang="fr" class="no-js">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ALT 2 CROUS - Accueil</title>
    <meta name="description"
    content="Alt2crous est un nouveau service utile aux étudiants lassés des réstaurants unniversitaire et
    souhaitant trouver une alternative proche de son lieu d'étude." />
    <meta name="keywords"
    content="graille,crous,alternative, Grenoble, IUT, etudiant, restaurant, Menu by copdrops, css, html5,flat,material" />
    <meta name="author" content="Loic Roux" />
    <link rel="favico" href="../image/logo.png">
    <link rel="shortcut icon" href="../image/logo.png">
    <link rel="stylesheet" type="text/css" href="../css/fonts.css" />
    <link rel="stylesheet" type="text/css" href="../css/html5-deco.css" />
    <link rel="stylesheet" type="text/css" href="../css/component.css" />
    <link rel="stylesheet" type="text/css" href="../css/style-grid.css" />
    <link rel="stylesheet" type="text/css" href="../css/functions.css" />
    <link rel="stylesheet" type="text/css" href="../css/form.css" />
    <link rel="stylesheet" type="text/css" href="../css/menu.css" />
    <!--material icons add-->
    <link rel="stylesheet"
    href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <!-- Add jquery's library -->
    <script
    src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="./jquery-res/jquery-ui/jquery-ui.js"></script>
    <script src="//code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>
    <!-- csstransforms3d-->
    <script src="../js/modernizr.custom.25376.js"></script>
    <!--  my scripts-->
    <script src="../js/jquery.js"></script>
</head>

<body>
    <nav id="main" class="main clearfix comfortaa f400 f13pt fixed">
        <nav class="nav-laptop">
            <a href="../index.php" class="md-logo fix-left main-logo Gugi"
            title="Aller à l'accueil">Alt2Crous</a> <a href="../a-propos.html"
            class="md-news"><i class="material-icons md-22">face</i>Notre
        concept</a> <a href="../avis.html" class="md-upload"><i
            class="material-icons md-22">star_border</i>Meilleurs restos</a> <a
            href="../contacter.html" class="md-star"><i
            class="material-icons md-22">&#xE8A3;</i>Contacter</a>
            <div class="account">
                <ul>
                    <li><a href="#" class="md-image acc-a" title="Votre Compte"><i
                        class="material-icons md-24">&#xE853;</i></a>
                        <ul class="arrow-box f13pt rubik">
                            <li><a href="inscription.php" class="underline">Inscription</a></li>
                            <li><a href="connexion.php">Connexion</a></li>
                            <li class="hided"><a href="../account.php">Profil</a></li>
                            <li class="hided"><a href="./deconnexion.php">Deconnexion</a></li>
                        </ul></li>
                    </ul>
                </div>
            </nav>
            <div id="mobile-nav">
                <button id="showMenu">
                    <i class="material-icons md-36">&#xE5D2;</i>
                </button>
                <a href="index.php" class="md-active-logo fix-left mobile-logo gugi"
                title="Aller à l'accueil">Alt2Crous</a>
            </div>
        </nav>
        <div class="nav-height"></div>
        <div id="perspective" class="perspective effect-airbnb">
            <div class="container">
                <div class="wrapper">
                    <!-- top Navigation -->
                    <div class="global">
                        <section class="block">
                            <article class="article-1 grey-3">
                                <div class="container1 lato f300 f13pt">
                                    <div class="span-10 style-col gutter span-form">
                                        <header>
                                            <h1 class="md-title-1 oswald f500 center">Vous Inscrire</h1>
                                            <br>
                                        </header>
                                        <p class="w80 margin-auto center lato f15pt">
                                            Vous souhaiter en faire plus <br> Vous avez
                                            désormais la porssibilité en vous inscrivant sur <br>notre site
                                            de partager avec nous et les autres utilisateur des bons plans<br>
                                            restaurant ainsi que recevoir des news directement par mail
                                        </p>
                                        <form class="contact-form" method="post"
                                        action="./php/form.php">
                                        <article class="container1 form-article">
                                            <article class="container1 form-align">
                                                <section id="fsec-1" class="span-10">
                                                    <div class="row-right">
                                                        <input type="text" name="pseudo_etu"
                                                        required="required" placeholder="Votre Pseudo" /> <label
                                                        for="nom_contact"><i
                                                        class="material-icons md-24">&#xE851;</i></label>
                                                    </div>
                                                </section>
                                                <section class="span-10">
                                                    <div class="row-right">
                                                        <input type="email" name="mail_etu" id="mail_contact"
                                                        required="required" placeholder="email"> <label
                                                        for="mail_contact"><i
                                                        class="material-icons md-24">&#xE0E1;</i></label>
                                                    </div>
                                                </section>
                                                <section class="span-10">
                                                    <div class="row-right">
                                                        <input type="text" name="nom_etu" id="nom_contact"
                                                        required="required" placeholder="Nom" /> <label
                                                        for="nom_contact"><i
                                                        class="material-icons md-24">&#xE851;</i></label>
                                                    </div>
                                                </section>
                                                <section class="span-10">
                                                    <div class="row-right">
                                                        <input type="text" name="prenom_contact"
                                                        id="prenom_contact" placeholder="Prénom"
                                                        required="required"> <label for="prenom_contact"><i
                                                            class="material-icons md-24">&#xE87C;</i></label>
                                                        </div>
                                                    </section>

                                                    <section class="span-10">
                                                        <div class="row-right">
                                                            <input type="number" name="age_etu" id="age_contact"
                                                            required="required" placeholder="Âge" /> <label
                                                            for="age_contact"><i
                                                            class="material-icons md-24">&#xE332;</i></label>
                                                        </div>
                                                    </section>
                                                    <section class="span-10">
                                                        <div class="row-right">
                                                            <input type="text" name="etude_loc"
                                                            required="required"
                                                            placeholder="Lieu d'étude" /> <label
                                                            for="lieuetu_contact"><i
                                                            class="material-icons md-24">&#xE0C8;</i></label>
                                                        </div>
                                                    </section>

                                                    <section id="fsec-" class="span-10">
                                                        <div class="center">
                                                            <input type="hidden" name="id_etu"
                                                            value="" />
                                                            <input type="submit" value="Valider" id="submit-button" />
                                                        </div>
                                                    </section>
                                                </article>
                                            </article>
                                        </form>
                                    </div>
                                    <div class="span-5 style-col">
                                        <div class="container1 no-pad no-marg">
                                            <div class="span-5 img-in" style="margin: 0;">
                                                <img class="img-320"
                                                src="https://media.giphy.com/media/zBOqRPmkEF3Ow/giphy.gif">
                                            </div>
                                            <div class="span-5 span-form">
                                                <h2 class="md-title-1 oswald">C'est a Vous</h2>
                                                <p class="left">Contactez nous pour toute question ou
                                                suggestion. Nous vous répondrons rapidement.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="span-5 style-col gutter span-form">
                                        <h1 class="md-title-1 oswald f500">Alternative 2 Crous</h1>
                                        L'alternative tant attendue. Trouvez et selectionnez vos
                                        restaurants en fonction de vos envies et de votre budget. Le
                                        Crous ne seras plus qu'un mauvais souvenir. <br> <br>
                                    </div>

                                </div>
                            </article>
                        </section>

                        <!-- /main -->
                        <footer>
                            <div class="flex-c comfortaa 400 f12pt grey-1">
                                <div class="container1 no-pad flex-b cat-footer">
                                    <div class="container1 span-2 no-pad">
                                        <span
                                        class="span-10 no-marg no-pad mentions raleway f16pt f500">Divers</span>
                                        <a href="./footer/mentions.html" class=" span-10">Mentions
                                        légales</a> <a href="a-propos.html" class=" span-10">&Agrave;
                                        propos</a> <a href="./admin/admin.php" class="span-10">Administration
                                        </a> <span class="span-10 no-marg no-pad blank">&nbsp;</span> <span
                                        class="span-10 no-marg no-pad blank">&nbsp;</span>
                                    </div>
                                    <div class="container1 span-2 no-pad">
                                        <span
                                        class="span-10 no-marg no-pad mentions raleway f16pt f500">Plan
                                    du site</span> <a href="index.html" class="span-10">Accueil</a> <a
                                    href="./a-propos.html" class="span-10">Notre concept</a> <a
                                    href="./proximite.html" class="span-10">&Agrave;
                                Proximité</a> <a href="./avis.html" class="span-10">Meilleurs
                                restaurants</a>
                            </div>
                            <div class="container1 span-2 no-pad">
                                <span
                                class="span-10 no-marg no-pad mentions raleway f16pt f600">Aide</span>
                                <a href="#" class="span-10">Tutoriels</a> <a
                                href="footer/tuto.html" class="span-10">Communauté</a> <a
                                href="contacter.html" class="span-10">Contact</a> <span
                                class="span-10 no-marg no-pad">&nbsp;</span> <span
                                class="span-10 no-marg no-pad">&nbsp;</span>
                            </div>
                        </div>
                    </div>
                    <div class="flex-c comfortaa f11pt grey-1">
                        <div class="left">
                            <a href="index.html"><img src="../image/logo.png"
                                class="logo"></a>
                            </div>
                            <div class="right">Tous droits réservés - 2018®</div>
                        </div>
                    </footer>
                </div>
            </div>
            <!-- /container -->
            <nav class="outer-nav left vertical rubik ">
                <a href="index.php"><i
                    class="material-icons md-28">&#xE88A;</i>Accueil</a><a
                    href="../a-propos.html" class="md-news"><i
                    class="material-icons md-22">face</i>Notre concept</a>  <a
                    href="../avis.html" class="md-upload"><i
                    class="material-icons md-22">&#xE80D;</i>Meilleurs restos</a> <a
                    href="../contacter.html" class="md-star"><i
                    class="material-icons md-22">&#xE42D;</i>Contacter</a>
                    <a href="../mob-connexion.php" class="md-image" title="Votre Compte"><i class="material-icons md-24">&#xE853;</i>Compte</a>
                </nav>
                <script src="../js/classie.js"></script>
                <script src="../js/menu.js"></script>
            </div>
            <!-- /perspective -->
        </div>

    </body>

    </html>