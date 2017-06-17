import request = require('request');
import util = require('util');

import SdkBase = require('../base');
import PersonGroup = require('../models/person');

/**
 * SDK for the Azure Person Group API
 * @class PersonGroupSdk
 */
class PersonGroupSdk extends SdkBase {

    /**
     *
     * @param {string} personGroupId
     * @param {string} name
     * @param {string} [data]
     * @returns {Promise<boolean>}
     * @memberOf PersonGroupSdk
     */
    public createGroup(personGroupId: string, name: string, data?: string): Promise<boolean> {
        const uri = util.format('%s/persongroups/%s', this.url, personGroupId);
        const body: PersonGroup = { name: name };
        return new Promise((resolve, reject) => {
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
     * @param {string} personGroupId
     * @returns {Promise<boolean>}
     * @memberOf PersonGroupSdk
     */
    public deleteGroup(personGroupId: string): Promise<boolean> {
        const uri = util.format('%s/persongroups/%s', this.url, personGroupId);
        return new Promise((resolve, reject) => {
            request.delete(uri, { headers: this.getHeaders() }, (err: Error, res: request.RequestResponse) => {
                if (err) {
                    reject(err);
                }
                resolve(true);
            });
        });
    }

    /**
     *
     * @param {string} personGroupId
     * @returns {Promise<PersonGroup>}
     * @memberOf PersonGroupSdk
     */
    public getGroup(personGroupId: string): Promise<PersonGroup> {
        const uri = util.format('%s/persongroups/%s', this.url, personGroupId);
        return new Promise<PersonGroup>((resolve, reject) => {
            request.get(uri, { headers: this.getHeaders() }, (err: Error, res: request.RequestResponse, data: string) => {
                if (err) {
                    reject(err);
                }
                resolve(JSON.parse(data));
            });
        });
    }

    /**
     *
     * @param {string} [start]
     * @param {number} [top]
     * @returns {Promise<PersonGroup[]>}
     * @memberOf PersonGroupSdk
     */
    public listGroups(start?: string, top?: number): Promise<PersonGroup[]> {
        let uri = util.format('%s/persongroups', this.url);
        if (start) {
            uri += '?' + start;
            if (top) {
                uri += '&' + top;
            }
        }
        return new Promise<PersonGroup[]>((resolve, reject) => {
            request.get(uri, { headers: this.getHeaders() }, (err: Error, res: request.RequestResponse, data: string) => {
                if (err) {
                    reject(err);
                }
                resolve(JSON.parse(data));
            });
        });
    }

    public updateGroup(personGroupId: string) {
        // patch /persongroups/{personGroupId}
        throw new Error('Not Implimented');
    }

    public getTrainingStatus(personGroupId: string) {
        // get /persongroups/{personGroupId}/training
        throw new Error('Not Implimented');
    }

    /**
     *
     * @param {string} personGroupId
     * @returns {Promise<boolean>}
     * @memberOf PersonGroupSdk
     */
    public trainGroup(personGroupId: string): Promise<boolean> {
        const uri = util.format('%s/persongroups/%s/training', this.url, personGroupId);
        return new Promise<boolean>((resolve, reject) => {
            request.post(uri, { headers: this.getHeaders() }, (err: Error, res: request.RequestResponse, data: string) => {
                if (err) {
                    reject(err);
                }
                resolve(true);
            });
        });
    }
}
export = PersonGroupSdk;