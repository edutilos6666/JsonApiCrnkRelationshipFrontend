import DS from 'ember-data';
import { get } from '@ember/object';

export default DS.Model.extend({
    label: DS.attr(),
    content: DS.attr('array')
});
