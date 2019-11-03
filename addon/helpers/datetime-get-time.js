import { helper } from '@ember/component/helper';

/**
 * Return the milliseconds since the unix epoch.
 *
 * @param {Object} value The date time value.
 */
export function dateTimeGetTime([value]) {
  return value.getTime();
}

export default helper(dateTimeGetTime);
