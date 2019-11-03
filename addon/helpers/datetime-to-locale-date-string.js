import { helper } from '@ember/component/helper';

/**
 * Get the locale formatted date.
 *
 * @param {string} locale The BCP 47 locale.
 * @param {Object} value The date value.
 * @param {Object} hash The optional hash of options.
 */
export function dateTimeToLocaleDateString([locale, value, hash = {}]) {
  return value.toLocaleDateString(locale, hash);
}

export default helper(dateTimeToLocaleDateString);
