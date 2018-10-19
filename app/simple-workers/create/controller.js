import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import Ember from 'ember';
import Messages from 'ember-validators/messages';
import validateFormat from 'ember-validators/format';  //for email, regex 
import validateLength from 'ember-validators/length'; //for string length 
import validateNumber from 'ember-validators/number';  //for numbers 

export default Controller.extend({
    activityList: null,
    fnameError: Ember.computed('model.fname', function(){
        const fname = get(this, 'model.fname');
        const options = {
            min: 3,
            max: 10
        };
        return this.getValidationResult(fname, options);
    }),
    lnameError: Ember.computed('model.lname', function() {
        const lname = get(this, 'model.lname');
        const options = {
            min: 3, 
            max: 10
        };
        return this.getValidationResult(lname, options);
    }),
    countryError: Ember.computed('model.country', function() {
        const country = get(this, 'model.country');
        const options = {
            min: 3,
            max: 10
        };
        return this.getValidationResult(country, options);
    }),
    cityError: Ember.computed('model.city', function() {
        const city = get(this, 'model.city');
        const options = {
            min: 3,
            max: 10
        };
        return this.getValidationResult(city, options);
    }),
    plzError: Ember.computed('model.plz', function() {
        const plz = get(this, 'model.plz');
        const options = {
            min: 5,
            max: 10
        };
        return this.getValidationResult(plz, options);
    }),
    emailError: Ember.computed('model.email', function() {
        const email = get(this, 'model.email');
        const options = {
            allowBlank: false,
            type: 'email'
        };
        const result = validateFormat(email, options);
        return result=== true?"": get(result, "type");
    }),
    companyError: Ember.computed('model.company', function() {
        const company = get(this, 'model.company');
        let options = {
            min: 3,
            max: 10
        };
        const result1 = validateLength(company, options);
        options = {
            regex: /[A-Z][a-z]{4,9}/
        };
        const result2 = validateFormat(company, options);
        let ret = "";
        if(result1 !== true) {
            ret = get(result1, 'type');
        }
        if(result2 !== true) {
            ret = `${ret}; ${get(result2, 'type')}`;
        }
        return ret;
    }),
    ageError: Ember.computed('model.age', function() {
        const age = get(this, 'model.age');
        const options = {
            allowString: true,
            integer: true,
            positive: true,
            gt: 0,
            lte: 100
        };
        const result = validateNumber(age, options);
        return result === true?"": get(result, 'type');
    }),
    wageError: Ember.computed('model.wage', function() {
        const wage = get(this, 'model.wage');
        const options = {
            allowString: true,
            positive: true,
            gt: 0,
            lte: 1000
        };
        const result = validateNumber(wage, options);
        return result === true?"": get(result, 'type');
    }),
    activeError: Ember.computed('model.active', function() {
        const active = get(this, 'model.active');
        if(active === undefined) return "must be boolean";
        return  active.toLowerCase()==="true"? "": "must be boolean";
    }),
    activitiesError: Ember.computed('model.activities', function() {
        const activities = get(this, 'model.activities');
        // debugger;
        if(activities === undefined) return "select at least one activity";
        return activities.length === 0? "select at least one activity" : "";
    }),
    hasErrors: Ember.computed('fnameError','model.lname', 'model.country',
                              'model.city', 'model.plz', 'model.email', 
                              'model.age', 'model.wage', 'model.active', 'model.activities', function() {
        const fnameError = get(this, 'fnameError'); 
        const lnameError = get(this, 'lnameError');
        const countryError = get(this, 'countryError');
        const cityError = get(this, 'cityError');
        const plzError = get(this, 'plzError');
        const emailError = get(this, 'emailError');
        const ageError = get(this, 'ageError');
        const wageError = get(this, 'wageError');
        const activeError = get(this, 'activeError');
        const activitiesError = get(this, 'activitiesError');
        if(fnameError === "" && lnameError === "" && countryError === "" && 
          cityError === "" && plzError === "" && emailError === "" &&
          ageError === "" && wageError === "" && activeError === "" && activitiesError === "") return null;
        return true;
    }),
    areFieldsEmpty: Ember.computed('model.fname','model.lname', 'model.country',
    'model.city', 'model.plz', 'model.email', 
    'model.age', 'model.wage', 'model.active', 'model.activities', function() {
        const fname = get(this, 'model.fname');
        const lname = get(this, 'model.lname');
        const country = get(this, 'model.country');
        const city = get(this, 'model.city');
        const plz = get(this, 'model.plz');
        const email = get(this, 'model.email');
        const age = get(this, 'model.age');
        const wage = get(this, 'model.wage');
        const active = get(this, 'model.active');
        const activities = get(this, 'model.activities');
        if(fname === "" && lname === "" && country === "" &&
           city === "" && plz === "" && email === "" && 
           age === "" && wage === "" && active === "" && (activities === undefined || activities.length === 0)) {
               return true;   
        }
        return null;
    }),
    getValidationResult(fieldValue, options= {}) {
        const result = validateLength(fieldValue, options);
        return result=== true?"": get(result, "type");

    },
    init() {
        set(this, 'activityList', ["Reading", "Writing", "Speaking", "Listening", "Swimming"]);
    }, 
    clearFields() {
        set(this, 'model.fname', '');
        set(this, 'model.lname', '');
        set(this, 'model.country', '');
        set(this, 'model.city', '');
        set(this, 'model.plz', '');
        set(this, 'model.email', '');
        set(this, 'model.company', '');
        set(this, 'model.age', '');
        set(this, 'model.wage', '');
        set(this, 'model.active', '');
        set(this, 'model.activities', []);
    }, 
    actions: {
        async createWorker() {
            await get(this, 'model').save();
            // const model = this.modelFor('simple-workers.create');
            // await model.save();
            this.transitionToRoute('simple-workers');
        }, 
        clearFields() {
            this.clearFields();
        }, 
        cancelCreateWorker() {
            this.clearFields();
            this.transitionToRoute('simple-workers');
        }
    }
});
