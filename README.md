# Node Azure Face SDK  
Wrapper on the Azure Cognitive APIs for Facial Recognition ([official docs][azure-docs]).  

## Usage  
Install to your project `npm install azure-face-sdk --save`

#### Configuration  
All of the classes are configured with the [SdkOpts][sdk-opts] object.  
There are two options:  

 - version: Currently only 1.0 is supported
 - ocpApiKey: Retrieve your key from [here][cognitive-key]

#### Person Group  
In progress  

#### Person 
For now refere to [inline docs][person-sdk] 

#### Face  
Not implimented  

#### Face List  
Not Implimented

## Development  
Coming soon  

Initially created by this [swell generator][parent-generator-url]!


[azure-docs]: https://westus.dev.cognitive.microsoft.com/docs/services/563879b61984550e40cbbe8d/operations/563879b61984550f30395236
[sdk-opts]: ./src/models/sdk-opts.ts  
[cognitive-key]: https://www.microsoft.com/cognitive-services/en-US/subscriptions
[person-sdk]: ./src/sdk/person.ts

[parent-generator-url]: https://github.com/swellaby/generator-swell
