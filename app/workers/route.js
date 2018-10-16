import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        const res = this.store.findAll('worker');
        console.log(res);
        console.dir(res);
        return res;
    }
});
