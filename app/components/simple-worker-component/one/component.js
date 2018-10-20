import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
    tagName: 'tr',
    actions: {
        // closure action 
        details() {
            this.detailsAction(get(this, 'worker'));
        }, 
        // closure action 
        update() {
            this.updateAction(get(this, 'worker'));
        },
        // closure action 
        delete() {
            this.deleteAction(get(this, 'worker'));
        }
    }
});
