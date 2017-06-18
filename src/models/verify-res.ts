/**
 * @class VerifyRes
 */
class VerifyRes {
    public isIdentical: boolean;
    public confidence: number;

    constructor(isIdentical: boolean, confidence: number) {
        this.isIdentical = isIdentical;
        this.confidence = confidence;
    }
}
export = VerifyRes;