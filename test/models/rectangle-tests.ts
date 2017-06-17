// tslint:disable-next-line:missing-jsdoc
'use strict';

import Chai = require('chai');

import Rectangle = require('../../src/models/rectangle');

const assert = Chai.assert;

const width = 1;
const height = 2;
const left = 3;
const top = 4;
const rectangle = new Rectangle(width, height, left, top);

suite('Rectangle Suite -', () => {
    test('constructor', () => {
        assert.equal(rectangle.width, width);
        assert.equal(rectangle.height, height);
        assert.equal(rectangle.left, left);
        assert.equal(rectangle.top, top);
    });

    test('toString', () => {
        assert.equal(rectangle.toString(), '3,4,1,2');
    });
});