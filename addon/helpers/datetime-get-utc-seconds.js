import { helper } from '@ember/component/helper';

/**
 * Return the utc seconds of minute.
 *
 * @param {Object} value The date time value.
 */
export function dateTimeGetUTCSeconds([value]) {
  return value.getUTCSeconds();
}

export default helper(dateTimeGetUTCSeconds);
