import request = require('request');

import util = require('util');

import SdkBase = require('../base');

import Rectangle = require('../models/rectangle');
import Person = require('../models/person');
import PersonFace = require('../models/person-face');

/**
 * SDK for the Azure Person API
 * @class PersonSdk
 * @extends {SdkBase}
 */
class PersonSdk extends SdkBase {

    /**
     * Add a representative face to a person for identification.
     * @param {string} personGroupId Specifying the person group containing the target person.
     * @param {string} personId Target person that the face is added to.
     * @param {string} url Face image URL. Valid image size is from 1KB to 4MB. Only one face is allowed per image.
     * @param {string} [userData] User-specified data about the target face to add for any purpose.
     * @param {Rectangle} [targetFace] A face rectangle to specify the target face to be added to a person.
     * @returns {Promise<PersonFace>} The persons face id
     * @memberOf PersonSdk
     */
    public addFaceFromUrl(personGroupId: string, personId: string, url: string, userData?: string, targetFace?: Rectangle)
        : Promise<PersonFace> {
        const uri = util.format('%s/persongroups/%s/persons/%s', this.url, personGroupId, personId);
        const body = { url: url };

        return new Promise<PersonFace>((resolve, reject) => {
            request.post(uri, { body: JSON.stringify(body), headers: this.getJsonHeaders() },
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
     * @param {string} personGroupId
     * @param {string} name
     * @param {string} [userData]
     * @returns {Promise<Person>}
     *
     * @memberOf PersonSdk
     */
    public createPerson(personGroupId: string, name: string, userData?: string): Promise<Person> {
        const uri = util.format('%s/persongroups/%s/persons', this.url, personGroupId);
        const body: Person = { name: name };
        if (userData) {
            body.userData = userData;
        }
        return new Promise((resolve, reject) => {
            request.post(uri, { body: JSON.stringify(body), headers: this.getJsonHeaders() },
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
     * @param {string} personGroupId
     * @param {string} personId
     * @returns {Promise<boolean>}
     *
     * @memberOf PersonSdk
     */
    public deletePerson(personGroupId: string, personId: string): Promise<boolean> {
        const uri = util.format('%s/persongroups/%s/persons/%s', this.url, personGroupId, personId);
        return new Promise<boolean>((resolve, reject) => {
            request.delete(uri, { headers: this.getHeaders() },
                (err: Error, res: request.RequestResponse, data: string) => {
                    if (res.statusCode !== 200) {
                        reject(data);
                    }
                    resolve(true);
                });
        });
    }

    /**
     *
     * @param {string} personGroupId
     * @param {string} personId
     * @param {string} persistedFaceId
     * @returns {Promise<boolean>}
     *
     * @memberOf PersonSdk
     */
    public deletePersonFace(personGroupId: string, personId: string, persistedFaceId: string): Promise<boolean> {
        const uri = util.format('%s/persongroups/%s/persons/%s/persistedFaces/%s', this.url, personGroupId, personId, persistedFaceId);
        return new Promise<boolean>((resolve, reject) => {
            request.delete(uri, { headers: this.getHeaders() },
                (err: Error, res: request.RequestResponse, data: string) => {
                    if (res.statusCode !== 200) {
                        reject(data);
                    }
                    resolve(true);
                });
        });
    }

    /**
     *
     * @param {string} personGroupId
     * @param {string} personId
     * @returns {Promise<Person>}
     *
     * @memberOf PersonSdk
     */
    public getPerson(personGroupId: string, personId: string): Promise<Person> {
        const uri = util.format('%s/persongroups/%s/persons/%s', this.url, personGroupId, personId);
        return new Promise<Person>((resolve, reject) => {
            request.get(uri, { headers: this.getHeaders() },
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
     * @param {string} personGroupId
     * @param {string} personId
     * @param {string} persistedFaceId
     * @returns {Promise<PersonFace>}
     *
     * @memberOf PersonSdk
     */
    public getPersonFace(personGroupId: string, personId: string, persistedFaceId: string): Promise<PersonFace> {
        const uri = util.format('%s/persongroups/%s/persons/%s/persistedFaces/%s', this.url, personGroupId, personId, persistedFaceId);
        return new Promise<PersonFace>((resolve, reject) => {
            request.get(uri, { headers: this.getHeaders() },
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
     * @param {string} personGroupId
     * @returns {Promise<Person[]>}
     *
     * @memberOf PersonSdk
     */
    public listPeopleInGroup(personGroupId: string): Promise<Person[]> {
        const uri = util.format('%s/persongroups/%s/persons', this.url, personGroupId);
        return new Promise<Person[]>((resolve, reject) => {
            request.get(uri, { headers: this.getHeaders() },
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
     * @param {string} personGroupId
     * @param {string} personId
     * @param {string} name
     * @param {string} userData
     * @returns {Promise<boolean>}
     *
     * @memberOf PersonSdk
     */
    public updatePerson(personGroupId: string, personId: string, name: string, userData: string): Promise<boolean> {
        const uri = util.format('%s/persongroups/%s/persons/%s', this.url, personGroupId, personId);
        const body = { name: name, userData: userData };
        return new Promise<boolean>((resolve, reject) => {
            request.patch(uri, { headers: this.getJsonHeaders(), body: JSON.stringify(body) },
                (err: Error, res: request.RequestResponse, data: string) => {
                    if (res.statusCode !== 200) {
                        reject(data);
                    }
                    resolve(true);
                });
        });
    }

    /**
     *
     * @param {string} personGroupId
     * @param {string} personId
     * @param {string} persistedFaceId
     * @param {string} userData
     * @returns {Promise<boolean>}
     *
     * @memberOf PersonSdk
     */
    public updateFace(personGroupId: string, personId: string, persistedFaceId: string, userData: string): Promise<boolean> {
        const uri = util.format('%s/persongroups/%s/persons/%s/persistedFaces/%s', this.url, personGroupId, personId, persistedFaceId);
        const body = { userData: userData };
        return new Promise<boolean>((resolve, reject) => {
            request.patch(uri, { headers: this.getJsonHeaders(), body: JSON.stringify(body) },
                (err: Error, res: request.RequestResponse, data: string) => {
                    if (res.statusCode !== 200) {
                        reject(data);
                    }
                    resolve(true);
                });
        });
    }
}
export = PersonSdk;