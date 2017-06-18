/**
 * Person Model
 * @class Person
 */
class Person {
    public personId?: string;
    public persistedFaceIds?: string[];
    public name?: string;
    public userData?: string;

    constructor(personId?: string, persistedFaceIds?: string[], name?: string, userData?: string) {
        this.personId = personId;
        this.persistedFaceIds = persistedFaceIds;
        this.name = name;
        this.userData = userData;
    }
}
export = Person;