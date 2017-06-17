// tslint:disable-next-line:missing-jsdoc
'use strict';

import Chai = require('chai');
import Sinon = require('sinon');

import request = require('request');

import Face = require('../../src/sdk/face');
import Opts = require('../../src/models/sdk-opts');

const assert = Chai.assert;

const facesRes = '[{ "faceId": "name" }]';

suite('Person SDK Suite -', () => {

    let sandbox: Sinon.SinonSandbox;
    let putStub: Sinon.SinonStub;
    let getStub: Sinon.SinonStub;
    let postStub: Sinon.SinonStub;
    let patchStub: Sinon.SinonStub;
    let deleteStub: Sinon.SinonStub;
    const opts: Opts = new Opts();
    const sut = new Face(opts);

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
        test('post called', (done: () => void) => {
            postStub.yields(null, { statusCode: 200 }, facesRes);
            sut.detectFromUrl('').then((face) => {
                assert.isTrue(postStub.calledOnce);
                done();
            });
        });

        test('handles error', (done: () => void) => {
            postStub.yields(new Error('err'), { statusCode: 500 });
            sut.detectFromUrl('').catch((err) => {
                assert.isTrue(postStub.calledOnce);
                done();
            });
        });
    });

    suite('findSimilar Suite -', () => {
        test('post called', (done: () => void) => {
            postStub.yields(null, { statusCode: 200 }, facesRes);
            sut.findSimilar('', '').then((face) => {
                assert.isTrue(postStub.calledOnce);
                done();
            });
        });

        test('handles error', (done: () => void) => {
            postStub.yields(new Error('err'), { statusCode: 500 });
            sut.findSimilar('', '').catch((err) => {
                assert.isTrue(postStub.calledOnce);
                done();
            });
        });
    });

    suite('findSimilar Suite -', () => {
        test('post called', (done: () => void) => {
            postStub.yields(null, { statusCode: 200 }, facesRes);
            sut.group(['']).then((face) => {
                assert.isTrue(postStub.calledOnce);
                done();
            });
        });

        test('handles error', (done: () => void) => {
            postStub.yields(new Error('err'), { statusCode: 500 });
            sut.group(['']).catch((err) => {
                assert.isTrue(postStub.calledOnce);
                done();
            });
        });
    });

    suite('identify Suite -', () => {
        test('post called', (done: () => void) => {
            postStub.yields(null, { statusCode: 200 }, facesRes);
            sut.identify([''], '').then((face) => {
                assert.isTrue(postStub.calledOnce);
                done();
            });
        });

        test('handles error', (done: () => void) => {
            postStub.yields(new Error('err'), { statusCode: 500 });
            sut.identify([''], '').catch((err) => {
                assert.isTrue(postStub.calledOnce);
                done();
            });
        });
    });

    suite('verify face to face Suite -', () => {
        test('post called', (done: () => void) => {
            postStub.yields(null, { statusCode: 200 }, facesRes);
            sut.verifyFaceToFace('', '').then((face) => {
                assert.isTrue(postStub.calledOnce);
                done();
            });
        });

        test('handles error', (done: () => void) => {
            postStub.yields(new Error('err'), { statusCode: 500 });
            sut.verifyFaceToFace('', '').catch((err) => {
                assert.isTrue(postStub.calledOnce);
                done();
            });
        });
    });
});