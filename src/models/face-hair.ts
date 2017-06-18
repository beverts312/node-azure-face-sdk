/**
 * Facial Hair Attributes
 * @class FaceHair
 */
class FaceHair {
    public mustache?: number;
    public beard?: number;
    public sideburns?: number;

    constructor(mustache?: number, beard?: number, sideburns?: number) {
        this.mustache = mustache;
        this.beard = beard;
        this.sideburns = sideburns;
    }
}
export = FaceHair;
