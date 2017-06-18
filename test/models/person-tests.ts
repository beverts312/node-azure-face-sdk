// tslint:disable-next-line:missing-jsdoc
'use strict';

import Chai = require('chai');

import Person = require('../../src/models/person');

const assert = Chai.assert;

suite('Person Suite -', () => {
    test('constructor', () => {
        const sut = new Person('id', ['1'], 'name', 'ud');
        assert.equal(sut.personId, 'id');
        assert.equal(sut.persistedFaceIds[0], '1');
        assert.equal(sut.name, 'name');
        assert.equal(sut.userData, 'ud');
    });
});