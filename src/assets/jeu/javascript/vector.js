var Vector = /** @class */ (function () {
    function Vector(valX, valY) {
        this._x = valX;
        this._y = valY;
    }
    Object.defineProperty(Vector.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Vector.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: true,
        configurable: true
    });
    Vector.prototype.setValues = function (valX, valY) {
        this._x = valX;
        this._y = valY;
    };
    Vector.prototype.addToX = function (val) {
        this._x += val;
    };
    Vector.prototype.addToY = function (val) {
        this._y += val;
    };
    return Vector;
}());
