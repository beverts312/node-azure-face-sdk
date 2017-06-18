// tslint:disable-next-line:missing-jsdoc
'use strict';

import Chai = require('chai');

import FaceGroups = require('../../src/models/face-groups');

const assert = Chai.assert;

suite('FaceGroups Suite -', () => {
    test('constructor', () => {
        const sut = new FaceGroups(['1'], 'group');
        assert.equal(sut.groups[0], '1');
        assert.equal(sut.messyGroup, 'group');
    });
});