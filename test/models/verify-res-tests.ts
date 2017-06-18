// tslint:disable-next-line:missing-jsdoc
'use strict';

import Chai = require('chai');

import VerifyRes = require('../../src/models/verify-res');

const assert = Chai.assert;

suite('VerifyRes Suite -', () => {
    test('constructor', () => {
        const sut = new VerifyRes(true, 1);
        assert.equal(sut.confidence, 1);
        assert.equal(sut.isIdentical, true);
    });
});