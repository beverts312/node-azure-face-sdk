import Point = require('./point');

/**
 * Model to define points of a face in an image
 * @interface FaceLandmarks
 */
interface FaceLandmarks {
    pupilLeft: Point;
    pupilRight: Point;
    noseTip: Point;
    mouthLeft: Point;
    mouthRight: Point;
    eyebrowLeftOuter: Point;
    eyebrowLeftInner: Point;
    eyeLeftOuter: Point;
    eyeLeftTop: Point;
    eyeLeftBottom: Point;
    eyeLeftInner: Point;
    eyebrowRightInner: Point;
    eyebrowRightOuter: Point;
    eyeRightInner: Point;
    eyeRightTop: Point;
    eyeRightBottom: Point;
    eyeRightOuter: Point;
    noseRootLeft: Point;
    noseRootRight: Point;
    noseLeftAlarTop: Point;
    noseRightAlarTop: Point;
    noseLeftAlarOutTip: Point;
    noseRightAlarOutTip: Point;
    upperLipTop: Point;
    upperLipBottom: Point;
    underLipTop: Point;
    underLipBottom: Point;
}
export = FaceLandmarks;