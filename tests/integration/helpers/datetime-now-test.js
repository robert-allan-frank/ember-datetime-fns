import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | datetime-now', function(hooks) {
  setupRenderingTest(hooks);

  test('can get date now', async function(assert) {
    await render(hbs`{{datetime-now}}`);
    assert.ok(+this.element.textContent.trim() > 0);
  });
});
