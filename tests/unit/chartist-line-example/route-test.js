import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | chartist-line-example', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:chartist-line-example');
    assert.ok(route);
  });
});
