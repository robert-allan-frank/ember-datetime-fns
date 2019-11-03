import { helper } from '@ember/component/helper';

/**
 * Return the hour of day.
 *
 * @param {Object} value The date time value.
 */
export function dateTimeGetHours([value]) {
  return value.getHours();
}

export default helper(dateTimeGetHours);
