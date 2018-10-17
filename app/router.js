import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('hibernate-workers');
  this.route('workers');
  this.route('hibernate-university-students');
  this.route('hibernate-student', {path: '/:student_id'});
  this.route('chartist-bar-example');
  this.route('chartist-pie-example');
  this.route('chartist-line-example');
});

export default Router;
