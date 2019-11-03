import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | datetime-get-milliseconds', function(hooks) {
  setupRenderingTest(hooks);

  test('can get milliseconds of second', async function(assert) {
    const value = new Date(2007, 7, 31, 8, 7, 1, 653);

    this.set('value', value);

    await render(hbs`{{datetime-get-milliseconds value}}`);

    assert.equal(this.element.textContent.trim(), '653');
  });
});
