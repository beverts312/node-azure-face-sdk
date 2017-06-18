import PersonFace = require('./person-face');

/**
 * @class IdentifyRes
 */
class IdentifyRes {
    public faceId?: string;
    public candidates?: PersonFace[];

    constructor(faceId: string, candidates: PersonFace[]) {
        this.faceId = faceId;
        this.candidates = candidates;
    }
}
export = PersonFace;