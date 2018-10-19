import Component from '@ember/component';
import Ember from 'ember';
import { get, set } from '@ember/object';

export default Component.extend({
    tagName: 'div',
    filterValue: null,
    selectValue: null,
    labels: null, 
    filteredWorkers: Ember.computed('filterValue', function() {
        const filterValue = get(this, 'filterValue');
        if(filterValue === "") {
            return get(this, 'workers');
        } else {
            const selectValue = get(this, 'selectValue');
            return get(this, 'workers').filter(worker=> {
                return `${get(worker, selectValue)}`.toLowerCase().includes(filterValue);
            });
        }
    }),
    init() {
        this._super(...arguments);
        // set(this, 'filteredWorkers', get(this, 'workers'));
        set(this, 'filterValue', '');
        set(this, 'labels', ["id","fname","lname","country","city","plz","email","company","age","wage","active","activities"]);
        set(this, 'selectValue', get(this, 'labels').objectAt(0));
    },
    actions: {
        updateValue(value) {
            set(this, 'selectValue', value);
        }
    }
});
