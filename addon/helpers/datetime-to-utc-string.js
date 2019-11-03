import { helper } from '@ember/component/helper';

/**
 * Return the utc string.
 *
 * @param {Object} value The date time value.
 */
export function dateTimeToUTCString([value]) {
  return value.toUTCString();
}

export default helper(dateTimeToUTCString);
