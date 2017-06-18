import PersonFace = require('./person-face');

/**
 * Face List
 * @class FaceList
 */
class FaceList {
    public name?: string;
    public userData?: string;
    public persistedFaces?: PersonFace[];
}
export = FaceList