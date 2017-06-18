/**
 * Configuration Model for Api Classes
 * @class ApiConf
 */
class SdkOpts {
    public version: string = '1.0';
    public ocpApiKey: string;

    constructor(ocpApiKey: string) {
        this.ocpApiKey = ocpApiKey;
    }
}
export = SdkOpts;