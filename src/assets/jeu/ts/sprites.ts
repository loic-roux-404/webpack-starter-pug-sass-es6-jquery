/// <reference path='vector.ts'/>
/// <reference path='animatedobject.ts'/>

class MultiSprites extends AnimatedObject {

    ////////////////////////////////////
    // Etape Multisprites
    ////////////////////////////////////
    private sprite_pos : Vector;

    constructor(canvas : HTMLCanvasElement,
                context : CanvasRenderingContext2D,
                src : string) {
        super(canvas, context, src);
        this.sprite_pos = null;
    }

    protected setSpritePosition(pos : Vector) {
        this.sprite_pos = pos;
    }

    public drawObject() {
        if (this.sprite_pos != null) {
            this.context.drawImage(this.img,
                                   this.sprite_pos.x, this.sprite_pos.y,
                                   this.width, this.heigth,
                                   this.pos.x, this.pos.y,
                                   this.width, this.heigth);
        }
    }
    ////////////////////////////////////
}