/**
 * Get Error from HTTP Code
 * @param {number} errCode HTTP Status Code
 * @returns {Error} Complete Error Object
 */
// tslint:disable-next-line:cyclomatic-complexity
function getError(errCode: number): Error {
    switch (errCode) {
        case 200 || 202:
            return null;
        case 400:
            return new Error('Request body is invalid.');
        case 401:
            return new Error('Access denied due to invalid subscription key. Make sure you are subscribed to an API you are trying'
                + 'to call and provide the right key.');
        case 403:
            return new Error('Out of call volume quota. Quota will be replenished in 2.12 days.');
        case 404:
            return new Error('Not Found');
        case 408:
            return new Error('Operation exceeds maximum execution time.');
        case 409:
            // make this better
            return new Error('Special Error');
        case 415:
            return new Error('Invalid Media Type');
        case 429:
            return new Error('Rate limit is exceeded. Try again in 26 seconds.');
        default:
            return new Error('');
    }
}
export = getError;