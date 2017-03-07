import request = require('request');

import SdkBase = require('../base');

import Rectangle = require('../models/rectangle');

/**
 * SDK for the Azure FaceList API
 * @class FaceListSdk
 */
class FaceListSdk extends SdkBase {

    public addFace(faceListId: string, userData?: string, targetFace?: Rectangle) {
        // post /facelists/{faceListId}/persistedFaces[?userData][&targetFace]
        throw new Error('Not Implimented');
    }

    public createList(faceListId: string, name: string, userData?: string) {
        // post /facelists/{faceListId}
        throw new Error('Not Implimented');
    }

    public deleteFace(faceListId: string, name: string, userData?: string) {
        // delete /facelists/{faceListId}/persistedFaces[?userData][&targetFace]
        throw new Error('Not Implimented');
    }

    public getList(faceListId: string) {
        // get /facelists/{faceListId}
        throw new Error('Not Implimented');
    }

    public getFaceLists() {
        // get /facelists
        throw new Error('Not Implimented');
    }

    public updateList(faceListId: string, name: string, userData?: string) {
        // patch /facelists/{faceListId}
        throw new Error('Not Implimented');
    }

    public deleteList(faceListId: string) {
        // delete /facelists/{faceListId}
        throw new Error('Not Implimented');
    }
}
export = FaceListSdk;