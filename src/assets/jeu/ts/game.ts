/// <reference path='level.ts'/>

class Game {
	// Attributs utiles pour l'affichage
	private canvas : HTMLCanvasElement;
	private context : CanvasRenderingContext2D;

	// Attribut representant l'image de fond
	private background : HTMLImageElement;

	// Attributs gerant l'avancement du joueur
	private score : number;
	private niveau : number;

	private life : number;
	private level : Level;

	constructor(fps : number) {
		console.log("Initialisation du jeu");

		// Initialisation des variables d'affichage
		this.canvas = <HTMLCanvasElement> document.getElementById("space"); // Recupere l'element du HTML avec l'identifiant "game"
		this.canvas.width = 512; // Specifie la largeur de l'element, ici 512 pixels
		this.canvas.height = 480; // Specifie la hauteur de l'element, ici 480 pixels
		this.context = this.canvas.getContext('2d'); // Charge le context d'affichage du canvas

		// Initialisation de l'image de fond
		this.background = new Image(); // La classe "Image" est une classe deja existante
		this.background.src = "./images/background.png"; // Specifie le chemin de l'image a partir de index.html ("./" signifie le repertoire courant)

		// Initialisation des variables gerant l'avancement du joueur
		this.score = 0; // Au debut... pas de points
		this.niveau = 1; // Au debut... on commence au niveau 1
		this.life = 2;



		this.registerKeyPress();//écoute du clavier

		setInterval(() => { this.loop() }, 1000 / fps);
	}


	private registerKeyPress(){
		console.log("Ecoute des evenements claviers");
		// Lorsque l'element "<body></body>" de la page capture une touche enfoncee (keydown),
		// nous demandons au system d'appeler la methode "keyDetected()" avec en argument le code
		// de la touche.
		// Exemple d'autre type d'evenement : 'keyup'
		document.body.addEventListener('keydown', (e: KeyboardEvent) => {this.keyDetected(e.keyCode)});
	}



	private keyDetected(keycode : number) {
		console.log('key_detect');
		if (this.level != null) {
			// Si le niveau est non null alors, le joueur est en train de jouer.
			// Nous allons donc effectuer des actions specifiques pour les fleches
			// et la barre d'espace
			if (keycode == 39) {
				console.log("   -> touche 'droite'");
				// Une fleche droite en cours de jeu, et nous appelons la methode
				// du niveau qui gere la fleche droite
				this.level.keyRight();
			} else if (keycode == 37) {
				console.log("   -> touche 'gauche'")
				// Une fleche gauche en cours de jeu, et nous appelons la methode
				// du niveau qui gere la fleche gauche
				this.level.keyLeft();
			} 
			else if (keycode == 32) {
				// Une touche espace en cours de jeu, et nous appelons la methode
				// du niveau qui gere la barre espace
				console.log("   -> touche 'espace'")
				this.level.keySpace();
			}
		} 
		else {
			// Sinon le niveau est null alors, le joueur est dans le menu.
			// Pour commencer un niveau le joueur doit appuyer sur la touche entree
			if (keycode == 13) {
				console.log("   -> touche 'entree'")
				this.startLevel();
			}
		}
	}

	private startLevel(){
		console.log("Creation du niveau");
		// Creation de l'objet niveau
		this.level = new Level(this.canvas, this.context, this.niveau,this.life);
	}

	private loop(){
		this.initFrame();
        if (this.level != null) {
            // Si le niveau est non null alors, le joueur est en train de jouer.
            // Nous allons donc effectuer une mise a jour des objets a dessiner
            // (maj des positions, de l'etat du niveau, etc) ...
            this.level.updateObjects();
            // ... et une fois mise a jour nous allons les dessiner
            this.level.drawObjects();

            // Ensuite nous verifions l'etat du niveau
            // en on prepare le prochaine appel a la mnethode "loop"
            if (this.level.getLevelState() == "Gagne") {
                // s'il est gagne, on revient au menu et on prepare le niveau suivant
                this.nextLevel();
            } else if (this.level.getLevelState() == "Perdu") {
                // s'il est perdu, on revient au menu et on re-initialise le niveau
                this.resetLevel();
            }
        } else {
            // Sinon le niveau est null alors, le joueur est dans le menu.
            // Nous affichons donc les instructions pour commencer au niveau suivant
            this.addInstructions();
        }
        // dans tous les cas, nous affichons le niveau courant, le score courant et le nombre de parties perdues
        this.addInformation();
    }

	private initFrame() {
		this.clearCanvas();
		this.drawBackground();
	}

	private clearCanvas() {
		// Cette ligne efface tout ce qui a ete dessine sur le canvas (le rectangle du canvas devient blanc par defaut)
		this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}

	private drawBackground() {
		// Cette ligne permet de dessiner l'image de fond dans le canvas
		this.context.drawImage(this.background, 0, 0);    
	}

	private addInstructions() {
		// Affichage des instructions pour commencer au niveau suivant
		// ... en blanc
		this.context.fillStyle = "#fafafa";
		// ... en Arial police 27
		this.context.font = "22px Arial";

		this.context.fillText("Niveau "+this.niveau,150,210); 
		this.context.fillText("Appuyer sur Entree pour commencer !",65,250); 
	}

	private addInformation() {
		// Affichage des informations sur la session du joueur
		// ... en blanc fafafa
		this.context.fillStyle = "#fafafa";
		// ... en Arial police 27
		this.context.font = "15px Arial";

		this.context.fillText("Vies restantes: "+this.life,20,40);

		this.context.fillText("Score : " + this.score,20,440);
		this.context.fillText("Niveau : " + this.niveau,20,460);
	}

	private nextLevel() {
		// Preparation du prochain niveau
		console.log("Initialisation du niveau suivant");

		// on passe au niveau suivant
		// (x++  equivalent a x=x+1)
		this.niveau++;
		// on ajoute le score du niveau au score courant
		this.score += this.level.getLevelScore();

		// on precise que le joueur n'est plus dans le niveau
		this.level = null;



	}
	private resetLevel() {
		// Re-initialisation du niveau courant
		console.log("Re-initialisation du niveau courant");

		// on precise que le joueur n'est plus dans le niveau
		this.level = null;
		//this.life = 2;


		// Comme le joueur a perdu le niveau courant
		// on augmente le nombre de parties perdues de 1
		// (x++  equivalent a x=x+1)
		

	}

}//fin classe game

// Le debut de notre programme ne s'effectuera que lorsque la page html
// aura ete entierement chargee
window.onload = function() {
	console.log("Initialisation de la page");
	// Creation du jeu dont le rafraichissement s'effectuera 30 fois par seconde
	let jeu = new Game(30);
};

