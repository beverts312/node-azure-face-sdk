// tslint:disable-next-line:missing-jsdoc
'use strict';

import Chai = require('chai');

import PersonFace = require('../../src/models/person-face');
import IdentifyRes = require('../../src/models/identify-res');

const assert = Chai.assert;

suite('IdentifyRes Suite -', () => {
    test('constructor', () => {
        const sut = new IdentifyRes('pfid', 'fid', 'ud', 1, 'pid');
        assert.equal(sut.persistedFaceId, 'pfid');
        assert.equal(sut.faceId, 'fid');
        assert.equal(sut.userData, 'ud');
        assert.equal(sut.confidence, 1);
        assert.equal(sut.personId, 'pid');
    });
});