import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | chartist-bar-example', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:chartist-bar-example');
    assert.ok(controller);
  });
});
