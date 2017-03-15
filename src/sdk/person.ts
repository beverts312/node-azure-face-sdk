import request = require('request');

import util = require('util');

import SdkBase = require('../base');

import Rectangle = require('../models/rectangle');
import Person = require('../models/person');
import PersonFace = require('../models/person-face');

/**
 * SDK for the Azure Person API
 * @class PersonSdk
 */
class PersonSdk extends SdkBase {

    public addFaceFromUrl(personGroupId: string, personId: string, url: string, userData?: string, targetFace?: Rectangle)
        : Promise<PersonFace> {
        const uri = util.format('%s/persongroups/%s/persons/%s', this.url, personGroupId, personId);
        const body = { url: url };

        return new Promise<PersonFace>((resolve, reject) => {
            request.post(uri, { body: JSON.stringify(body), headers: this.getJsonHeaders() },
                (err: Error, res: request.RequestResponse, data: string) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(JSON.parse(data));
                });
        });
    }

    public createPerson(personGroupId: string, name: string, userData?: string): Promise<Person> {
        const uri = util.format('%s/persongroups/%s/persons', this.url, personGroupId);
        const body: Person = { name: name };
        if (userData) {
            body.userData = userData;
        }
        return new Promise((resolve, reject) => {
            request.post(uri, { body: JSON.stringify(body), headers: this.getJsonHeaders() },
                (err: Error, res: request.RequestResponse, data: string) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(JSON.parse(data));
                });
        });
    }

    public deletePerson(personGroupId: string, personId: string): Promise<boolean> {
        const uri = util.format('%s/persongroups/%s/persons/%s', this.url, personGroupId, personId);
        return new Promise<boolean>((resolve, reject) => {
            request.delete(uri, { headers: this.getHeaders() },
                (err: Error, res: request.RequestResponse, data: string) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(true);
                });
        });
    }

    public deletePersonFace(personGroupId: string, personId: string, persistedFaceId: string): Promise<boolean> {
        const uri = util.format('%s/persongroups/%s/persons/%s/persistedFaces/%s', this.url, personGroupId, personId, persistedFaceId);
        return new Promise<boolean>((resolve, reject) => {
            request.delete(uri, { headers: this.getHeaders() },
                (err: Error, res: request.RequestResponse, data: string) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(true);
                });
        });
    }

    public getPerson(personGroupId: string, personId: string): Promise<Person> {
        const uri = util.format('%s/persongroups/%s/persons/%s', this.url, personGroupId, personId);
        return new Promise<Person>((resolve, reject) => {
            request.get(uri, { headers: this.getHeaders() },
                (err: Error, res: request.RequestResponse, data: string) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(JSON.parse(data));
                });
        });
    }

    public getPersonFace(personGroupId: string, personId: string, persistedFaceId: string): Promise<PersonFace> {
        const uri = util.format('%s/persongroups/%s/persons/%s/persistedFaces/%s', this.url, personGroupId, personId, persistedFaceId);
        return new Promise<PersonFace>((resolve, reject) => {
            request.get(uri, { headers: this.getHeaders() },
                (err: Error, res: request.RequestResponse, data: string) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(JSON.parse(data));
                });
        });
    }

    public listPeopleInGroup(personGroupId: string): Promise<Person[]> {
        const uri = util.format('%s/persongroups/%s/persons', this.url, personGroupId);
        return new Promise<Person[]>((resolve, reject) => {
            request.get(uri, { headers: this.getHeaders() },
                (err: Error, res: request.RequestResponse, data: string) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(JSON.parse(data));
                });
        });
    }

    public updatePerson(personGroupId: string, personId: string, name: string, userData: string): Promise<boolean> {
        const uri = util.format('%s/persongroups/%s/persons/%s', this.url, personGroupId, personId);
        const body = { name: name, userData: userData };
        return new Promise<boolean>((resolve, reject) => {
            request.patch(uri, { headers: this.getJsonHeaders(), body: JSON.stringify(body) },
                (err: Error, res: request.RequestResponse, data: string) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(true);
                });
        });
    }

    public updateFace(personGroupId: string, personId: string, persistedFaceId: string, userData: string): Promise<boolean> {
        const uri = util.format('%s/persongroups/%s/persons/%s/persistedFaces/%s', this.url, personGroupId, personId, persistedFaceId);
        const body = { userData: userData };
        return new Promise<boolean>((resolve, reject) => {
            request.patch(uri, { headers: this.getJsonHeaders(), body: JSON.stringify(body) },
                (err: Error, res: request.RequestResponse, data: string) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(true);
                });
        });
    }
}
export = PersonSdk;