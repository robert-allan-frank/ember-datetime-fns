import { helper } from '@ember/component/helper';

/**
 * Return the number of milliseconds since January 1, 1970 00:00:00 UTC.
 */
export function dateTimeNow() {
  return Date.now();
}

export default helper(dateTimeNow);
