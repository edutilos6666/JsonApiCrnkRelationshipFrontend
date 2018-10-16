import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    age: DS.attr('number'),
    wage: DS.attr('number'),
    active: DS.attr('boolean')
});
