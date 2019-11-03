import { helper } from '@ember/component/helper';

/**
 * Return the utc month of year.
 *
 * @param {Object} value The date time value.
 */
export function dateTimeGetUTCMonth([value]) {
  return value.getUTCMonth();
}

export default helper(dateTimeGetUTCMonth);
