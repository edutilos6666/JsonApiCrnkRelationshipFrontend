import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

const Person = EmberObject.extend({
    firstName: null,
    lastName: null,
    email: null
});
export default Route.extend({
    async model() {
        return await this.generatePeople();
    },
    generatePeople() {
        return [
            Person.create({firstName: "John", lastName: "Doe", email: "john@example.com"}),
            Person.create({firstName: "Mary", lastName: "Moe", email: "mary@example.com"}),
            Person.create({firstName: "July", lastName: "Dooley", email: "july@example.com"})
        ];
    }
});
