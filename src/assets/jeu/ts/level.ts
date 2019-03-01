/// <reference path='ship.ts'/>
/// <reference path='monster.ts'/>
/// <reference path='laser.ts'/>
/// <reference path='laserM.ts'/>



class Level{
	private canvas : HTMLCanvasElement;
	private context : CanvasRenderingContext2D;

	//création de monstres
	private monsters : Monster[];

	//création vaisseau
	private ship : Ship;

	//création laser
	private laser : Laser[];
	private laserM : Lasermonster[];//laser monstres

	//Les collisions 
	private hitShip : boolean;
	private score : number;

	//VIE JOUEUR
	private life: number;

	//nb monster{
	private nbM :number;



	//Etat du jeu, vicoire niveau suivant, défaite reload
	private state : string;
	//private stateLevel : number;


	constructor(canvas:HTMLCanvasElement,
		context:CanvasRenderingContext2D,
		nb_m:number,lifes:number)//nb_m = niveau en paramètre, seulement 2 niveaux
	{

		this.canvas = canvas;
		this.context = context;


		this.life = lifes; // Au debut... le joureur a 2 vies, définit dans game



		this.monsters=[];

		this.nbM = nb_m;


		for(let i=0;i<(nb_m*2);i++){
			this.monsters.push(new Monster(this.canvas, this.context,i));	

		}

		let randomTime = Math.round((Math.random()+170)*(20/nb_m));
		if (randomTime == 0) {
			randomTime =  Math.round((Math.random()+170)*(20/nb_m));
		}	

		setInterval(() => { this.monsterShot();
			console.log('tir'); },randomTime); 


		//create ship
		this.ship = new Ship(this.canvas, this.context);


		//création laser ship et monster

		this.laser = [];
		this.laserM = [];

		//évenemnts
		this.hitShip = false;
		this.score = 0;


		this.state="partie en cours";
	}

	public updateObjects() {
		//Etape collision, verifier collision monstre pour passer au niveau suivant et collision ship pour ses vies
		this.checkCollision();
		let new_monsters : Monster[] = [];
		//console.log(new_monsters);
		////////////////////////////////////
		for (let k = 0; k < this.monsters.length; k++) {//on vérifie le nombre de monstres qu'on a ajouter précedemment en fonction du niveau
			this.monsters[k].move();

		// Etape collision
		if (!this.monsters[k].to_delete) {
			new_monsters.push(this.monsters[k]);
		}
	}
	////////////////////////////////////
	this.monsters = new_monsters;

	//LASER suppression apres collision, deux sorte de lasers, hérité des classes enfant laser
	//laser hero
	let new_lasers : Laser[] = [];


	for (let k = 0; k < this.laser.length; k++) {
		this.laser[k].move();

		// Etape suppression laser
		if (!this.laser[k].to_delete) {
			new_lasers.push(this.laser[k]);
		}
	}
	// Etape suppression laser
	this.laser = new_lasers;

	//laser monstres
	let new_lasersM : Lasermonster[] = [];

	for (let k = 0; k < this.laserM.length; k++) {
		this.laserM[k].move();

		////////////////////////////////////
		// Etape suppression laser
		////////////////////////////////////
		if (!this.laserM[k].to_delete) {
			new_lasersM.push(this.laserM[k]);
		}

	}
	// Etape suppression laser monstre
	this.laserM = new_lasersM;


	this.checkVictory();






}//end method update object


public drawObjects() {//méthode mère qui s'ocuuper de tout les objet background (hero,monstres...)

for (let k = 0; k < this.monsters.length; k++) {
	this.monsters[k].drawObject();
}
//dessin vaisseau
this.ship.drawObject();

// dessin Laser ship
for (let k = 0; k < this.laser.length; k++) {
	this.laser[k].drawObject();
}
// dessin Laser monster
for (let k = 0; k < this.laserM.length; k++) {
	this.laserM[k].drawObject();
}




}



public keyRight() {
	////////////////////////////////////
	// Etape Hero - on bouge
	////////////////////////////////////
	this.ship.moveRight();
	////////////////////////////////////
}

public keyLeft() {
	////////////////////////////////////
	// Etape ship uniquement deplacement hauche droite
	////////////////////////////////////
	this.ship.moveLeft();
	////////////////////////////////////
}

public keySpace() {
	// Etape Laser ship
	let pos : Vector = this.ship.getPosition();
	this.laser.push(new Laser(this.canvas, this.context,
		pos.x, pos.y));
}


public monsterShot(){

	for (let j = 0; j < this.monsters.length;j++){
		let posM : Vector = this.monsters[j].getPosition();

		this.laserM.push(new Lasermonster(this.canvas, this.context,
			posM.x, posM.y));
	}
}



//verification collision laser pos = element pos
private checkCollision() {//hit monster
	for (let k = 0; k < this.monsters.length; k++) {
		if (!this.monsters[k].to_delete) {
			for (let l = 0; l < this.laser.length; l++) {
				if (!this.laser[l].to_delete) {
					if (this.laser[l].collision(this.monsters[k])) {
						this.monsters[k].to_delete = true;
						this.laser[l].to_delete = true;
						this.score++;
						break;
					}
				}
			}
		}
	}
	//ship collision
	for (let l = 0; l < this.laserM.length; l++) {
		if (!this.laser[l].to_deleteM) {
			if (this.laserM[l].collision(this.ship)) {
				//this.hitShip = true;
				this.life--;
			}
		}
	}
}
private checkVictory() {
	if (this.life == 0) {
		this.state = "Perdu vaisseau détruit";
	} else
	{ if (this.monsters.length === 0) {//si tout les monstres detruits on gagne
		this.state = "Gagne";
		console.log("gagné");

	}
}
}

public getLevelScore() : number {
	////////////////////////////////////
	// Etape Victoire
	////////////////////////////////////
	return this.score;

	////////////////////////////////////
	return 0; // A changer en temps voulu
}

public getLifes() : number{
		console.log(this.life)
		return this.life;
		//return 2;
	}

	public getLevelState() : string {
		////////////////////////////////////
		// Etape Victoire
		////////////////////////////////////
		return this.state;
		////////////////////////////////////
		return "En cours"; // TODO
	}






}//end class level









