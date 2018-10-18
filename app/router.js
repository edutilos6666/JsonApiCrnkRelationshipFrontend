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
  this.route('bootstrap-example', function() {
    this.route('example1');
    this.route('example2');
    this.route('example3');
    this.route('example4');
    this.route('example5');
    this.route('example6');
    this.route('example7');
    this.route('example8');
    this.route('example9');
    this.route('example10');
    this.route('example11');
  });
  this.route('simple-workers');
});

export default Router;
