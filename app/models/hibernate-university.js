import DS from 'ember-data';
import {get} from '@ember/object';

export default DS.Model.extend({
    name: DS.attr(),
    country: DS.attr(),
    city: DS.attr(),
    plz: DS.attr(),
    rector: DS.attr(),
    hibernateStudents: DS.hasMany('hibernate-student'),
    str() {
        const name = get(this, 'name');
        const country = get(this, 'country');
        const city = get(this, 'city');
        const plz = get(this, 'plz');
        const rector = get(this, 'rector');
        // let hibernateStudents = get(this, 'hibernateStudents');
        // hibernateStudents = hibernateStudents.map(hs=> `{${hs.fname}, ${hs.lname}}`).join(" ; ");
        return `HibernateUniversity(${name},${country}, ${city},${plz}, ${rector})`;
    }
/*
    private String name;
    private String country;
    private String city;
    private String plz;
    private String rector;
*/
});
