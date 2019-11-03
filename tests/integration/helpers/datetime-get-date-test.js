import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | datetime-get-date', function(hooks) {
  setupRenderingTest(hooks);

  test('can get day of month', async function(assert) {
    const value = new Date('Aug 31 2007 08:07:01 GMT-0500');

    this.set('value', value);

    await render(hbs`{{datetime-get-date value}}`);

    assert.equal(this.element.textContent.trim(), '31');
  });
});
