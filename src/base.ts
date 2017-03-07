import SdkOpts = require('./models/sdk-opts');

/**
 * For Specific Sdk Classes to impliment
 * @abstract
 * @class ApiBase
 */
abstract class SdkBase {

    private host: string = 'westus.api.cognitive.microsoft.com';
    private basePath: string = '/face/v';
    private url: string;
    private key: string;

    constructor(config: SdkOpts) {
        this.url = this.host + this.basePath + config.version;
        this.key = config.ocpApiKey;
    }
}
export = SdkBase;