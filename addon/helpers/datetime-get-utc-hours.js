import { helper } from '@ember/component/helper';

/**
 * Return the utc hour of day.
 *
 * @param {Object} value The date time value.
 */
export function dateTimeGetUTCHours([value]) {
  return value.getUTCHours();
}

export default helper(dateTimeGetUTCHours);
