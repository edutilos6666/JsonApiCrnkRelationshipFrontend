import DS from 'ember-data';

/**
 * SimpleWorker
 */
/*
fname
lname
country
city
plz
email
company
age
wage
active
activities
*/
export default DS.Model.extend({
    fname: DS.attr('string'),
    lname: DS.attr(),
    country: DS.attr(),
    city: DS.attr(),
    plz: DS.attr(),
    email: DS.attr(),
    company: DS.attr(),
    age: DS.attr('number'),
    wage: DS.attr('number'),
    active: DS.attr('boolean'),
    activities: DS.attr('array')
});
