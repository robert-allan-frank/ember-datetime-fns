import { helper } from '@ember/component/helper';

/**
 * Return the milliseconds of second.
 *
 * @param {Object} value The date time value.
 */
export function dateTimeGetMilliseconds([value]) {
  return value.getMilliseconds();
}

export default helper(dateTimeGetMilliseconds);
