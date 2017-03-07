import request = require('request');

import SdkBase = require('../base');

/**
 * SDK for the Azure Person Group API
 * @class PersonGroupSdk
 */
class PersonGroupSdk extends SdkBase {

    public createGroup(personGroupId: string, name: string, data: string) {
        // PUT /persongroups/{personGroupId}
        throw new Error('Not Implimented');
    }

    public deleteGroup(personGroupId: string) {
        // delete /persongroups/{personGroupId}
        throw new Error('Not Implimented');
    }

    public getGroup(personGroupId: string) {
        // get /persongroups/{personGroupId}
        throw new Error('Not Implimented');
    }

    public listGroups(start?: string, top?: number) {
        // get /persongroups/{personGroupId}/training
        throw new Error('Not Implimented');
    }

    public getTrainingStatus(personGroupId: string) {
        // get /persongroups/{personGroupId}/training
        throw new Error('Not Implimented');
    }

    public trainGroup(personGroupId: string) {
        // post /persongroups/{personGroupId}/train
        throw new Error('Not Implimented');
    }

    public updateGroup(personGroupId: string) {
        // patch /persongroups/{personGroupId}
        throw new Error('Not Implimented');
    }

}
export = PersonGroupSdk;