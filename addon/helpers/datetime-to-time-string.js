import { helper } from '@ember/component/helper';

/**
 * Return the time string.
 *
 * @param {Object} value The date time value.
 */
export function dateTimeToTimeString([value]) {
  return value.toTimeString();
}

export default helper(dateTimeToTimeString);
