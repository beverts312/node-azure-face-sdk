import PersonFace = require('./person-face');

/**
 * Face List
 * @class FaceList
 */
class FaceList {
    public name?: string;
    public userData?: string;
    public persistedFaces?: PersonFace[];

    constructor(name?: string, userData?: string, persistedFaces?: PersonFace[]) {
        this.name = name;
        this.userData = userData;
        this.persistedFaces = persistedFaces;
    }
}
export = FaceList