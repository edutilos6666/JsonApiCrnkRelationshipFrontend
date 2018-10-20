import Route from '@ember/routing/route';
import { get, set, getProperties } from '@ember/object';
import Ember from 'ember';

export default Route.extend({
    async model(params) {
        const worker = await this.store.findRecord('simple-worker', params.update_id);
        // const tmp = {...worker};
        return worker;
    },
    setupController(controller, model) {
        this._super(controller, model);
        const tmp = getProperties(model,
            'fname',
            'lname',
            'country',
            'city',
            'plz',
            'email',
            'company',
            'age',
            'wage',
            'active',
            'activities'
             );
        set(controller, 'oldWorker', tmp);
    },
    afterModel() {
    }
});
