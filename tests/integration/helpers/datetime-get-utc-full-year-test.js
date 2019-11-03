import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | datetime-get-utc-full-year', function(hooks) {
  setupRenderingTest(hooks);

  test('can get utc year', async function(assert) {
    const value = new Date('Aug 31 2007 08:07:01 GMT-0500');

    this.set('value', value);

    await render(hbs`{{datetime-get-utc-full-year value}}`);

    assert.equal(this.element.textContent.trim(), '2007');
  });
});
