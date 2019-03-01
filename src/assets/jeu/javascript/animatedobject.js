/// <reference path='./vector.ts'/>
var AnimatedObject = /** @class */ (function () {
    //appel dans level
    function AnimatedObject(canvas, context, src) {
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
    AnimatedObject.prototype.setSize = function (w, h) {
        this.width = w;
        this.height = h;
    };
    //méthode pour définir la position de l'objet
    AnimatedObject.prototype.setPosition = function (x, y) {
        //console.log(x+'-'+y);
        if (this.pos == null) {
            this.pos = new Vector(x, y);
        }
        else {
            this.pos.setValues(x, y);
        }
    };
    //méthode pour définir la direction de l'objet
    AnimatedObject.prototype.setDirection = function (x, y) {
        //console.log(x);
        if (this.dir == null) {
            this.dir = new Vector(x, y); //Vector a une valeur x et y qui sera définit fixement selon le type d'objet
        }
        else {
            this.dir.setValues(x, y);
        }
    };
    //déplacement horizontal des monstres, person
    // Etape mouvoir un objet
    ////////////////////////////////////
    AnimatedObject.prototype.move = function (update_dir) {
        if (update_dir === void 0) { update_dir = false; }
        this.pos.addToX(this.dir.x * this.speed);
        this.pos.addToY(this.dir.y * this.speed);
        var newX = this.pos.x;
        var newDirX = this.dir.x;
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
        var newY = this.pos.y;
        var newDirY = this.dir.y;
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
    };
    Object.defineProperty(AnimatedObject.prototype, "to_delete", {
        get: function () {
            return this._to_delete;
        },
        // Etape suppression des différents laser
        set: function (val) {
            this._to_delete = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AnimatedObject.prototype, "to_deleteM", {
        get: function () {
            return this._to_deleteM;
        },
        ////////
        set: function (val) {
            this._to_deleteM = val;
        },
        enumerable: true,
        configurable: true
    });
    //collision
    AnimatedObject.prototype.collision = function (other) {
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
    };
    AnimatedObject.prototype.drawObject = function () {
        this.context.drawImage(this.img, // image a afficher
        0, 0, // rect A, coin haut gauche
        this.width, this.height, // rect A, taille
        this.pos.x, this.pos.y, // rect B, coin haut gauche
        this.width, this.height); // rect B, taille
    };
    return AnimatedObject;
}());
