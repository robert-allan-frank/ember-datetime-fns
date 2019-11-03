import { helper } from '@ember/component/helper';

/**
 * Return the month of year.
 *
 * @param {Object} value The date time value.
 */
export function dateTimeGetMonth([value]) {
  return value.getMonth();
}

export default helper(dateTimeGetMonth);
