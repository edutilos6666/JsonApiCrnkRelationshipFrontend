import DS from 'ember-data';

export default DS.Model.extend({
    fname: DS.attr(),
    lname: DS.attr(),
    country: DS.attr(),
    city: DS.attr(),
    plz: DS.attr(),
    age: DS.attr('number'),
    wage: DS.attr('number'),
    active: DS.attr('boolean')
/*
    private long id;
    private String fname;
    private String lname;
    private String country;
    private String city;
    private String plz;
    private int age;
    private double wage;
    private boolean active;
*/
});
