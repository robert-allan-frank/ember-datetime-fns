import { helper } from '@ember/component/helper';

/**
 * Return the minutes of hour.
 *
 * @param {Object} value The date time value.
 */
export function dateTimeGetMinutes([value]) {
  return value.getMinutes();
}

export default helper(dateTimeGetMinutes);
