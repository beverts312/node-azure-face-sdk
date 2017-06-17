import util = require('util');

/**
 * Corners of a rectangle
 * @class Rectangle
 */
class Rectangle {
    public width: number;
    public height: number;
    public left: number;
    public top: number;

    constructor(width: number, height: number, left: number, top: number) {
        this.width = width;
        this.height = height;
        this.left = left;
        this.top = top;
    }

    public toString() {
        return util.format('%s,%s,%s,%s', this.left, this.top, this.width, this.height);
    }
}
export = Rectangle;