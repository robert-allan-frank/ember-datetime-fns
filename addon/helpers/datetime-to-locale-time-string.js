import { helper } from '@ember/component/helper';

/**
 * Get the locale formatted time.
 *
 * @param {string} locale The BCP 47 locale.
 * @param {Object} value The date value.
 * @param {Object} hash The optional hash of options.
 */
export function dateTimeToLocaleTimeString([locale, value, hash = {}]) {
  return value.toLocaleTimeString(locale, hash);
}

export default helper(dateTimeToLocaleTimeString);
