/**
 * Describe this
 * @class Pose
 */
class Pose {
    public roll: number;
    public yaw: number;
    public pitch: number;

    constructor(roll: number, yaw: number, pitch: number) {
        this.roll = roll;
        this.yaw = yaw;
        this.pitch = pitch;
    }
}
export = Pose;