import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | bootstrap-example/example10', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:bootstrap-example/example10');
    assert.ok(route);
  });
});
