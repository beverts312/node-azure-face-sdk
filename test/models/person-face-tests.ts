// tslint:disable-next-line:missing-jsdoc
'use strict';

import Chai = require('chai');

import PersonFace = require('../../src/models/person-face');

const assert = Chai.assert;

suite('PersonFace Suite -', () => {
    test('constructor', () => {
        const sut = new PersonFace('pfid', 'id', 'ud', 1, 'pid');
        assert.equal(sut.persistedFaceId, 'pfid');
        assert.equal(sut.faceId, 'id');
        assert.equal(sut.userData, 'ud');
        assert.equal(sut.confidence, 1);
        assert.equal(sut.personId, 'pid');
    });
});