import { helper } from '@ember/component/helper';

/**
 * Return the utc minutes of hour.
 *
 * @param {Object} value The date time value.
 */
export function dateTimeGetUTCMinutes([value]) {
  return value.getUTCMinutes();
}

export default helper(dateTimeGetUTCMinutes);
