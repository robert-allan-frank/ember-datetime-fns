import { helper } from '@ember/component/helper';

/**
 * Return the day of week.
 *
 * @param {Object} value The date time value.
 */
export function dateTimeGetDay([value]) {
  return value.getDay();
}

export default helper(dateTimeGetDay);
