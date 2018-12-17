import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Controller | campgrounds/new', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let controller = this.owner.lookup('controller:campgrounds/new');
    assert.ok(controller);
  });
});
