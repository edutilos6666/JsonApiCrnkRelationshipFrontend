import Route from '@ember/routing/route';

export default Route.extend({
    async model() {
        const res = await this.store.findAll('hibernate-worker');
        return res;
    }
});
