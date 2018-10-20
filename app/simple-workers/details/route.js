import Route from '@ember/routing/route';

export default Route.extend({
    async model(params) {
        const worker = await this.store.findRecord('simple-worker', params.details_id); 
        return worker;
    }
});
