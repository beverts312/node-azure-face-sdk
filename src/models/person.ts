/**
 * Person Model
 * @interface Person
 */
interface Person {
    personId?: string;
    persistedFaceIds?: string[];
    name?: string;
    userData?: string;
}
export = Person;