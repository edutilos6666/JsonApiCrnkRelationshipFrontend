import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
	host: 'http://localhost:9090/api',
	// that does not work anyways 
	// ajax(url, method, hash) {
	// 	hash.crossDomain = true;
	// 	hash.xhrFields = { // import line added
    //         withCredentials: true    // import line added       
    //     };
    //     console.log('DEBUG: inside RESTAdapter ajax call');
    //     return this._super(url, method, hash);
    // }

});
