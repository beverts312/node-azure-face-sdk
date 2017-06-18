/**
 * PersonFace Model
 * @class PersonFace
 */
class PersonFace {
    public persistedFaceId?: string;
    public faceId?: string;
    public userData?: string;
    public confidence?: number;
    public personId?: string;

    constructor(persistedFaceId?: string, faceId?: string, userData?: string, confidence?: number, personId?: string) {
        this.persistedFaceId = persistedFaceId;
        this.faceId = faceId;
        this.userData = userData;
        this.confidence = confidence;
        this.personId = personId;
    }
}
export = PersonFace;