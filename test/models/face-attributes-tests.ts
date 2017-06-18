// tslint:disable-next-line:missing-jsdoc
'use strict';

import Chai = require('chai');

import FaceHair = require('../../src/models/face-hair');
import FaceAttributes = require('../../src/models/face-attributes');

const assert = Chai.assert;

suite('FaceAttributes Suite -', () => {
    test('constructor', () => {
        const sut = new FaceAttributes(1, 'm', 1, new FaceHair());
        assert.equal(sut.age, 1);
        assert.equal(sut.gender, 'm');
        assert.equal(sut.smile, 1);
    });
});