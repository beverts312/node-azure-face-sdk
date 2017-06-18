// tslint:disable-next-line:missing-jsdoc
'use strict';

import Chai = require('chai');

import Point = require('../../src/models/point');

const assert = Chai.assert;

suite('Point Suite -', () => {
    test('constructor', () => {
        const sut = new Point(1, 2);
        assert.equal(sut.x, 1);
        assert.equal(sut.y, 2);
    });
});