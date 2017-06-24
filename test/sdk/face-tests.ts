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
    const opts: Opts = new Opts('');
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

    suite('detectFromUrl Suite -', () => {
        test('post called properly without optional params', (done: () => void) => {
            postStub.yields(null, { statusCode: 200 }, facesRes);
            sut.detectFromUrl('some url').then((face) => {
                assert.isTrue(postStub.calledOnce);
                const postArgs = postStub.firstCall.args;
                assert.equal(postArgs[0], 'https://westus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true');
                assert.equal(postArgs[1].headers['Content-Type'], 'application/json');
                assert.equal(postArgs[1].body.url, 'some url');
                done();
            });
        });

        test('post called properly with returnFaceLandmarks param', (done: () => void) => {
            postStub.yields(null, { statusCode: 200 }, facesRes);
            sut.detectFromUrl('some url', true, true).then((face) => {
                assert.isTrue(postStub.calledOnce);
                const postArgs = postStub.firstCall.args;
                assert.equal(postArgs[0],
                    'https://westus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceLandmarks=true');
                assert.equal(postArgs[1].headers['Content-Type'], 'application/json');
                assert.equal(postArgs[1].body.url, 'some url');
                done();
            });
        });

        test('post called properly with returnFaceAttributes param', (done: () => void) => {
            postStub.yields(null, { statusCode: 200 }, facesRes);
            sut.detectFromUrl('some url', true, false, 'testing').then((face) => {
                assert.isTrue(postStub.calledOnce);
                const postArgs = postStub.firstCall.args;
                assert.equal(postArgs[0],
                    'https://westus.api.cognitive.microsoft.com/face/v1.0/detect?returnFaceId=true&returnFaceAttributes=testing');
                assert.equal(postArgs[1].headers['Content-Type'], 'application/json');
                assert.equal(postArgs[1].body.url, 'some url');
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
        test('post called properly without optional params', (done: () => void) => {
            postStub.yields(null, { statusCode: 200 }, facesRes);
            sut.findSimilar('faceId', 'faceListId').then((face) => {
                assert.isTrue(postStub.calledOnce);
                const postArgs = postStub.firstCall.args;
                assert.equal(postArgs[0], 'https://westus.api.cognitive.microsoft.com/face/v1.0/findsimilar');
                assert.equal(postArgs[1].headers['Content-Type'], 'application/json');
                assert.equal(postArgs[1].body.faceId, 'faceId');
                assert.equal(postArgs[1].body.faceListId, 'faceListId');
                assert.equal(postArgs[1].body.faceIds, null);
                assert.equal(postArgs[1].body.maxNumOfCandidatesReturned, null);
                assert.equal(postArgs[1].body.mode, null);
                done();
            });
        });

        test('post called with faceIds', (done: () => void) => {
            postStub.yields(null, { statusCode: 200 }, facesRes);
            sut.findSimilar('faceId', 'faceListId', ['1', '2']).then((face) => {
                assert.isTrue(postStub.calledOnce);
                const postArgs = postStub.firstCall.args;
                assert.equal(postArgs[0], 'https://westus.api.cognitive.microsoft.com/face/v1.0/findsimilar');
                assert.equal(postArgs[1].headers['Content-Type'], 'application/json');
                assert.equal(postArgs[1].body.faceId, 'faceId');
                assert.equal(postArgs[1].body.faceListId, 'faceListId');
                assert.equal(postArgs[1].body.faceIds.length, 2);
                assert.equal(postArgs[1].body.faceIds[0], '1');
                assert.equal(postArgs[1].body.faceIds[1], '2');
                assert.equal(postArgs[1].body.maxNumOfCandidatesReturned, null);
                assert.equal(postArgs[1].body.mode, null);
                done();
            });
        });

        test('post called with maxNumOfCandidatesReturned', (done: () => void) => {
            postStub.yields(null, { statusCode: 200 }, facesRes);
            sut.findSimilar('faceId', 'faceListId', null, 2).then((face) => {
                assert.isTrue(postStub.calledOnce);
                const postArgs = postStub.firstCall.args;
                assert.equal(postArgs[0], 'https://westus.api.cognitive.microsoft.com/face/v1.0/findsimilar');
                assert.equal(postArgs[1].headers['Content-Type'], 'application/json');
                assert.equal(postArgs[1].body.faceId, 'faceId');
                assert.equal(postArgs[1].body.faceListId, 'faceListId');
                assert.equal(postArgs[1].body.faceIds, null);
                assert.equal(postArgs[1].body.maxNumOfCandidatesReturned, 2);
                assert.equal(postArgs[1].body.mode, null);
                done();
            });
        });

        test('post called with maxNumOfCandidatesReturned', (done: () => void) => {
            postStub.yields(null, { statusCode: 200 }, facesRes);
            sut.findSimilar('faceId', 'faceListId', null, null, 'mode').then((face) => {
                assert.isTrue(postStub.calledOnce);
                const postArgs = postStub.firstCall.args;
                assert.equal(postArgs[0], 'https://westus.api.cognitive.microsoft.com/face/v1.0/findsimilar');
                assert.equal(postArgs[1].headers['Content-Type'], 'application/json');
                assert.equal(postArgs[1].body.faceId, 'faceId');
                assert.equal(postArgs[1].body.faceListId, 'faceListId');
                assert.equal(postArgs[1].body.faceIds, null);
                assert.equal(postArgs[1].body.maxNumOfCandidatesReturned, null);
                assert.equal(postArgs[1].body.mode, 'mode');
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
            sut.identify(['1', '2'], 'id').then((face) => {
                assert.isTrue(postStub.calledOnce);
                const postArgs = postStub.firstCall.args;
                assert.equal(postArgs[0], 'https://westus.api.cognitive.microsoft.com/face/v1.0/identify');
                assert.equal(postArgs[1].headers['Content-Type'], 'application/json');
                assert.equal(postArgs[1].body.faceIds.length, 2);
                assert.equal(postArgs[1].body.faceIds[0], '1');
                assert.equal(postArgs[1].body.faceIds[1], '2');
                assert.equal(postArgs[1].body.personGroupId, 'id');
                assert.equal(postArgs[1].body.maxRes, 1);
                assert.equal(postArgs[1].body.confidenceThreshhold, .5);
                done();
            });
        });

        test('post called properly with maxRes param', (done: () => void) => {
            postStub.yields(null, { statusCode: 200 }, facesRes);
            sut.identify(['1', '2'], 'id', 3).then((face) => {
                assert.isTrue(postStub.calledOnce);
                const postArgs = postStub.firstCall.args;
                assert.equal(postArgs[0], 'https://westus.api.cognitive.microsoft.com/face/v1.0/identify');
                assert.equal(postArgs[1].headers['Content-Type'], 'application/json');
                assert.equal(postArgs[1].body.faceIds.length, 2);
                assert.equal(postArgs[1].body.faceIds[0], '1');
                assert.equal(postArgs[1].body.faceIds[1], '2');
                assert.equal(postArgs[1].body.personGroupId, 'id');
                assert.equal(postArgs[1].body.maxRes, 3);
                assert.equal(postArgs[1].body.confidenceThreshhold, .5);
                done();
            });
        });

        test('post called properly with maxRes param', (done: () => void) => {
            postStub.yields(null, { statusCode: 200 }, facesRes);
            sut.identify(['1', '2'], 'id', undefined, 1).then((face) => {
                assert.isTrue(postStub.calledOnce);
                const postArgs = postStub.firstCall.args;
                assert.equal(postArgs[0], 'https://westus.api.cognitive.microsoft.com/face/v1.0/identify');
                assert.equal(postArgs[1].headers['Content-Type'], 'application/json');
                assert.equal(postArgs[1].body.faceIds.length, 2);
                assert.equal(postArgs[1].body.faceIds[0], '1');
                assert.equal(postArgs[1].body.faceIds[1], '2');
                assert.equal(postArgs[1].body.personGroupId, 'id');
                assert.equal(postArgs[1].body.maxRes, 1);
                assert.equal(postArgs[1].body.confidenceThreshhold, 1);
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
                const postArgs = postStub.firstCall.args;
                assert.equal(postArgs[0], 'https://westus.api.cognitive.microsoft.com/face/v1.0/verify');
                assert.equal(postArgs[1].headers['Content-Type'], 'application/json');
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

    suite('verify face to person Suite -', () => {
        test('post called', (done: () => void) => {
            postStub.yields(null, { statusCode: 200 }, facesRes);
            sut.verifyFaceToPerson('faceId', 'personId', 'groupId').then((face) => {
                assert.isTrue(postStub.calledOnce);
                const postArgs = postStub.firstCall.args;
                assert.equal(postArgs[0], 'https://westus.api.cognitive.microsoft.com/face/v1.0/verify');
                assert.equal(postArgs[1].headers['Content-Type'], 'application/json');
                assert.equal(postArgs[1].body.faceId, 'faceId');
                assert.equal(postArgs[1].body.personId, 'personId');
                assert.equal(postArgs[1].body.personGroupId, 'groupId');
                done();
            });
        });

        test('handles error', (done: () => void) => {
            postStub.yields(new Error('err'), { statusCode: 500 });
            sut.verifyFaceToPerson('', '', '').catch((err) => {
                assert.isTrue(postStub.calledOnce);
                done();
            });
        });
    });
});