import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | bootstrap-example/example6', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:bootstrap-example/example6');
    assert.ok(controller);
  });
});
