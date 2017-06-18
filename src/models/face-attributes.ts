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
}
export = FaceAttributes