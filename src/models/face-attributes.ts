import FaceHair = require('./face-hair');

/**
 * Facial Attributes
 * @class FaceAttributes
 */
class FaceAttributes {
    public age?: number;
    public gender?: string;
    public smile?: number;
    public facialHair?: FaceHair;

    constructor(age?: number, gender?: string, smile?: number, facialHair?: FaceHair) {
        this.age = age;
        this.gender = gender;
        this.smile = smile;
        this.facialHair = facialHair;
    }
}
export = FaceAttributes