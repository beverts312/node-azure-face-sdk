import request = require('request');

import SdkBase = require('../base');

import Face = require('../models/face');

/**
 * SDK for the Azure Face API
 * @class FaceSdk
 */
class FaceSdk extends SdkBase {

    public detect(returnId: boolean = true, returnAttrs?: string): Face[] {
        // POST /detect
        throw new Error('Not Implimented');
    }

    public findSimilar() {
        // POST /findsimilars
        throw new Error('Not Implimented');
    }

    public group() {
        // POST /group 
        throw new Error('Not Implimented');
    }

    public identify(faceIds: string[], personGroupId: string, maxRes: number, confidenceThreshhold: number) {
        // POST /identify
        throw new Error('Not Implimented');
    }

    public verify() {
        // POST /verify
        throw new Error('Not Implimented');
    }
}
export = FaceSdk;