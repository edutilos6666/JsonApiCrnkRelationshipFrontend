import Controller from '@ember/controller';
import { get, set } from '@ember/object';
import Ember from 'ember';
import Messages from 'ember-validators/messages';
import validateFormat from 'ember-validators/format';  //for email, regex 
import validateLength from 'ember-validators/length'; //for string length 
import validateNumber from 'ember-validators/number';  //for numbers 

export default Controller.extend({
    activityList: null,
    fnameError: Ember.computed('fname', function(){
        const fname = get(this, 'fname');
        const options = {
            min: 3,
            max: 10
        };
        return this.getValidationResult(fname, options);
    }),
    lnameError: Ember.computed('lname', function() {
        const lname = get(this, 'lname');
        const options = {
            min: 3, 
            max: 10
        };
        return this.getValidationResult(lname, options);
    }),
    countryError: Ember.computed('country', function() {
        const country = get(this, 'country');
        const options = {
            min: 3,
            max: 10
        };
        return this.getValidationResult(country, options);
    }),
    cityError: Ember.computed('city', function() {
        const city = get(this, 'city');
        const options = {
            min: 3,
            max: 10
        };
        return this.getValidationResult(city, options);
    }),
    plzError: Ember.computed('plz', function() {
        const plz = get(this, 'plz');
        const options = {
            min: 5,
            max: 10
        };
        return this.getValidationResult(plz, options);
    }),
    emailError: Ember.computed('email', function() {
        const email = get(this, 'email');
        const options = {
            allowBlank: false,
            type: 'email'
        };
        const result = validateFormat(email, options);
        return result=== true?"": get(result, "type");
    }),
    companyError: Ember.computed('company', function() {
        const company = get(this, 'company');
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
    ageError: Ember.computed('age', function() {
        const age = get(this, 'age');
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
    wageError: Ember.computed('wage', function() {
        const wage = get(this, 'wage');
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
        const active = `${get(this, 'model.active')}`;
        if(active === undefined) return "must be boolean";
        if(active.toLowerCase()==="true" || active.toLowerCase() === "false")
          return  "";
        else return  "must be boolean";
    }),
    activitiesError: Ember.computed('activities', function() {
        const activities = get(this, 'activities');
        // debugger;
        if(activities === undefined) return "select at least one activity";
        return activities.length === 0? "select at least one activity" : "";
    }),
    hasErrors: Ember.computed('fnameError','model.lname', 'model.country',
                              'model.city', 'model.plz', 'model.email', 'model.company',
                              'model.age', 'model.wage', 'model.active', 'model.activities', function() {
        const fnameError = get(this, 'fnameError'); 
        const lnameError = get(this, 'lnameError');
        const countryError = get(this, 'countryError');
        const cityError = get(this, 'cityError');
        const plzError = get(this, 'plzError');
        const emailError = get(this, 'emailError');
        const companyError = get(this, 'companyError');
        const ageError = get(this, 'ageError');
        const wageError = get(this, 'wageError');
        const activeError = get(this, 'activeError');
        const activitiesError = get(this, 'activitiesError');
        if(fnameError === "" && lnameError === "" && countryError === "" && 
          cityError === "" && plzError === "" && emailError === "" && companyError === "" &&
          ageError === "" && wageError === "" && activeError === "" && activitiesError === "") return null;
        return true;
    }),
    areFieldsEmpty: Ember.computed('fname','lname', 'country',
    'city', 'plz', 'email', 
    'age', 'wage', 'active', 'activities', function() {
        const fname = get(this, 'fname');
        const lname = get(this, 'lname');
        const country = get(this, 'country');
        const city = get(this, 'city');
        const plz = get(this, 'plz');
        const email = get(this, 'email');
        const age = get(this, 'age');
        const wage = get(this, 'wage');
        const active = get(this, 'active');
        const activities = get(this, 'activities');
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
        set(this, 'fname', '');
        set(this, 'lname', '');
        set(this, 'country', '');
        set(this, 'city', '');
        set(this, 'plz', '');
        set(this, 'email', '');
        set(this, 'company', '');
        set(this, 'age', '');
        set(this, 'wage', '');
        set(this, 'active', '');
        set(this, 'activities', []);
    }, 
    actions: {
        async createWorker() {
            await get(this, 'model').save();
            // const model = this.modelFor('simple-workers.create');
            // await save();
            const simpleWorker = await this.store.createRecord('simple-worker', {
                fname: get(this, 'fname'),
                lname: get(this, 'lname'),
                country: get(this, 'country'),
                city: get(this, 'city'),
                plz: get(this, 'plz'),
                email: get(this, 'email'),
                company: get(this, 'company'),
                age: get(this, 'age'),
                wage: get(this, 'wage'),
                active: get(this, 'active'),
                activities: get(this, 'activities')
            });
            await simpleWorker.save();
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
