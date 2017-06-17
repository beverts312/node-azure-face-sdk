import request = require('request');
import util = require('util');

import SdkBase = require('../base');

import Rectangle = require('../models/rectangle');
import FaceList = require('../models/face-list');

/**
 * SDK for the Azure FaceList API
 * @class FaceListSdk
 */
class FaceListSdk extends SdkBase {
    /**
     *
     * @param {string} faceListId
     * @param {string} url
     * @param {string} [userData]
     * @param {Rectangle} [targetFace]
     * @returns {Promise<boolean>}
     *
     * @memberof FaceListSdk
     */
    public addFaceFromUrl(faceListId: string, url: string, userData?: string, targetFace?: Rectangle): Promise<boolean> {
        let uri = util.format('%s/facelists/%s/persistedFaces', this.url, faceListId);
        if (userData) {
            uri = util.format('%s?userData=', uri, userData);
        }
        if (targetFace) {
            const argPrefix = (userData) ? '&' : '?';
            uri = util.format('%s%stargetFace=', uri, argPrefix, targetFace.toString());
        }
        const body = { url: url };
        return new Promise<boolean>((resolve, reject) => {
            request.post(uri, {
                body: JSON.stringify(body),
                headers: this.getJsonHeaders()
            }, (err: Error, res: request.RequestResponse) => {
                if (err) {
                    reject(err);
                }
                resolve(true);
            });
        });
    }

    /**
     *
     *
     * @param {string} faceListId
     * @param {string} name
     * @returns
     *
     * @memberof FaceListSdk
     */
    public createList(faceListId: string, name: string) {
        const uri = util.format('%s/facelists/%s', this.url, faceListId);
        const body = { name: name };
        return new Promise<boolean>((resolve, reject) => {
            request.put(uri, {
                body: JSON.stringify(body),
                headers: this.getJsonHeaders()
            }, (err: Error, res: request.RequestResponse) => {
                if (err) {
                    reject(err);
                }
                resolve(true);
            });
        });
    }

    /**
     *
     *
     * @param {string} faceListId
     * @param {string} persistedFaceId
     * @returns {Promise<boolean>}
     *
     * @memberof FaceListSdk
     */
    public deleteFace(faceListId: string, persistedFaceId: string): Promise<boolean> {
        const uri = util.format('%s/facelists/%s/persistedFaces/%s', this.url, faceListId, persistedFaceId);
        return new Promise<boolean>((resolve, reject) => {
            request.delete(uri, {
                headers: this.getHeaders()
            }, (err: Error, res: request.RequestResponse) => {
                if (err) {
                    reject(err);
                }
                resolve(true);
            });
        });
    }

    /**
     *
     *
     * @param {string} faceListId
     * @returns {Promise<boolean>}
     *
     * @memberof FaceListSdk
     */
    public deleteList(faceListId: string): Promise<boolean> {
        const uri = util.format('%s/facelists/%s', this.url, faceListId);
        return new Promise<boolean>((resolve, reject) => {
            request.delete(uri, {
                headers: this.getHeaders()
            }, (err: Error, res: request.RequestResponse) => {
                if (err) {
                    reject(err);
                }
                resolve(true);
            });
        });
    }

    /**
     *
     *
     * @param {string} faceListId
     * @returns {Promise<FaceList>}
     *
     * @memberof FaceListSdk
     */
    public getList(faceListId: string): Promise<FaceList> {
        const uri = util.format('%s/facelists/%s', this.url, faceListId);
        return new Promise<FaceList>((resolve, reject) => {
            request.get(uri, {
                headers: this.getHeaders()
            }, (err: Error, res: request.RequestResponse, body) => {
                if (err) {
                    reject(err);
                }
                resolve(body);
            });
        });
    }

    /**
     *
     *
     * @returns {Promise<FaceList[]>}
     *
     * @memberof FaceListSdk
     */
    public getFaceLists(): Promise<FaceList[]> {
        const uri = util.format('%s/facelists', this.url);
        return new Promise<FaceList[]>((resolve, reject) => {
            request.get(uri, {
                headers: this.getHeaders()
            }, (err: Error, res: request.RequestResponse, body) => {
                if (err) {
                    reject(err);
                }
                resolve(body);
            });
        });
    }

    /**
     *
     * @param {string} faceListId
     * @param {string} name
     * @param {string} [userData]
     * @returns {Promise<boolean>}
     *
     * @memberof FaceListSdk
     */
    public updateList(faceListId: string, name: string, userData?: string): Promise<boolean> {
        const uri = util.format('%s/facelists/%s', this.url, faceListId);
        const body = {
            name: name,
            userData: userData
        };
        return new Promise<boolean>((resolve, reject) => {
            request.patch(uri, {
                headers: this.getJsonHeaders(),
                body: JSON.stringify(body)
            }, (err: Error, res: request.RequestResponse) => {
                if (err) {
                    reject(err);
                }
                resolve(true);
            });
        });
    }
}
export = FaceListSdk;