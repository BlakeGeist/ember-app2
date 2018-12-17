import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | campgrounds/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:campgrounds/edit');
    assert.ok(route);
  });
});
