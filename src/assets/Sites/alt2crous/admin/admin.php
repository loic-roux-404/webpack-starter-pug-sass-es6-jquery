
<!DOCTYPE html>
<html lang="fr" class="no-js">

<head>
<meta charset="UTF-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>ALT 2 CROUS - Admin</title>
<meta name="author" content="Loic Roux" />
<link rel="favico" href="../image/logo.png">
<link rel="shortcut icon" href="../image/logo.png">
<link rel="stylesheet" type="text/css" href="../css/fonts.css" />
<link rel="stylesheet" type="text/css" href="../css/html5-deco.css" />
<link rel="stylesheet" type="text/css" href="../css/component.css" />
<link rel="stylesheet" type="text/css" href="../css/style-grid.css" />
<link rel="stylesheet" type="text/css" href="../css/functions.css" />
<link rel="stylesheet" type="text/css" href="../css/form.css" />
<link rel="stylesheet" type="text/css" href="admin.css" />

<!--material icons add-->
<link rel="stylesheet"
	href="https://fonts.googleapis.com/icon?family=Material+Icons">
<!-- Add jquery library -->
<script
	src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<!-- csstransforms3d-->
<script src="../js/modernizr.custom.25376.js"></script>
<!--  my scripts-->
<script src="../js/jquery.js"></script>
<!-- WISIWYG-->
<link rel="stylesheet" href="//cdn.quilljs.com/1.3.6/quill.snow.css">

<script src="//cdn.quilljs.com/1.3.6/quill.js"></script>




</head>

