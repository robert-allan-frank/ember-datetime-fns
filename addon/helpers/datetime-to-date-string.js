import { helper } from '@ember/component/helper';

/**
 * Return the date string.
 *
 * @param {Object} value The date time value.
 */
export function dateTimeToDateString([value]) {
  return value.toDateString();
}

export default helper(dateTimeToDateString);
