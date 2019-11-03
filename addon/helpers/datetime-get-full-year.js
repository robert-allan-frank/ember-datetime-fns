import { helper } from '@ember/component/helper';

/**
 * Return the year.
 *
 * @param {Object} value The date time value.
 */
export function dateTimeGetFullYear([value]) {
  return value.getFullYear();
}

export default helper(dateTimeGetFullYear);
