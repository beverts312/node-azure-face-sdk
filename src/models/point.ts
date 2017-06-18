/**
 * Coordinate on the XY plane
 * @class Point
 */
class Point {
    /**
     * X Coordinate
     * @type {number}
     * @memberOf Point
     */
    public x: number;

    /**
     * Y Coordinate
     * @type {number}
     * @memberOf Point
     */
    public y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
}
export = Point;