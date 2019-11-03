import { helper } from '@ember/component/helper';

/**
 * Return the utc year.
 *
 * @param {Object} value The date time value.
 */
export function dateTimeGetUTCFullYear([value]) {
  return value.getUTCFullYear();
}

export default helper(dateTimeGetUTCFullYear);
