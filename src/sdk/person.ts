import request = require('request');

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
        // POST /persongroups/{personGroupId}/persons/{personId}/persistedFaces[?userData][&targetFace]
        throw new Error('Not Implimented');
    }

    public createPerson(personGroupId: string, name: string, userData?: string) {
        // post /persongroups/{personGroupId}/persons
        throw new Error('Not Implimented');
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