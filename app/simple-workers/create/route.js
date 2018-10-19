import Route from '@ember/routing/route';
export default Route.extend({
    async model() {
        return await this.store.createRecord('simple-worker', {
            fname: "",
            lname: "",
            country: "",
            city: "",
            plz: "",
            email: "",
            company: "",
            age: "",
            wage: "",
            active: ""
        });
    }
});
