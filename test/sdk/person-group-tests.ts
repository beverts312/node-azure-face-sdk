// tslint:disable-next-line:missing-jsdoc
'use strict';

import Chai = require('chai');
import Sinon = require('sinon');

import request = require('request');

import PersonGroup = require('../../src/sdk/person-group');
import Opts = require('../../src/models/sdk-opts');

const assert = Chai.assert;

const groupRes = '{ "name": "name" }';
const groupsRes = '[{ "name": "name" }]';

suite('Person SDK Suite -', () => {

    let sandbox: Sinon.SinonSandbox;
    let putStub: Sinon.SinonStub;
    let getStub: Sinon.SinonStub;
    let postStub: Sinon.SinonStub;
    let patchStub: Sinon.SinonStub;
    let deleteStub: Sinon.SinonStub;
    const opts: Opts = new Opts();
    const sut = new PersonGroup(opts);

    setup(() => {
        sandbox = Sinon.sandbox.create();
        putStub = sandbox.stub(request, 'put');
        getStub = sandbox.stub(request, 'get');
        postStub = sandbox.stub(request, 'post');
        deleteStub = sandbox.stub(request, 'delete');
        patchStub = sandbox.stub(request, 'patch');
    });

    teardown(() => {
        sandbox.restore();
    });

    suite('createGroup Suite -', () => {
        test('put called', (done: () => void) => {
            putStub.yields(null, { statusCode: 200 }, '');
            sut.createGroup('', '', '').then((face) => {
                assert.isTrue(putStub.calledOnce);
                done();
            });
        });

        test('handles error', (done: () => void) => {
            putStub.yields(new Error('err'), { statusCode: 500 });
            sut.createGroup('', '', '').catch((err) => {
                assert.isTrue(putStub.calledOnce);
                done();
            });
        });
    });

    suite('deleteGroup Suite -', () => {
        test('delete called', (done: () => void) => {
            deleteStub.yields(null, { statusCode: 200 }, '');
            sut.deleteGroup('').then((face) => {
                assert.isTrue(deleteStub.calledOnce);
                done();
            });
        });

        test('handles error', (done: () => void) => {
            deleteStub.yields(new Error('err'), { statusCode: 500 });
            sut.deleteGroup('').catch((err) => {
                assert.isTrue(deleteStub.calledOnce);
                done();
            });
        });
    });

    suite('getGroup Suite -', () => {
        test('get called', (done: () => void) => {
            getStub.yields(null, { statusCode: 200 }, groupRes);
            sut.getGroup('').then((group) => {
                assert.isTrue(getStub.calledOnce);
                done();
            });
        });

        test('handles error', (done: () => void) => {
            getStub.yields(new Error('err'), { statusCode: 500 });
            sut.getGroup('').catch((err) => {
                assert.isTrue(getStub.calledOnce);
                done();
            });
        });
    });

    suite('listGroups Suite -', () => {
        test('get called without params', (done: () => void) => {
            getStub.yields(null, { statusCode: 200 }, groupsRes);
            sut.listGroups().then((group) => {
                assert.isTrue(getStub.calledOnce);
                done();
            });
        });

        test('get called with start', (done: () => void) => {
            getStub.yields(null, { statusCode: 200 }, groupsRes);
            sut.listGroups('').then((group) => {
                assert.isTrue(getStub.calledOnce);
                done();
            });
        });

        test('get called with start and top', (done: () => void) => {
            getStub.yields(null, { statusCode: 200 }, groupsRes);
            sut.listGroups('', 0).then((group) => {
                assert.isTrue(getStub.calledOnce);
                done();
            });
        });

        test('handles error', (done: () => void) => {
            getStub.yields(new Error('err'), { statusCode: 500 });
            sut.listGroups().catch((err) => {
                assert.isTrue(getStub.calledOnce);
                done();
            });
        });
    });

    suite('trainGroup Suite -', () => {
        test('post called', (done: () => void) => {
            postStub.yields(null, { statusCode: 200 } );
            sut.trainGroup('').then((group) => {
                assert.isTrue(postStub.calledOnce);
                done();
            });
        });

        test('handles error', (done: () => void) => {
            postStub.yields(new Error('err'), { statusCode: 500 });
            sut.trainGroup('').catch((err) => {
                assert.isTrue(postStub.calledOnce);
                done();
            });
        });
    });
});