import Controller from '@ember/controller';
import { set } from '@ember/object';

export default Controller.extend({
    title: null,
    init() {
        set(this, 'title', 'List Of SimpleWorkers');
    }
});
