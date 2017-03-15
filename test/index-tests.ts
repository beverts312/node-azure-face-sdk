// tslint:disable-next-line:missing-jsdoc
'use strict';

import Chai = require('chai');

import sut = require('../src/index');
import Opts = require('../src/models/sdk-opts');

const assert = Chai.assert;
const opts: Opts = new Opts();

suite('Index Suite -', () => {

    test('Loads Person', (done: () => void) => {
        assert.isNotNull(new sut.Person(opts));
        done();
    });

    test('Loads Person Group', (done: () => void) => {
        assert.isNotNull(new sut.PersonGroup(opts));
        done();
    });

    test('Loads Face', (done: () => void) => {
        assert.isNotNull(new sut.Face(opts));
        done();
    });

    test('Loads Face', (done: () => void) => {
        assert.isNotNull(new sut.FaceList(opts));
        done();
    });
});