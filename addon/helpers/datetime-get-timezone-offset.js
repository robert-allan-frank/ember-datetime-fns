import { helper } from '@ember/component/helper';

/**
 * Return the timezone offset.
 *
 * @param {Object} value The date time value.
 */
export function dateTimeGetTimezoneOffset([value]) {
  return value.getTimezoneOffset();
}

export default helper(dateTimeGetTimezoneOffset);
