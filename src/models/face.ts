import Rectangle = require('./rectangle');
import Pose = require('./pose');
import FaceLandmarks = require('./face-landmarks');
import FaceAttributes = require('./face-attributes');

/**
 * Face Model
 * @class Face
 */
class Face {
    public faceId: string;
    public faceRectangle: Rectangle;
    public faceLandmarks?: FaceLandmarks;
    public faceAttributes?: FaceAttributes;
    public glasses?: string;
    public headPose?: Pose;

    constructor(faceId: string, faceRectangle: Rectangle, faceLandmarks?: FaceLandmarks,
        faceAttributes?: FaceAttributes, glasses?: string, headPose?: Pose) {
        this.faceId = faceId;
        this.faceRectangle = faceRectangle;
        this.faceLandmarks = faceLandmarks;
        this.faceAttributes = faceAttributes;
        this.glasses = glasses;
        this.headPose = headPose;
    }
}
export = Face;