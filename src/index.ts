// tslint=disable-next-line=missing-jsdoc

// tslint:disable-next-line:missing-jsdoc
import FaceSdk = require('./sdk/face');
import FaceListSdk = require('./sdk/face-list');
import PersonSdk = require('./sdk/person');
import PersonGroupSdk = require('./sdk/person-group');
import FaceAttributes = require('./models/face-attributes');
import FaceGroups = require('./models/face-groups');
import FaceLandmarks = require('./models/face-landmarks');
import FaceList = require('./models/face-list');
import Face = require('./models/face');
import PersonFace = require('./models/person-face');
import Person = require('./models/person');
import Point = require('./models/point');
import Pose = require('./models/pose');
import Rectangle = require('./models/rectangle');
import SdkOpts = require('./models/sdk-opts');

export = {
    FaceSdk,
    FaceListSdk,
    PersonSdk,
    PersonGroupSdk,
    FaceAttributes,
    FaceGroups,
    FaceLandmarks,
    FaceList,
    Face,
    PersonFace,
    Person,
    Point,
    Pose,
    Rectangle,
    SdkOpts
};