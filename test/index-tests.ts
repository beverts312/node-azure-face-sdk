// tslint:disable-next-line:missing-jsdoc
'use strict';

import Chai = require('chai');

import sut = require('../src/index');
import Opts = require('../src/models/sdk-opts');

const assert = Chai.assert;
const opts: Opts = new Opts();

suite('Index Suite -', () => {

    test('Loads Person', (done: () => void) => {
        assert.isNotNull(new sut.PersonSdk(opts));
        done();
    });

    test('Loads Person Group', (done: () => void) => {
        assert.isNotNull(new sut.PersonGroupSdk(opts));
        done();
    });

    test('Loads Face', (done: () => void) => {
        assert.isNotNull(new sut.FaceSdk(opts));
        done();
    });

    test('Loads Face', (done: () => void) => {
        assert.isNotNull(new sut.FaceListSdk(opts));
        done();
    });
});