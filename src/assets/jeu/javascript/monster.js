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
var Monster = /** @class */ (function (_super) {
    __extends(Monster, _super);
    // Etape Monstre
    function Monster(canvas, context, nbMonster) {
        var _this = _super.call(this, canvas, context, "./images/monster1.png") || this;
        _this.setSize(42, 32);
        //console.log(this.pos);
        //if(this.pos.x == null){
        _this.setPosition(296, 30); //doute sur les changements de positions a voir test
        //}
        // else{
        //     var pushVal = this.pos.x + 33;//3 decalage entre chaque monstres
        //     console.log('spacing monsters'+pushVal)
        //     this.setPosition(pushVal,460);
        // }
        console.log(_this);
        for (var i = 0; i < nbMonster; ++i) {
            var pushVal = _this.pos.x + 45; //3 decalage entre chaque monstres
            _this.setPosition(pushVal, 30);
        }
        var dirX = 1;
        if (dirX == 0) {
            dirX = -1;
        }
        _this.setDirection(dirX, 0);
        _this.speed = 2;
        return _this;
    }
    Monster.prototype.move = function () {
        _super.prototype.move.call(this, true);
    };
    // Etape Laser
    ////////////////////////////////////
    Monster.prototype.getPosition = function () {
        return this.pos;
    };
    return Monster;
}(AnimatedObject));
//console.log(Monster);
