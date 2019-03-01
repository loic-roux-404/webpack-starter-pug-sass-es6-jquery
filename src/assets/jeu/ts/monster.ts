/// <reference path='animatedobject.ts'/>

class Monster extends AnimatedObject {

    // Etape Monstre


    constructor(canvas : HTMLCanvasElement,
        context : CanvasRenderingContext2D,nbMonster:number) {
        super(canvas, context, "./images/monster1.png");

        this.setSize(42, 32);

        //console.log(this.pos);

        //if(this.pos.x == null){

            this.setPosition(296,30);//doute sur les changements de positions a voir test
            //}
            // else{
                //     var pushVal = this.pos.x + 33;//3 decalage entre chaque monstres
                //     console.log('spacing monsters'+pushVal)
                //     this.setPosition(pushVal,460);
                // }
                console.log(this);
                for (var i = 0; i<nbMonster; ++i) {

                    var pushVal = this.pos.x + 45;//3 decalage entre chaque monstres
                    this.setPosition(pushVal,30);
                }
            


            let dirX = 1;
            if (dirX == 0) {
                dirX = -1;
            }

            this.setDirection(dirX,0);

            this.speed = 2;
        }

        public move() {
            super.move(true);
        }



        // Etape Laser
        ////////////////////////////////////
        public getPosition() : Vector {
            return this.pos;
        }

    }

    //console.log(Monster);
