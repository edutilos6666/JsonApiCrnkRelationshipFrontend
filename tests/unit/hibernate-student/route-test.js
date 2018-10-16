import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | hibernate-student', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:hibernate-student');
    assert.ok(route);
  });
});
