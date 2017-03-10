import request = require('request');
import util = require('util');

import SdkBase = require('../base');
import PersonGroup = require('../models/person');

/**
 * SDK for the Azure Person Group API
 * @class PersonGroupSdk
 */
class PersonGroupSdk extends SdkBase {

    public createGroup(personGroupId: string, name: string, data?: string): Promise<boolean> {
        // PUT /persongroups/{personGroupId}
        const uri = util.format('%s/persongroups/%s', this.url, personGroupId);
        const body: PersonGroup = { name: name };
        return new Promise((resolve, reject) => {
            request.put(uri, {
                body: JSON.stringify(body),
                headers: this.getJsonHeaders()
            }, (err: Error, res: request.RequestResponse, data: PersonGroup) => {
                if (err) {
                    reject(err);
                }
                resolve(true);
            });
        });
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