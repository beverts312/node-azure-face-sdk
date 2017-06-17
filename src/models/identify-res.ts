import PersonFace = require('./person-face');

/**
 * @interface IdentifyRes
 */
interface IdentifyRes {
    faceId?: string;
    candidates?: PersonFace[];
}
export = PersonFace;