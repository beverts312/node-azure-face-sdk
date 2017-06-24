import request = require('request');
import util = require('util');

import SdkBase = require('../base');

import Face = require('../models/face');
import FaceGroups = require('../models/face-groups');
import IdentifyRes = require('../models/identify-res');
import VerifyRes = require('../models/verify-res');

/**
 * SDK for the Azure Face API
 * @class FaceSdk
 */
class FaceSdk extends SdkBase {

    /**
     * Detect human faces in an image and returns face locations, and optionally with faceIds, landmarks, and attributes.
     * @param {string} url Url of image to process
     * @param {boolean} [returnId=true] Return faceIds of the detected faces or not.
     * @param {boolean} [returnFaceLandmarks] Return face landmarks of the detected faces or not.
     * @param {string} [returnAttrs] Analyze and return the one or more specified face attributes in the comma-separated string
     * @returns {Promise<Face[]>} List of faces
     * @memberOf FaceSdk
     */
    public detectFromUrl(url: string, returnId: boolean = true, returnFaceLandmarks?: boolean, returnAttrs?: string): Promise<Face[]> {
        let uri = util.format('%s/detect?returnFaceId=%s', this.url, returnId);
        if (returnFaceLandmarks) {
            uri += '&returnFaceLandmarks=' + returnFaceLandmarks;
        }
        if (returnAttrs) {
            uri += '&returnFaceAttributes=' + returnAttrs;
        }
        const body = { url: url };
        return new Promise<Face[]>((resolve, reject) => {
            request.post(uri, { headers: this.getJsonHeaders(), body: body },
                (err: Error, res: request.RequestResponse, data: string) => {
                    if (res.statusCode !== 200) {
                        reject(data);
                    }
                    resolve(JSON.parse(data));
                });
        });
    }

    /**
     *
     * @param {string} faceId
     * @param {string} faceListId
     * @param {string[]} [faceIds]
     * @param {number} [maxNumOfCandidatesReturned]
     * @param {string} [mode]
     * @returns {Promise<Face[]>} List of faces
     * @memberOf FaceSdk
     */
    public findSimilar(faceId: string, faceListId: string, faceIds?: string[], maxNumOfCandidatesReturned?: number,
        mode?: string): Promise<Face[]> {
        const uri = util.format('%s/findsimilar', this.url);
        const body = {
            faceId: faceId,
            faceListId: faceListId,
            faceIds: null,
            maxNumOfCandidatesReturned: null,
            mode: null
        };
        if (faceIds) {
            body.faceIds = faceIds;
        }
        if (maxNumOfCandidatesReturned) {
            body.maxNumOfCandidatesReturned = maxNumOfCandidatesReturned;
        }
        if (mode) {
            body.mode = mode;
        }
        return new Promise<Face[]>((resolve, reject) => {
            request.post(uri, { headers: this.getJsonHeaders(), body: body },
                (err: Error, res: request.RequestResponse, data: string) => {
                    if (res.statusCode !== 200) {
                        reject(data);
                    }
                    resolve(JSON.parse(data));
                });
        });
    }

    /**
     * Divide candidate faces into groups based on face similarity.
     * @param {string[]} faceIds Array of candidate faceId created by Face - Detect
     * @returns {Promise<FaceGroups>} A successful call returns one or more groups of similar faces (rank by group size) and a messyGroup.
     * @memberOf FaceSdk
     */
    public group(faceIds: string[]): Promise<FaceGroups> {
        const uri = util.format('%s/group', this.url);
        const body = { faceIds: faceIds };
        return new Promise<FaceGroups>((resolve, reject) => {
            request.post(uri, { headers: this.getJsonHeaders(), body: body },
                (err: Error, res: request.RequestResponse, data: string) => {
                    if (res.statusCode !== 200) {
                        reject(data);
                    }
                    resolve(JSON.parse(data));
                });
        });
    }

    /**
     * Identify unknown faces from a person group.
     * @param {string[]} faceIds Array of query faces faceIds, created by the Face - Detect. Each of the faces are identified independently
     * @param {string} personGroupId personGroupId of the target person group
     * @param {number} maxRes The range of maxNumOfCandidatesReturned is between 1 and 5
     * @param {number} confidenceThreshhold Confidence threshold of identification, used to judge whether one face belong to one person
     * @returns {Promise<IdentifyRes[]>} A successful call returns the identified candidate person(s) for each query face.
     * @memberOf FaceSdk
     */
    public identify(faceIds: string[], personGroupId: string, maxRes?: number, confidenceThreshhold?: number): Promise<IdentifyRes[]> {
        const uri = util.format('%s/identify', this.url);
        const body = {
            faceIds: faceIds,
            personGroupId: personGroupId,
            maxRes: 1,
            confidenceThreshhold: .5
        };
        if (maxRes) {
            body.maxRes = maxRes;
        }
        if (confidenceThreshhold) {
            body.confidenceThreshhold = confidenceThreshhold;
        }
        return new Promise<IdentifyRes[]>((resolve, reject) => {
            request.post(uri, { headers: this.getJsonHeaders(), body: body },
                (err: Error, res: request.RequestResponse, data: string) => {
                    if (res.statusCode !== 200) {
                        reject(data);
                    }
                    resolve(JSON.parse(data));
                });
        });
    }

    public verifyFaceToPerson(faceId: string, personId: string, personGroupId: string): Promise<VerifyRes> {
        const uri = util.format('%s/verify', this.url);
        const body = {
            faceId: faceId,
            personId: personId,
            personGroupId: personGroupId
        };
        return new Promise<VerifyRes>((resolve, reject) => {
            request.post(uri, { headers: this.getJsonHeaders(), body: body },
                (err: Error, res: request.RequestResponse, data: string) => {
                    if (res.statusCode !== 200) {
                        reject(data);
                    }
                    resolve(JSON.parse(data));
                });
        });
    }

    public verifyFaceToFace(faceId1: string, faceId2: string): Promise<VerifyRes> {
        const uri = util.format('%s/verify', this.url);
        const body = {
            faceId1: faceId1,
            faceId2: faceId2
        };
        return new Promise<VerifyRes>((resolve, reject) => {
            request.post(uri, { headers: this.getJsonHeaders(), body: body },
                (err: Error, res: request.RequestResponse, data: string) => {
                    if (res.statusCode !== 200) {
                        reject(data);
                    }
                    resolve(JSON.parse(data));
                });
        });
    }
}
export = FaceSdk;