import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Helper | datetime-to-locale-date-string', function(hooks) {
  setupRenderingTest(hooks);

  test('can format date time as chicago', async function(assert) {
    const locale = 'en-US';
    const value = new Date(2007, 7, 31, 8, 7, 1, 653);
    const hash = {
      localeMatcher: 'best fit',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      timeZone: 'America/Chicago'
    };

    this.set('locale', locale);
    this.set('value', value);
    this.set('hash', hash);

    await render(hbs`{{datetime-to-locale-date-string locale value hash}}`);

    assert.equal(this.element.textContent.trim(), 'August 31, 2007');
  });
});
