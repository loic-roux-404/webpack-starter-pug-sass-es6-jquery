/// <reference path='ship.ts'/>
/// <reference path='monster.ts'/>
/// <reference path='laser.ts'/>
/// <reference path='laserM.ts'/>
var Level = /** @class */ (function () {
    //private stateLevel : number;
    function Level(canvas, context, nb_m, lifes) {
        var _this = this;
        this.canvas = canvas;
        this.context = context;
        this.life = lifes; // Au debut... le joureur a 2 vies, définit dans game
        this.monsters = [];
        this.nbM = nb_m;
        for (var i = 0; i < (nb_m * 2); i++) {
            this.monsters.push(new Monster(this.canvas, this.context, i));
        }
        var randomTime = Math.round((Math.random() + 170) * (20 / nb_m));
        if (randomTime == 0) {
            randomTime = Math.round((Math.random() + 170) * (20 / nb_m));
        }
        setInterval(function () {
            _this.monsterShot();
            console.log('tir');
        }, randomTime);
        //create ship
        this.ship = new Ship(this.canvas, this.context);
        //création laser ship et monster
        this.laser = [];
        this.laserM = [];
        //évenemnts
        this.hitShip = false;
        this.score = 0;
        this.state = "partie en cours";
    }
    Level.prototype.updateObjects = function () {
        //Etape collision, verifier collision monstre pour passer au niveau suivant et collision ship pour ses vies
        this.checkCollision();
        var new_monsters = [];
        //console.log(new_monsters);
        ////////////////////////////////////
        for (var k = 0; k < this.monsters.length; k++) { //on vérifie le nombre de monstres qu'on a ajouter précedemment en fonction du niveau
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
        var new_lasers = [];
        for (var k = 0; k < this.laser.length; k++) {
            this.laser[k].move();
            // Etape suppression laser
            if (!this.laser[k].to_delete) {
                new_lasers.push(this.laser[k]);
            }
        }
        // Etape suppression laser
        this.laser = new_lasers;
        //laser monstres
        var new_lasersM = [];
        for (var k = 0; k < this.laserM.length; k++) {
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
    }; //end method update object
    Level.prototype.drawObjects = function () {
        for (var k = 0; k < this.monsters.length; k++) {
            this.monsters[k].drawObject();
        }
        //dessin vaisseau
        this.ship.drawObject();
        // dessin Laser ship
        for (var k = 0; k < this.laser.length; k++) {
            this.laser[k].drawObject();
        }
        // dessin Laser monster
        for (var k = 0; k < this.laserM.length; k++) {
            this.laserM[k].drawObject();
        }
    };
    Level.prototype.keyRight = function () {
        ////////////////////////////////////
        // Etape Hero - on bouge
        ////////////////////////////////////
        this.ship.moveRight();
        ////////////////////////////////////
    };
    Level.prototype.keyLeft = function () {
        ////////////////////////////////////
        // Etape ship uniquement deplacement hauche droite
        ////////////////////////////////////
        this.ship.moveLeft();
        ////////////////////////////////////
    };
    Level.prototype.keySpace = function () {
        // Etape Laser ship
        var pos = this.ship.getPosition();
        this.laser.push(new Laser(this.canvas, this.context, pos.x, pos.y));
    };
    Level.prototype.monsterShot = function () {
        for (var j = 0; j < this.monsters.length; j++) {
            var posM = this.monsters[j].getPosition();
            this.laserM.push(new Lasermonster(this.canvas, this.context, posM.x, posM.y));
        }
    };
    //verification collision laser pos = element pos
    Level.prototype.checkCollision = function () {
        for (var k = 0; k < this.monsters.length; k++) {
            if (!this.monsters[k].to_delete) {
                for (var l = 0; l < this.laser.length; l++) {
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
        for (var l = 0; l < this.laserM.length; l++) {
            if (!this.laser[l].to_deleteM) {
                if (this.laserM[l].collision(this.ship)) {
                    //this.hitShip = true;
                    this.life--;
                }
            }
        }
    };
    Level.prototype.checkVictory = function () {
        if (this.life == 0) {
            this.state = "Perdu vaisseau détruit";
        }
        else {
            if (this.monsters.length === 0) { //si tout les monstres detruits on gagne
                this.state = "Gagne";
                console.log("gagné");
            }
        }
    };
    Level.prototype.getLevelScore = function () {
        ////////////////////////////////////
        // Etape Victoire
        ////////////////////////////////////
        return this.score;
        ////////////////////////////////////
        return 0; // A changer en temps voulu
    };
    Level.prototype.getLifes = function () {
        console.log(this.life);
        return this.life;
        //return 2;
    };
    Level.prototype.getLevelState = function () {
        ////////////////////////////////////
        // Etape Victoire
        ////////////////////////////////////
        return this.state;
        ////////////////////////////////////
        return "En cours"; // TODO
    };
    return Level;
}()); //end class level
