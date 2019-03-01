/// <reference path='vector.ts'/>
/// <reference path='animatedobject.ts'/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Transition = /** @class */ (function () {
    function Transition() {
    }
    return Transition;
}());
var Ship = /** @class */ (function (_super) {
    __extends(Ship, _super);
    function Ship(canvas, context) {
        var _this = _super.call(this, canvas, context, "./images/hero.png") || this;
        _this.setSize(55, 22);
        _this.setPosition(256, 420); //apparait au milieu en bas
        _this.speed = 9;
        _this.dir = new Vector(1, 0);
        return _this;
    }
    Ship.prototype.drawObject = function () {
        this.setSpritePosition(new Vector(0, 0));
        _super.prototype.drawObject.call(this); //on dessine simplement l'objet pas de multisprites
    };
    ////////////////////////////////////
    ////////////////////////////////////
    // Etape Hero - on bouge
    ////////////////////////////////////
    Ship.prototype.moveRight = function () {
        ////////////////////////////////////
        this.dir.setValues(1, 0);
        this.move();
    };
    Ship.prototype.moveLeft = function () {
        ////////////////////////////////////
        this.dir.setValues(-1, 0);
        this.move();
    };
    // Etape Laser
    ////////////////////////////////////
    Ship.prototype.getPosition = function () {
        return this.pos;
    };
    Ship.prototype.setSpritePosition = function (pos) {
        this.sprite_pos = pos;
    };
    return Ship;
}(AnimatedObject));
