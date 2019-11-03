import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | datetime-to-utc-string', function(hooks) {
  setupRenderingTest(hooks);

  test('can get utc string', async function(assert) {
    const value = new Date(2007, 7, 31, 8, 7, 1, 653);

    this.set('value', value);

    await render(hbs`{{datetime-to-utc-string value}}`);

    assert.equal(this.element.textContent.trim(), 'Fri, 31 Aug 2007 13:07:01 GMT');
  });
});
