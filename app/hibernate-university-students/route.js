import Route from '@ember/routing/route';
import { get, set } from '@ember/object';

export default Route.extend({
    async model() {
        return {
            hibernateUniversities: await this.store.findAll('hibernate-university')
        };
    }
});
