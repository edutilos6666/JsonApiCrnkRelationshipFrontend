import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
    title: null,
    init() {
        set(this, 'title', 'List Of SimpleWorkers');
    },
    actions: {
        async detailsAction(worker) {
            this.transitionToRoute('simple-workers.details', worker);
        },
        async updateAction(worker) {
            this.transitionToRoute('simple-workers.update', worker);
        }, 
        async deleteAction(worker) {
            // await this.store.deleteRecord(worker);
            // await this.store.save();
            await worker.destroyRecord();
            this.transitionToRoute('simple-workers');
        }
    }
});
