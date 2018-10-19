import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.JSONAPIAdapter.extend({
    host: 'http://localhost:9090',
    namespace: 'api',
    ajax(url, method, hash) {
        hash.crossDomain = true;
        return this._super(url, method, hash);
    }
    // namespace: 'api',
	// host: ENV.APP.apiURL,
	// headers: {
	// 	'X-Requested-With': 'XMLHttpRequest'
	// },
	// ajax(url, method, hash) {
	// 	if (ENV.APP.usingCors) {
	// 		if (hash === undefined) { hash = {}; }
 
	// 		hash.crossDomain = true;
 
	// 		if (ENV.APP.corsWithCreds) {
	// 			hash.xhrFields = { withCredentials: true };
	// 		}
	// 	}
	// }
});
