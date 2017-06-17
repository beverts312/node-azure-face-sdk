/**
 * PersonFace Model
 * @interface PersonFace
 */
interface PersonFace {
    persistedFaceId?: string;
    faceId?: string;
    userData?: string;
    confidence?: number;
    personId?: string;
}
export = PersonFace;