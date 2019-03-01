/// <reference path='animatedobject.ts'/>

class Lasermonster extends AnimatedObject{
	// Etape Laser du vaisseau
	constructor(canvas : HTMLCanvasElement,
		context : CanvasRenderingContext2D,
		x : number, y : number) {
		super(canvas, context, "./images/laserM.png");

		this.setSize(20, 24);

			this.setPosition(x + this.width, y - this.height);

			//this.dir = new Vector(x + this.width,y + this.height);
			this.setDirection(0, 1);//le vaisseau tire sur les monstres en haut

		this.speed = 10;

		console.log(this.pos);
		console.log(this.dir);
	}

	public move() {
		super.move(false);

		////////////////////////////////////
		// Etape suppression laser
		////////////////////////////////////
			if (this.pos.y <= 0) {
				this.to_delete = true;
			}

			if (this.pos.y >= this.canvas.height - this.height) {
					this.to_delete = true;
				}
				////////////////////////////////////
			}

			////////////////////////////////////

			////////////////////////////////////
		}

