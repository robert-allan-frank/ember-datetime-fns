import { helper } from '@ember/component/helper';

/**
 * Return the day of month.
 *
 * @param {Object} value The date time value.
 */
export function dateTimeGetDate([value]) {
  return value.getDate();
}

export default helper(dateTimeGetDate);
