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
var Lasermonster = /** @class */ (function (_super) {
    __extends(Lasermonster, _super);
    // Etape Laser du vaisseau
    function Lasermonster(canvas, context, x, y) {
        var _this = _super.call(this, canvas, context, "./images/laserM.png") || this;
        _this.setSize(20, 24);
        _this.setPosition(x + _this.width, y - _this.height);
        //this.dir = new Vector(x + this.width,y + this.height);
        _this.setDirection(0, 1); //le vaisseau tire sur les monstres en haut
        _this.speed = 10;
        console.log(_this.pos);
        console.log(_this.dir);
        return _this;
    }
    Lasermonster.prototype.move = function () {
        _super.prototype.move.call(this, false);
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
    };
    return Lasermonster;
}(AnimatedObject));
