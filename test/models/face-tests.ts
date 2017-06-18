// tslint:disable-next-line:missing-jsdoc
'use strict';

import Chai = require('chai');

import Rectangle = require('../../src/models/rectangle');
import Pose = require('../../src/models/pose');
import FaceLandmarks = require('../../src/models/face-landmarks');
import FaceAttributes = require('../../src/models/face-attributes');
import Face = require('../../src/models/face');

const assert = Chai.assert;

suite('Face Suite -', () => {
    test('constructor', () => {
        const sut = new Face('fid', new Rectangle(1, 2, 3, 4), new FaceLandmarks(), new FaceAttributes(), '', new Pose(1, 2, 3));
        assert.equal(sut.faceId, 'fid');
    });
});