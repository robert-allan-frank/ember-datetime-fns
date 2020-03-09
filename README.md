ember-datetime-fns
[![npm version](https://badge.fury.io/js/ember-datetime-fns.svg)](https://badge.fury.io/js/ember-datetime-fns)
[![Build Status](https://travis-ci.com/robert-allan-frank/ember-datetime-fns.svg?branch=develop)](https://travis-ci.com/robert-allan-frank/ember-datetime-fns)
[![codecov](https://codecov.io/gh/robert-allan-frank/ember-datetime-fns/branch/develop/graph/badge.svg)](https://codecov.io/gh/robert-allan-frank/ember-datetime-fns)
==============================================================================
This addon provides date and time helpers for Ember templates and components.

To install:

```sh
ember install ember-datetime-fns
```

Usage
------------------------------------------------------------------------------
* [`datetime-get-date`](#datetime-get-date)
* [`datetime-get-day`](#datetime-get-day)
* [`datetime-get-full-year`](#datetime-get-full-year)
* [`datetime-get-hours`](#datetime-get-hours)
* [`datetime-get-milliseconds`](#datetime-get-milliseconds)
* [`datetime-get-minutes`](#datetime-get-minutes)
* [`datetime-get-month`](#datetime-get-month)
* [`datetime-get-seconds`](#datetime-get-seconds)
* [`datetime-get-time`](#datetime-get-time)
* [`datetime-get-timezone-offset`](#datetime-get-timezone-offset)
* [`datetime-get-utc-date`](#datetime-get-utc-date)
* [`datetime-get-utc-day`](#datetime-get-utc-day)
* [`datetime-get-utc-full-year`](#datetime-get-utc-full-year)
* [`datetime-get-utc-hours`](#datetime-get-utc-hours)
* [`datetime-get-utc-minutes`](#datetime-get-utc-minutes)
* [`datetime-get-utc-month`](#datetime-get-utc-month)
* [`datetime-get-utc-seconds`](#datetime-get-utc-seconds)
* [`datetime-now`](#datetime-now)
* [`datetime-to-date-string`](#datetime-to-date-string)
* [`datetime-to-iso-string`](#datetime-to-iso-string)
* [`datetime-to-locale-date-string`](#datetime-to-locale-date-string)
* [`datetime-to-locale-string`](#datetime-to-locale-string)
* [`datetime-to-locale-time-string`](#datetime-to-locale-time-string)
* [`datetime-to-time-string`](#datetime-to-time-string)
* [`datetime-to-utc-string`](#datetime-to-utc-string)

#### `datetime-get-date`
Return the day of month. See [Date.getDate()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDate) for details on the Date.getDate() function.

```hbs
{{datetime-get-date value}}
```

#### `datetime-get-day`
Return the day of week. See [Date.getDay()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay) for details on the Date.getDay() function.

```hbs
{{datetime-get-day value}}
```

#### `datetime-get-full-year`
Return the year. See [Date.getFullYear()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear) for details on the Date.getFullYear() function.

```hbs
{{datetime-get-full-year value}}
```

#### `datetime-get-hours`
Return the hour of day. See [Date.getHours()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getHours) for details on the Date.getHours() function.

```hbs
{{datetime-get-hours value}}
```

#### `datetime-get-milliseconds of second`
Return the milliseconds of second. See [Date.getMilliseconds()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMilliseconds) for details on the Date.getMilliseconds() function.

```hbs
{{datetime-get-milliseconds value}}
```

#### `datetime-get-minutes`
Return the minutes of hour. See [Date.getMinutes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMinutes) for details on the Date.getMinutes() function.

```hbs
{{datetime-get-minutes value}}
```

#### `datetime-get-month`
Return the month of year. See [Date.getMonth()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth) for details on the Date.getMonth() function.

```hbs
{{datetime-get-month value}}
```

#### `datetime-get-seconds`
Return the seconds of minute. See [Date.getSeconds()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getSeconds) for details on the Date.getSeconds() function.

```hbs
{{datetime-get-seconds value}}
```

#### `datetime-get-time`
Return the milliseconds since the unix epoch. See [Date.getTime()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime) for details on the Date.getTime() function.

```hbs
{{datetime-get-time value}}
```

#### `datetime-get-timezone-offset`
Return the timezone offset. See [Date.getTimezoneOffset()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTimezoneOffset) for details on the Date.getTimezoneOffset() function.

```hbs
{{datetime-get-timezone-offset value}}
```

#### `datetime-get-utc-date`
Return the UTC day of month. See [Date.getUTCDate()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDate) for details on the Date.getUTCDate() function.

```hbs
{{datetime-get-utc-date value}}
```

#### `datetime-get-utc-day`
Return the UTC day of week. See [Date.getUTCDay()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCDay) for details on the Date.getUTCDay() function.

```hbs
{{datetime-get-utc-day value}}
```

#### `datetime-get-utc-full-year`
Return the UTC year. See [Date.getUTCFullYear()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCFullYear) for details on the Date.getUTCFullYear() function.

```hbs
{{datetime-get-utc-full-year value}}
```

#### `datetime-get-utc-hours`
Return the UTC hour of day. See [Date.getUTCHours()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCHours) for details on the Date.getUTCHours() function.

```hbs
{{datetime-get-utc-hours value}}
```

#### `datetime-get-utc-minutes`
Return the UTC minutes of hour. See [Date.getUTCMinutes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMinutes) for details on the Date.getUTCMinutes() function.

```hbs
{{datetime-get-utc-minutes value}}
```

#### `datetime-get-utc-month`
Return the UTC month of year. See [Date.getUTCMonth()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCMonth) for details on the Date.getUTCMonth() function.

```hbs
{{datetime-get-utc-month value}}
```

#### `datetime-get-utc-seconds`
Return the UTC seconds of minute. See [Date.getUTCSeconds()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getUTCSeconds) for details on the Date.getUTCSeconds() function.

```hbs
{{datetime-get-utc-seconds value}}
```

#### `datetime-now`
Returns the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC. See [Date.now()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now) for details on the Date.now() function.

```hbs
{{datetime-now}}
```

#### `datetime-to-date-string`
Return the date string. See [Date.toDateString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toDateString) for details on the Date.toDateString() function.

```hbs
{{datetime-to-date-string value}}
```

#### `datetime-to-iso-string`
Return the ISO string. See [Date.toISOString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString) for details on the Date.toISOString() function.

```hbs
{{datetime-to-iso-string value}}
```

#### `datetime-to-locale-date-string`
Return the locale formatted date. See [Date.toLocaleDateString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString) for details on the Date.toLocaleDateString() function.

```hbs
{{datetime-to-locale-date-string locale value (hash 
  "localeMatcher"="best fit" 
  "year"="numeric"
  "month"="long"
  "day"="numeric")
}}
```

#### `datetime-to-locale-string`
Return the locale formatted date and time. See [Date.toLocaleString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleString) for details on the Date.toLocaleString() function.

```hbs
{{datetime-to-locale-string locale value (hash 
  "localeMatcher"="best fit" 
  "year"="numeric"
  "month"="long"
  "day"="numeric",
  "hour"="numeric",
  "minute"="numeric",
  "second"="numeric",
  "hour12"=true)
}}
```

#### `datetime-to-locale-time-string`
Return the locale formatted time. See [Date.toLocaleTimeString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleTimeString) for details on the Date.toLocaleTimeString() function.

```hbs
{{datetime-to-locale-time-string locale value (hash 
  "localeMatcher"="best fit" 
  "hour"="numeric",
  "minute"="numeric",
  "second"="numeric",
  "hour12"=true)
}}
```

#### `datetime-to-time-string`
Return the time string. See [Date.toTimeString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toTimeString) for details on the Date.toTimeString() function.

```hbs
{{datetime-to-time-string value}}
```

#### `datetime-to-utc-string`
Return the UTC string. See [Date.toUTCString()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toUTCString) for details on the Date.toUTCString() function.

```hbs
{{datetime-to-utc-string value}}
```

Related Addons
------------------------------------------------------------------------------
* See [ember-array-fns](https://github.com/robert-allan-frank/ember-array-fns) for array based helpers.
* See [ember-intl-fns](https://github.com/robert-allan-frank/ember-intl-fns) for internationalization based helpers.
* See [ember-logic-fns](https://github.com/robert-allan-frank/ember-logic-fns) for logical based helpers.
* See [ember-math-fns](https://github.com/robert-allan-frank/ember-math-fns) for math based helpers.
* See [ember-number-fns](https://github.com/robert-allan-frank/ember-number-fns) for number based helpers.
* See [ember-string-fns](https://github.com/robert-allan-frank/ember-string-fns) for string based helpers.

Compatibility
------------------------------------------------------------------------------
* Ember.js v3.4 or above
* Ember CLI v2.13 or above
* Node.js v8 or above


Contributing
------------------------------------------------------------------------------
See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------
This project is licensed under the [MIT License](LICENSE.md).
