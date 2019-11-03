import { helper } from '@ember/component/helper';

/**
 * Return the utc day of week.
 *
 * @param {Object} value The date time value.
 */
export function dateTimeGetUTCDay([value]) {
  return value.getUTCDay();
}

export default helper(dateTimeGetUTCDay);
