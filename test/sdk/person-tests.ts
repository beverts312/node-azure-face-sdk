// tslint:disable-next-line:missing-jsdoc
'use strict';

import Chai = require('chai');
import Sinon = require('sinon');

import request = require('request');

import Person = require('../../src/sdk/person');
import Opts = require('../../src/models/sdk-opts');

const assert = Chai.assert;

const faceRes = '{ "persistedFaceId": "" }';
const personRes = '{ "name": "name" }';

suite('Person SDK Suite -', () => {

    let sandbox: Sinon.SinonSandbox;
    let getStub: Sinon.SinonStub;
    let postStub: Sinon.SinonStub;
    let patchStub: Sinon.SinonStub;
    let deleteStub: Sinon.SinonStub;
    const opts: Opts = new Opts();
    const sut = new Person(opts);

    setup(() => {
        sandbox = Sinon.sandbox.create();
        getStub = sandbox.stub(request, 'get');
        postStub = sandbox.stub(request, 'post');
        deleteStub = sandbox.stub(request, 'delete');
        patchStub = sandbox.stub(request, 'patch');
    });

    teardown(() => {
        sandbox.restore();
    });

    suite('addFaceFromUrl Suite -', () => {
        test('post called', (done: () => void) => {
            postStub.yields(null, { statusCode: 200 }, faceRes);
            sut.addFaceFromUrl('', '', '').then((face) => {
                assert.isTrue(postStub.calledOnce);
                done();
            });
        });

        test('handles error', (done: () => void) => {
            postStub.yields(new Error('err'), { statusCode: 500 });
            sut.addFaceFromUrl('', '', '').catch((err) => {
                assert.isTrue(postStub.calledOnce);
                done();
            });
        });
    });

    suite('createPerson Suite -', () => {
        test('post called userData', (done: () => void) => {
            postStub.yields(null, { statusCode: 200 }, personRes);
            sut.createPerson('', '', 'data').then((face) => {
                assert.isTrue(postStub.calledOnce);
                done();
            });
        });

        test('post called no userData', (done: () => void) => {
            postStub.yields(null, { statusCode: 200 }, personRes);
            sut.createPerson('', '').then((face) => {
                assert.isTrue(postStub.calledOnce);
                done();
            });
        });

        test('handles error', (done: () => void) => {
            postStub.yields(new Error('err'), { statusCode: 500 });
            sut.createPerson('', '', '').catch((err) => {
                assert.isTrue(postStub.calledOnce);
                done();
            });
        });
    });

    suite('deletePerson Suite -', () => {
        test('delete called', (done: () => void) => {
            deleteStub.yields(null, { statusCode: 200 }, '');
            sut.deletePerson('', '').then((face) => {
                assert.isTrue(deleteStub.calledOnce);
                done();
            });
        });

        test('handles error', (done: () => void) => {
            deleteStub.yields(new Error('err'), { statusCode: 500 });
            sut.deletePerson('', '').catch((err) => {
                assert.isTrue(deleteStub.calledOnce);
                done();
            });
        });
    });

    suite('deletePersonFace Suite -', () => {
        test('delete called', (done: () => void) => {
            deleteStub.yields(null, { statusCode: 200 }, '');
            sut.deletePersonFace('', '', '').then((face) => {
                assert.isTrue(deleteStub.calledOnce);
                done();
            });
        });

        test('handles error', (done: () => void) => {
            deleteStub.yields(new Error('err'), { statusCode: 500 });
            sut.deletePersonFace('', '', '').catch((err) => {
                assert.isTrue(deleteStub.calledOnce);
                done();
            });
        });
    });

    suite('getPerson Suite -', () => {
        test('get called', (done: () => void) => {
            getStub.yields(null, { statusCode: 200 }, personRes);
            sut.getPerson('', '').then((face) => {
                assert.isTrue(getStub.calledOnce);
                done();
            });
        });

        test('handles error', (done: () => void) => {
            getStub.yields(new Error('err'), { statusCode: 500 });
            sut.getPerson('', '').catch((err) => {
                assert.isTrue(getStub.calledOnce);
                done();
            });
        });
    });

    suite('getPersonFace Suite -', () => {
        test('get called', (done: () => void) => {
            getStub.yields(null, { statusCode: 200 }, faceRes);
            sut.getPersonFace('', '', '').then((face) => {
                assert.isTrue(getStub.calledOnce);
                done();
            });
        });

        test('handles error', (done: () => void) => {
            getStub.yields(new Error('err'), { statusCode: 500 });
            sut.getPersonFace('', '', '').catch((err) => {
                assert.isTrue(getStub.calledOnce);
                done();
            });
        });
    });

    suite('listPeopleInGroup Suite -', () => {
        test('get called', (done: () => void) => {
            getStub.yields(null, { statusCode: 200 }, null);
            sut.listPeopleInGroup('').then((face) => {
                assert.isTrue(getStub.calledOnce);
                done();
            });
        });

        test('handles error', (done: () => void) => {
            getStub.yields(new Error('err'), { statusCode: 500 });
            sut.listPeopleInGroup('').catch((err) => {
                assert.isTrue(getStub.calledOnce);
                done();
            });
        });
    });

    suite('updatePerson Suite -', () => {
        test('patch called', (done: () => void) => {
            patchStub.yields(null, { statusCode: 200 }, null);
            sut.updatePerson('', '', '', '').then((face) => {
                assert.isTrue(patchStub.calledOnce);
                done();
            });
        });

        test('handles error', (done: () => void) => {
            patchStub.yields(new Error('err'), { statusCode: 500 });
            sut.updatePerson('', '', '', '').catch((err) => {
                assert.isTrue(patchStub.calledOnce);
                done();
            });
        });
    });

    suite('updateFace Suite -', () => {
        test('patch called', (done: () => void) => {
            patchStub.yields(null, { statusCode: 200 }, null);
            sut.updateFace('', '', '', '').then((face) => {
                assert.isTrue(patchStub.calledOnce);
                done();
            });
        });

        test('handles error', (done: () => void) => {
            patchStub.yields(new Error('err'), { statusCode: 500 });
            sut.updateFace('', '', '', '').catch((err) => {
                assert.isTrue(patchStub.calledOnce);
                done();
            });
        });
    });
});