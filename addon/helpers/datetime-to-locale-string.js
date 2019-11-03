import { helper } from '@ember/component/helper';

/**
 * Get the locale formatted date and time.
 *
 * @param {string} locale The BCP 47 locale.
 * @param {Object} value The date value.
 * @param {Object} hash The optional hash of options.
 */
export function dateTimeToLocaleString([locale, value, hash = {}]) {
  return value.toLocaleString(locale, hash);
}

export default helper(dateTimeToLocaleString);
