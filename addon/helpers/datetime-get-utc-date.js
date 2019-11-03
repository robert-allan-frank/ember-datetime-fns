import { helper } from '@ember/component/helper';

/**
 * Return the utc day of month.
 *
 * @param {Object} value The date time value.
 */
export function dateTimeGetUTCDate([value]) {
  return value.getUTCDate();
}

export default helper(dateTimeGetUTCDate);
