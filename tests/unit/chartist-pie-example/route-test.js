import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | chartist-pie-example', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:chartist-pie-example');
    assert.ok(route);
  });
});
