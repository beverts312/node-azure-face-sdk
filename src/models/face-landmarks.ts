import Point = require('./point');

/**
 * Model to define points of a face in an image
 * @class FaceLandmarks
 */
class FaceLandmarks {
    public pupilLeft: Point;
    public pupilRight: Point;
    public noseTip: Point;
    public mouthLeft: Point;
    public mouthRight: Point;
    public eyebrowLeftOuter: Point;
    public eyebrowLeftInner: Point;
    public eyeLeftOuter: Point;
    public eyeLeftTop: Point;
    public eyeLeftBottom: Point;
    public eyeLeftInner: Point;
    public eyebrowRightInner: Point;
    public eyebrowRightOuter: Point;
    public eyeRightInner: Point;
    public eyeRightTop: Point;
    public eyeRightBottom: Point;
    public eyeRightOuter: Point;
    public noseRootLeft: Point;
    public noseRootRight: Point;
    public noseLeftAlarTop: Point;
    public noseRightAlarTop: Point;
    public noseLeftAlarOutTip: Point;
    public noseRightAlarOutTip: Point;
    public upperLipTop: Point;
    public upperLipBottom: Point;
    public underLipTop: Point;
    public underLipBottom: Point;
}
export = FaceLandmarks;