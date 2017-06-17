import PersonFace = require('./person-face');

/**
 * Face List
 * @interface FaceList
 */
interface FaceList {
    name?: string;
    userData?: string;
    persistedFaces?: PersonFace[];
}
export = FaceList