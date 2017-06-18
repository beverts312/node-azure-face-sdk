// tslint:disable-next-line:missing-jsdoc
'use strict';

import Chai = require('chai');

import FaceHair = require('../../src/models/face-hair');

const assert = Chai.assert;

suite('FaceHair Suite -', () => {
    test('constructor', () => {
        const sut = new FaceHair(1, 2, 3);
        assert.equal(sut.mustache, 1);
        assert.equal(sut.beard, 2);
        assert.equal(sut.sideburns, 3);
    });
});