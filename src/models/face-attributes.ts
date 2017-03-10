import FaceHair = require('./face-hair');

/**
 * Facial Attributes
 * @interface FaceAttributes
 */
interface FaceAttributes {
    age?: number;
    gender?: string;
    smile?: number;
    facialHair?: FaceHair;
}
export = FaceAttributes