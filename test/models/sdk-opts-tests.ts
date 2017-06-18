// tslint:disable-next-line:missing-jsdoc
'use strict';

import Chai = require('chai');

import SdkOpts = require('../../src/models/sdk-opts');

const assert = Chai.assert;

suite('SdkOpts Suite -', () => {
    test('constructor', () => {
        const sut = new SdkOpts('key');
        assert.equal(sut.ocpApiKey, 'key');
        assert.equal(sut.version, '1.0');
    });
});