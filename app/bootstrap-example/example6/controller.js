import Controller from '@ember/controller';
import EmberObject, { set } from '@ember/object';

const ContextualPerson = EmberObject.extend({
    className: null,
    fname: null,
    lname: null,
    email: null
});

export default Controller.extend({
    contextualPeople: null, 
    init() {
        set(this, 'contextualPeople', this.generateContextualClasses());
    },
    getOnePerson(className) {
        let fname, lname, email = null;
        if(className === "") {
            fname = "default".capitalize();
            lname = "default".capitalize();
            email = this.makeEmail("default");
        } else {
            fname = className.capitalize();
            lname = className.capitalize();
            email = this.makeEmail(className);
        }
        return ContextualPerson.create({
            className: this.addPrefix(className),
            fname: fname,
            lname: lname,
            email: email
        });
    },
    generateContextualClasses() {
        return [
           this.getOnePerson(""),
           this.getOnePerson("primary"),
           this.getOnePerson("success"),
           this.getOnePerson("danger"),
           this.getOnePerson("info"),
           this.getOnePerson("warning"),
           this.getOnePerson("active"),
           this.getOnePerson("secondary"),
           this.getOnePerson("light"),
           this.getOnePerson("dark")
        ];
    },
    addPrefix(className) {
        if(className === "") return "";
        return `table-${className}`;
    },
    makeEmail(className) {
        return `${className}@example.com`;
    }
});
