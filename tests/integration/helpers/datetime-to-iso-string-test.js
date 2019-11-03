import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | datetime-to-iso-string', function(hooks) {
  setupRenderingTest(hooks);

  test('can get iso string', async function(assert) {
    const value = new Date('Aug 31 2007 08:07:01 GMT-0500');

    this.set('value', value);

    await render(hbs`{{datetime-to-iso-string value}}`);

    assert.equal(this.element.textContent.trim(), '2007-08-31T13:07:01.000Z');
  });
});
