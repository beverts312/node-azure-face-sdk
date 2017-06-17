// tslint:disable-next-line:missing-jsdoc
'use strict';

import Chai = require('chai');
import Sinon = require('sinon');

import request = require('request');

import FaceListSdk = require('../../src/sdk/face-list');
import Opts = require('../../src/models/sdk-opts');
import FaceList = require('../../src/models/face-list');

const assert = Chai.assert;

suite('FaceList SDK Suite -', () => {

    let sandbox: Sinon.SinonSandbox;
    let putStub: Sinon.SinonStub;
    let getStub: Sinon.SinonStub;
    let postStub: Sinon.SinonStub;
    let patchStub: Sinon.SinonStub;
    let deleteStub: Sinon.SinonStub;
    const opts: Opts = new Opts();
    const sut = new FaceListSdk(opts);

    const sampleList: FaceList = {
        name: 'name',
        userData: 'some user data'
    };

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

    suite('addFaceFromUrl Suite -', () => {
        test('post called', (done: () => void) => {
            postStub.yields(null, { statusCode: 200 });
            sut.addFaceFromUrl('id', 'url').then(() => {
                assert.isTrue(postStub.calledOnce);
                done();
            });
        });

        test('handles error', (done: () => void) => {
            postStub.yields(new Error('err'), { statusCode: 500 });
            sut.addFaceFromUrl('id', 'url').catch((err) => {
                assert.isTrue(postStub.calledOnce);
                done();
            });
        });
    });

    suite('createList Suite -', () => {
        test('put called', (done: () => void) => {
            putStub.yields(null, { statusCode: 200 });
            sut.createList('id', 'name').then(() => {
                assert.isTrue(putStub.calledOnce);
                done();
            });
        });

        test('handles error', (done: () => void) => {
            putStub.yields(new Error('err'), { statusCode: 500 });
            sut.createList('id', 'name').catch((err) => {
                assert.isTrue(putStub.calledOnce);
                done();
            });
        });
    });

    suite('deleteFace Suite -', () => {
        test('delete called', (done: () => void) => {
            deleteStub.yields(null, { statusCode: 200 });
            sut.deleteFace('listId', 'faceId').then((face) => {
                assert.isTrue(deleteStub.calledOnce);
                done();
            });
        });

        test('handles error', (done: () => void) => {
            deleteStub.yields(new Error('err'), { statusCode: 500 });
            sut.deleteFace('listId', 'faceId').catch((err) => {
                assert.isTrue(deleteStub.calledOnce);
                done();
            });
        });
    });

    suite('deleteList Suite -', () => {
        test('delete called', (done: () => void) => {
            deleteStub.yields(null, { statusCode: 200 });
            sut.deleteList('').then((face) => {
                assert.isTrue(deleteStub.calledOnce);
                done();
            });
        });

        test('handles error', (done: () => void) => {
            deleteStub.yields(new Error('err'), { statusCode: 500 });
            sut.deleteList('').catch((err) => {
                assert.isTrue(deleteStub.calledOnce);
                done();
            });
        });
    });

    suite('getList Suite -', () => {
        test('get called', (done: () => void) => {
            getStub.yields(null, { statusCode: 200 }, sampleList);
            sut.getList('id').then((list) => {
                assert.isTrue(getStub.calledOnce);
                assert.equal(list, sampleList)
                done();
            });
        });

        test('handles error', (done: () => void) => {
            getStub.yields(new Error('err'), { statusCode: 500 });
            sut.getList('id').catch((err) => {
                assert.isTrue(getStub.calledOnce);
                done();
            });
        });
    });

    suite('getFaceLists Suite -', () => {
        test('get called', (done: () => void) => {
            getStub.yields(null, { statusCode: 200 }, [sampleList]);
            sut.getFaceLists().then((list) => {
                assert.isTrue(getStub.calledOnce);
                assert.equal(list.length, 1);
                assert.equal(list[0], sampleList);
                done();
            });
        });

        test('handles error', (done: () => void) => {
            getStub.yields(new Error('err'), { statusCode: 500 });
            sut.getFaceLists().catch((err) => {
                assert.isTrue(getStub.calledOnce);
                done();
            });
        });
    });
});