/**
 * Group of faces
 * @class FaceGroups
 */
class FaceGroups {
    public groups?: string[];
    public messyGroup?: string;

    constructor(groups?: string[], messyGroup?: string) {
        this.groups = groups;
        this.messyGroup = messyGroup;
    }
}
export = FaceGroups;
