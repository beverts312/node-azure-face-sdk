import Rectangle = require('./rectangle');
import Pose = require('./pose');
import FaceLandmarks = require('./face-landmarks');
import FaceAttributes = require('./face-attributes');

/**
 * Face Model
 * @interface Face
 */
interface Face {
    faceId: string;
    faceRectangle: Rectangle;
    faceLandmarks?: FaceLandmarks;
    faceAttributes?: FaceAttributes;
    glasses?: string;
    headPose?: Pose;
}
export = Face;