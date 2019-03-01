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
var MultiSprites = /** @class */ (function (_super) {
    __extends(MultiSprites, _super);
    function MultiSprites(canvas, context, src) {
        var _this = _super.call(this, canvas, context, src) || this;
        _this.sprite_pos = null;
        return _this;
    }
    MultiSprites.prototype.setSpritePosition = function (pos) {
        this.sprite_pos = pos;
    };
    MultiSprites.prototype.drawObject = function () {
        if (this.sprite_pos != null) {
            this.context.drawImage(this.img, this.sprite_pos.x, this.sprite_pos.y, this.width, this.height, this.pos.x, this.pos.y, this.width, this.height);
        }
    };
    return MultiSprites;
}(AnimatedObject));
