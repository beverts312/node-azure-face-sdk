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
}
export = Face;