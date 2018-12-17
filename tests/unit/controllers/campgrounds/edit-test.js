import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | campgrounds/edit', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:campgrounds/edit');
    assert.ok(controller);
  });
});
