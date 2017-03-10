import SdkOpts = require('./models/sdk-opts');

/**
 * For Specific Sdk Classes to impliment
 * @abstract
 * @class ApiBase
 */
abstract class SdkBase {

    public url: string;

    private host: string = 'https://westus.api.cognitive.microsoft.com';
    private basePath: string = '/face/v';
    private key: string;

    constructor(config: SdkOpts) {
        this.url = this.host + this.basePath + config.version;
        this.key = config.ocpApiKey;
    }

    public getHeaders(): any {
        return { 'Ocp-Apim-Subscription-Key' : this.key };
    }

    public getJsonHeaders(): any {
        return {
            'Ocp-Apim-Subscription-Key' : this.key,
            'Content-Type' : 'application/json'
        };
    }

    public getStreamHeaders(): any {
        return {
            'Ocp-Apim-Subscription-Key' : this.key,
            'Content-Type' : 'application/octet-stream'
        };
    }

}
export = SdkBase;