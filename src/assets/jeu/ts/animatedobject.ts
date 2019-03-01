/// <reference path='./vector.ts'/>


class AnimatedObject{

	protected canvas : HTMLCanvasElement;
	protected context : CanvasRenderingContext2D;

	protected img : HTMLImageElement;

	// Etape afficher un objet
	protected pos : Vector;
	protected dir : Vector;

	protected width : number;
	protected height : number;

	// Etape vitesse de deplacement de l'objet
	protected speed : number;

	// Etape suppression laser
	private _to_delete : boolean;
	//supp laser monstres
	private _to_deleteM : boolean;
	//appel dans level

	constructor(canvas: HTMLCanvasElement,context : CanvasRenderingContext2D,src:string){
		//crea canvas et son context
		this.canvas = canvas;
		this.context = context;

		//img qui correspond au sprites qu'on veut dessiner
		this.img = new Image();
		this.img.src = src;
		this.width = 0;
		this.height = 0;

		//variable position initialisées
		this.pos = null;
		this.dir = null;


		this.speed = 0;

		//suppression des différents types de lasers
		this._to_delete = null;
		this._to_deleteM = null;
	}

	public setSize(w:number,h:number){
		this.width = w;
		this.height = h;
	}

	//méthode pour définir la position de l'objet

	public setPosition(x:number,y:number){
		//console.log(x+'-'+y);
		if(this.pos==null){
			this.pos = new Vector(x,y)
		}
		else {
			this.pos.setValues(x,y);
		}
	}

	//méthode pour définir la direction de l'objet

	public setDirection(x:number,y:number){//ici des objets à l'horizontal
	//console.log(x);
	if(this.dir==null){
		this.dir = new Vector(x,y)//Vector a une valeur x et y qui sera définit fixement selon le type d'objet
	}
	else {
		this.dir.setValues(x,y);
	}
}     




//déplacement horizontal des monstres, person




// Etape mouvoir un objet
////////////////////////////////////
public move(update_dir : boolean = false) {
	this.pos.addToX(this.dir.x * this.speed);
	this.pos.addToY(this.dir.y * this.speed);

	let newX = this.pos.x;
	let newDirX = this.dir.x;
	if (newX > this.canvas.width - this.width) {
		newX = this.canvas.width - this.width;
		if (update_dir) {
			newDirX = this.dir.x * -1;
		}
	}
	if (newX < 0) {
		newX = 0;
		if (update_dir) {
			newDirX = this.dir.x * -1;
		}
	}

	let newY = this.pos.y
	let newDirY = this.dir.y;
	if (newY > this.canvas.height - this.height) {
		newY = this.canvas.height - this.height;
		if (update_dir) {
			newDirY = this.dir.y * -1;
		}
	}
	if (newY < 0) {
		newY = 0;
		if (update_dir) {
			newDirY = this.dir.y * -1;
		}
	}

	this.pos.setValues(newX, newY);
	this.dir.setValues(newDirX, newDirY);
}




// Etape suppression des différents laser
set to_delete(val : boolean) {
	this._to_delete = val;
}

get to_delete() : boolean {
	return this._to_delete;
}
////////

set to_deleteM(val : boolean) {
	this._to_deleteM = val;
}

get to_deleteM() : boolean {
	return this._to_deleteM;
}

//collision
    public collision(other : AnimatedObject) : boolean {
        // Coin haut gauche 
        if ((this.pos.x >= other.pos.x) && (this.pos.x <= other.pos.x + other.width)) {
            if ((this.pos.y >= other.pos.y) && (this.pos.y <= other.pos.y + other.height)) {
                return true;
            }
        }
        // Coin haut droit 
        if ((this.pos.x + this.width >= other.pos.x) && (this.pos.x + this.width <= other.pos.x + other.width)) {
            if ((this.pos.y >= other.pos.y) && (this.pos.y <= other.pos.y + other.height)) {
                return true;
            }
        }
        // Coin bas gauche 
        if ((this.pos.x >= other.pos.x) && (this.pos.x <= other.pos.x + other.width)) {
            if ((this.pos.y + this.height >= other.pos.y) && (this.pos.y + this.height <= other.pos.y + other.height)) {
                return true;
            }
        }
        // Coin bas droit 
        if ((this.pos.x + this.width >= other.pos.x) && (this.pos.x + this.width <= other.pos.x + other.width)) {
            if ((this.pos.y + this.height >= other.pos.y) && (this.pos.y + this.height <= other.pos.y + other.height)) {
                return true;
            }
        }

        return false;
    }
public drawObject() {
	this.context.drawImage(this.img,// image a afficher
		0, 0,                     // rect A, coin haut gauche
		this.width, this.height,  // rect A, taille
		this.pos.x, this.pos.y,   // rect B, coin haut gauche
		this.width, this.height); // rect B, taille
}





}