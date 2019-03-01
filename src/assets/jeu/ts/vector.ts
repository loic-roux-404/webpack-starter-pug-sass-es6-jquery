class Vector {
    ////////////////////////////////////
    // Etape classe Vector
    ////////////////////////////////////
    private _x : number;
    private _y : number;

    constructor(valX : number, valY : number) {
        this._x = valX;
        this._y = valY;
    }

    get x() : number {
        return this._x;
    }

    get y() : number {
        return this._y;
    }

    public setValues(valX : number, valY : number) {
        this._x = valX;
        this._y = valY;
    }

    public addToX(val : number) {
        this._x += val;
    }

    public addToY(val : number) {
        this._y += val;
    }
    ////////////////////////////////////
}