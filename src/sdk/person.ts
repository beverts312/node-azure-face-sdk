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

    public addFace(personGroupId: string, personId: string, userData?: string, targetFace?: Rectangle) {
        throw new Error('Not Implimented');
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

    public deletePerson(personGroupId: string, personId: string) {
        // delete /persongroups/{personGroupId}/persons/{personId}
        throw new Error('Not Implimented');
    }

    public deletePersonFace(personGroupId: string, personId: string, persistedFaceId: string) {
        // delete /persongroups/{personGroupId}/persons/{personId}/persistedFaces/{persistedFaceId}
        throw new Error('Not Implimented');
    }

    public getPerson(personGroupId: string, personId: string): Person {
        // get /persongroups/{personGroupId}/persons/persons/{personId}
        throw new Error('Not Implimented');
    }

    public getPersonFace(personGroupId: string, personId: string, persistedFaceId: string): PersonFace {
        // get /persongroups/{personGroupId}/persons/{personId}/persistedFaces/{persistedFaceId}
        throw new Error('Not Implimented');
    }

    public listPeopleInGroup(personGroupId: string): Person[] {
        // get /persongroups//{personGroupId}/persons/{personId}
        throw new Error('Not Implimented');
    }

    public updatePerson(personGroupId: string, personId: string, name: string, userData: string) {
        // patch /persongroups/{personGroupId}/persons/{personId}
        throw new Error('Not Implimented');
    }

    public updateFace(personGroupId: string, personId: string, persistedFaceId: string) {
        // patch persongroups/{personGroupId}/persons/{personId}/persistedFaces/{persistedFaceId}
        throw new Error('Not Implimented');
    }
}
export = PersonSdk;