"use strict";
exports.__esModule = true;
exports.Point = void 0;
var Point = /** @class */ (function () {
    // private x: number;
    // x: number;
    // y: number;
    function Point(x, y) {
        this.x = x;
        this.y = y;
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDiostance = function (anotherPoint) {
        //...
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setX = function (value) {
        try {
            if (value < 5) {
                throw new Error("Value must be higher than 5");
                this.x = value;
            }
        }
        catch (error) {
            console.log("Error: " + error.message);
        }
    };
    return Point;
}());
exports.Point = Point;