<body class="mdc-typography">

	<div id="perspective" class="perspective effect-airbnb">
		<div class="container">
			<div class="wrapper">
				<!-- top Navigation -->


				<nav class="main clearfix comfortaa f400 f13pt fixed">
					<nav class="nav-laptop">
						<a href="../index.php" class="md-logo fix-left main-logo"
							title="Aller à l'accueil">Alt2Crous</a> <a
							href="../a-propos.html" class="md-news"><i
							class="material-icons md-22">face</i>Notre concept</a> <a
							href="../proximite.html" class="md-image"><i
							class="material-icons md-22">&#xE80E;</i>&Agrave; proximité</a> <a
							href="../avis.html" class="md-upload"><i
							class="material-icons md-22">&#xE80D;</i>Meilleurs restos</a> <a
							href="../contacter.html" class="md-star"><i
							class="material-icons md-22">&#xE42D;</i>Contacter</a>
					</nav>
					<div id="mobile-nav">

						<button id="showMenu">
							<i class="material-icons md-36">&#xE5D2;</i>
						</button>
						<a href="index.html" class="md-logo fix-left mobile-logo"
							title="Aller à l'accueil">Alt2Crous</a>

					</div>


				</nav>
				<div class="nav-height"></div>

				<div class="global admin">
					<section class="block">
						<article class="article-1 grey-3">
							<div class="container1 lato f300 f13pt">


								<section class="span-10 span-form content center gutter ">
									<article id="admin-resto" class="container1 no-pad no-marg style-col">

                                      
										<div class="span-5">

											<h1 class="h-26pt comfortaa f400">Affichage des restaurants</h1>
											<br> <br>
											<?php
            
            // Connexion a la BD
            require_once '../php/login.php';
            $conn = new mysqli($hn, $un, $pw, $db);
            if ($conn->connect_error)
                die($conn->connect_error);
            
            $query = 'SELECT * FROM RESTAURANTS ';
            $result = $conn->query($query);
            if (! $result)
                die($conn->error);
            // afficher
            
            $rows = $result->num_rows;
            for ($j = 0; $j < $rows; $j ++) {
                $result->data_seek($j);
                // recherche la j-ème entrée
                // ‘fetch_array’ retourne un tableau assoc. pour cette entrée
                $row = $result->fetch_array(MYSQLI_ASSOC);
                
                ?>
											<table class="span-10" cellpadding="8px">
												<tr>
													<th colspan="1">ID Resto</th>
													<th colspan="4">Nom</th>
													<th colspan="2">Type</th>
													<th colspan="1">prix</th>


												</tr>
												<?php
                
                echo "<tr><td colspan=\"1\">" . $row['id_restaurant'] . "</td>";
                echo "<td colspan=\"4\">" . $row['nom_restaurant'] . "</td>";
                echo "<td colspan=\"2\">" . $row['type_restaurant'] . "</td>";
                echo "<td colspan=\"1\">" . $row['prix_restaurant'] . "</td></tr>";
                
                ?>
												<tr>
													<th colspan="4">Localisation</th>
													<th colspan="4">Description</th>
												</tr>
												<?php
                echo "<tr><td colspan=\"4\">" . $row['loc_restaurant'] . "</td>";
                echo "<td colspan=\"4\">" . $row['equilibre_restaurant'] . "</td></tr>";
                
                  ?>
                  
                <th colspan="8">Image</th>
                <tr>
                	<td colspan="8"><?php echo '<img src="../image/upload-images/'.$row['img_restaurant'].'">'?></td>
                </tr>
                
                
              
                <?php
            }
            
            // Deconnexion a la BD
            $conn->close();
            
            ?>
											</table>

										</div>
										<div class="span-5">

											<h1 class="h-26pt comfortaa f400 center">Gestion des
												restaurant</h1>
											<br>
											<h1 class="f16pt comfortaa f300 center">Supprimer un
												restaurant</h1>
											<form method="post" action="admin-functions.php">
												<input type="text" name="nom_restau_suppr"
													id="nom_restau_suppr"
													placeholder="Suppression par nom du restaurant" /> <input
													type="text" name="id_restau_suppr" id="id_restau_suppr"
													placeholder="Suppression par ID du restaurant" /> <input
													type="submit" id="submit-button" class="center">
												<!--<textarea id="editor"></textarea>-->
											</form>
											<br> <br>
											<h1 class="f16pt comfortaa f300 center">Ajouter un
												restaurant</h1>
											<form class="contact-form center" method="post"
												action="./insert-resto.php" enctype="multipart/form-data">

												<article class="container1 form-article">
													<article class="container1 form-align">
														<section id="fsec-1" class="span-10">
															<div class="row-right">
																<input type="text" name="nom_restaurant"
																	id="nom_restaurant" required="required"
																	placeholder="Nom resto" />
															</div>
														</section>
														<section id="fsec-2" class="span-10">
															<div class="row-right">
																<input type="text" name="type_restaurant"
																	id="type_restaurant" placeholder="Type resto">
															</div>
														</section>

														<section id="fsec-3" class="span-10">
															<div class="row-right">
																<input type="text" name="loc_restaurant"
																	id="loc_restaurant" required="required"
																	placeholder="Lieu d'etude proche">
															</div>
														</section>

														<section id="fsec-4" class="span-10">
															<div class="row-right">
																<input type="text" name="prix_restaurant"
																	id="prix_restaurant" required="required"
																	placeholder="Prix" />
															</div>
														</section>
														<section id="fsec-5" class="span-10">
															<div class="row-right">
																<textarea name="equilibre_restaurant"
																	id="equilibre_restaurant" required="required"
																	placeholder="Description restau"></textarea>
															</div>
														</section>
					      								<section id="fsec-7" class="span-10">
															<div class="row-right">
																<input type="file" name="img_restaurant"
																	id="img_restaurant"/>
															</div>
														</section>
														

														<section id="fsec-8" class="span-10">
															<div class="center">
																<input type="hidden" name="id_restaurant"
																	id="id_restaurant" value="" /> <input type="submit"
																	value="Valider" id="submit-button" class="center" />
															</div>
														</section>

													</article>

												</article>
											</form>

											<h1 class="f16pt comfortaa f300 center">Modification des
												restaurants</h1>



											<form class="contact-form center" method="post"
												action="./update-resto.php" enctype="multipart/form-data">

												<article class="container1 form-article">
													<article class="container1 form-align">
														<section id="fsec-0" class="span-10">
															<div class="row-right">
																<input type="number" name="id_restaurant_modif"
																	id="id_restaurant_modif" required="required"
																	placeholder="ID Restaurant à modifier" />
															</div>
														</section>
														<section id="fsec-1" class="span-10">
															<div class="row-right">
																<input type="text" name="nom_restaurant_modif"
																	id="nom_restaurant_modif" placeholder="Nom resto modif" />
															</div>
														</section>
														<section id="fsec-2" class="span-10">
															<div class="row-right">
																<input type="text" name="type_restaurant_modif"
																	id="type_restaurant_modif"
																	placeholder="Type resto modif">
															</div>
														</section>

														<section id="fsec-3" class="span-10">
															<div class="row-right">
																<input type="text" name="loc_restaurant_modif"
																	id="loc_restaurant_modif"
																	placeholder="Lieu d'etude proche modif">
															</div>
														</section>

														<section id="fsec-4" class="span-10">
															<div class="row-right">
																<input type="text" name="prix_restaurant_modif"
																	id="prix_restaurant_modif" placeholder="Prix modif" />
															</div>
														</section>
														<section id="fsec-5" class="span-10">
															<div class="row-right">
																<textarea name="equilibre_restaurant_modif"
																	id="equilibre_restaurant_modif"
																	placeholder="Description restaurant modif"></textarea>
															</div>
														</section>
														<section id="fsec-5" class="span-10">
															<div class="row-right">
																<input type="file" accept=".png, .jpg, .jpeg, .gif" 
																name="img_restaurant_modif"/>
															</div>
														</section>
														<section id="fsec-6" class="span-10 center">
															<div class="row-right">
																<input type="submit" value="Valider" id="submit-button" class="center" />
															</div>
														</section>

													</article>

												</article>
											</form>
										</div>
									</article>
									<article class="container1 no-pad no-marg">
										<!--  second span-5 end -->









										<div class="span-10 span-form style-col">
											<div class="container1 no-pad no-marg">

												<div class="span-10">
													<br> <br>
													<h1 class="h-26pt comfortaa f400">Gestion des
														formulaires</h1>
														<br><br>
													<?php
        require_once '../php/login.php';
        $conn = new mysqli($hn, $un, $pw, $db);
        if ($conn->connect_error)
            die($conn->connect_error);
        
        $query = 'SELECT * FROM CONTACT';
        
        $result = $conn->query($query);
        if (! $result)
            die($conn->error);
        $rows = $result->num_rows;
        
        for ($j = 0; $j < $rows; $j ++) {
            $result->data_seek($j);
            
            $row = $result->fetch_array(MYSQLI_ASSOC);
            
            ?>
													<table class="span-10 center" cellpadding="8px">
														<tr>
															<th>ID</th>
															<th>Nom</th>
															<th>Prénom</th>
															<th>Âge</th>
															<th>Mail</th>
															<th>Lieu d'étude</th>
														</tr>

														<?php
            
            echo "<tr><td>" . $row['id_contact'] . "</td>";
            echo "<td>" . $row['nom_contact'] . "</td>";
            echo "<td>" . $row['prenom_contact'] . "</td>";
            echo "<td>" . $row['age_contact'] . "</td>";
            echo "<td>" . $row['mail_contact'] . "</td>";
            echo "<td>" . $row['lieuetu_contact'] . "</td></tr> ";
            
            ?>
														<tr>
															<th colspan="5">Commentaire</th>
														<th rowspan="0"><a href="delete.php?idDel=<?php echo $row['id_contact']; ?>">Supprimer</a></th>
														</tr>
														<?php
            echo "<tr><td colspan=\"5\">" . $row['remarque_contact'] . "</td>";
                                                        ?>
            
            </tr>
            <?php
        }
        
        // Deconnexion a la BD
        $conn->close();
        
        ?>


													</table>
												</div>
												<!-- span-5 end -->
											</div>
											</article>
											<!-- container end -->
										</div>
										<!-- span-10 end -->
									</article>
									<!-- second span-5-->
								</section>
								<!-- container1-->


							</div>
							<!-- global end -->
						</article>
					</section>
				</div>




			</div>
			<!-- /main -->
			<footer>
				<div class="flex-c comfortaa 400 f12pt grey-1">
					<div class="container1 no-pad flex-b cat-footer">

						<div class="container1 span-2 no-pad">
							<span class="span-10 no-marg no-pad mentions raleway f16pt f500">Divers</span>
							<a href="../footer/mentions.html" class=" span-10">Mentions
								légales</a> <a href="a-propos.html" class=" span-10">&Agrave;
								propos</a> <a href="admin.php" class="span-10">Administration </a> <span
								class="span-10 no-marg no-pad blank">&nbsp;</span> <span
								class="span-10 no-marg no-pad blank">&nbsp;</span>
						</div>
						<div class="container1 span-2 no-pad">
							<span class="span-10 no-marg no-pad mentions raleway f16pt f500">Plan
								du site</span> <a href="../index.html" class="span-10">Accueil</a> <a
								href="../a-propos.html" class="span-10">Notre concept</a> <a
								href="../proximite.html" class="span-10">&Agrave; Proximité</a>
							<a href="../avis.html" class="span-10">Meilleurs réstaurants</a>

						</div>


						<div class="container1 span-2 no-pad">
							<span class="span-10 no-marg no-pad mentions raleway f16pt f600">Aide</span>
							<a href="#" class="span-10">Tutoriels</a> <a
								href="../footer/tuto.html" class="span-10">Communauté</a> <a
								href="../contacter.html" class="span-10">Contact</a> <span
								class="span-10 no-marg no-pad">&nbsp;</span> <span
								class="span-10 no-marg no-pad">&nbsp;</span>
						</div>

					</div>

				</div>
				<div class="flex-c comfortaa f11pt grey-1">
					<div class="span-7">
						<a href="index.html"><img src="../image/logo.png" class="logo"></a>
					</div>
					<div class="span-7">Tous droits réservés - 2018®</div>

				</div>
			</footer>
		</div>

	</div>

	<!-- /container -->
	<nav class="outer-nav left vertical rubik ">
		<a href="../index.php"><i class="material-icons md-28">&#xE88A;</i>Accueil</a><a
			href="../a-propos.html" class="md-news"><i
			class="material-icons md-22">face</i>Notre concept</a> <a
			href="../services.html" class="md-image"><i
			class="material-icons md-22">&#xE80E;</i>&Agrave; proximité</a> <a
			href="../portfolio.html" class="md-upload"><i
			class="material-icons md-22">&#xE80D;</i>Meilleurs restos</a> <a
			href="../contacter.html" class="md-star"><i
			class="material-icons md-22">&#xE42D;</i>Contacter</a>
	</nav>
	<script src="../js/classie.js"></script>
	<script src="../js/menu.js"></script>



	</div>
	<!-- /perspective -->


</body>

</html>
