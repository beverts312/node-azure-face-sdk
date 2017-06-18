// tslint:disable-next-line:missing-jsdoc
'use strict';

import Chai = require('chai');

import FaceList = require('../../src/models/face-list');
import PersonFace = require('../../src/models/person-face');

const assert = Chai.assert;

suite('FaceList Suite -', () => {
    test('constructor', () => {
        const sut = new FaceList('name', 'ud', []);
        assert.equal(sut.name, 'name');
        assert.equal(sut.userData, 'ud');
    });
});