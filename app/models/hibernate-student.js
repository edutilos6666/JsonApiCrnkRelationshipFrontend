import DS from 'ember-data';
import { get } from '@ember/object';

export default DS.Model.extend({
    fname: DS.attr(),
    lname: DS.attr(),
    age: DS.attr('number'),
    wage: DS.attr('number'),
    active: DS.attr('boolean'),
    hibernateUniversity: DS.belongsTo('hibernate-university'),
    str() {
        const fname = get(this, 'fname');
        const lname = get(this, 'lname');
        const age = get(this, 'age');
        const wage = get(this, 'wage');
        const active = get(this, 'active');
        return `HibernateStudent(${fname}, ${lname}, ${age}, ${wage}, ${active})`;
    }
/*
    private String fname;
    private String lname;
    private int age;
    private double wage;
    private boolean active;
*/
});
