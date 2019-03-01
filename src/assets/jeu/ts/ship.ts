/// <reference path='vector.ts'/>
/// <reference path='animatedobject.ts'/>


class Transition {

} 


class Ship extends AnimatedObject{

	////////////////////////////////////
	// Etape Laser
	////////////////////////////////////
	//public laser_top: boolean;

	private sprite_pos : Vector;

	constructor(canvas : HTMLCanvasElement,
		context : CanvasRenderingContext2D) {
		super(canvas, context, "./images/hero.png");

		this.setSize(55, 22);

		this.setPosition(256,420);//apparait au milieu en bas

		this.speed = 9;

		this.dir = new Vector(1,0);


	}

	public drawObject() {
		this.setSpritePosition(new Vector(0,0));
		super.drawObject();//on dessine simplement l'objet pas de multisprites
	}


	////////////////////////////////////

	////////////////////////////////////
	// Etape Hero - on bouge
	////////////////////////////////////
	public moveRight() {
		////////////////////////////////////

		this.dir.setValues(1, 0);
		this.move();

	}

	public moveLeft() {
		////////////////////////////////////

		this.dir.setValues(-1, 0);
		this.move();

	}


	// Etape Laser
	////////////////////////////////////
	public getPosition() : Vector {
		return this.pos;
	}
	protected setSpritePosition(pos : Vector) {
		this.sprite_pos = pos;
	}


}