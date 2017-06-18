import PersonFace = require('./person-face');

/**
 * @class IdentifyRes
 */
class IdentifyRes {
    public faceId?: string;
    public candidates?: PersonFace[];
}
export = PersonFace;