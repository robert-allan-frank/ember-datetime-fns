import { helper } from '@ember/component/helper';

/**
 * Return the seconds of minute.
 *
 * @param {Object} value The date time value.
 */
export function dateTimeGetSeconds([value]) {
  return value.getSeconds();
}

export default helper(dateTimeGetSeconds);
