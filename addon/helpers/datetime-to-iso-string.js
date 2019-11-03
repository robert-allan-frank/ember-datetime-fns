import { helper } from '@ember/component/helper';

/**
 * Return the iso string.
 *
 * @param {Object} value The date time value.
 */
export function dateTimeToISOString([value]) {
  return value.toISOString();
}

export default helper(dateTimeToISOString);
