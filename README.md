[![Build Status](https://travis-ci.org/pelevesque/has_prohibited_substring.svg?branch=master)](https://travis-ci.org/pelevesque/has_prohibited_substring)
[![Coverage Status](https://coveralls.io/repos/github/pelevesque/has_prohibited_substring/badge.svg?branch=master)](https://coveralls.io/github/pelevesque/has_prohibited_substring?branch=master)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

# has_prohibited_substring

Checks if a string has a prohibited substring.

## Related Packages

https://github.com/pelevesque/has_required_substrings  
https://github.com/pelevesque/has_required_substrings_at_indexes  
https://github.com/pelevesque/has_prohibited_substring_at_indexes   
https://github.com/pelevesque/has_required_substrings_after_sums  
https://github.com/pelevesque/has_prohibited_substring_after_sums  

## Node Repository

https://www.npmjs.com/package/@pelevesque/has_prohibited_substring

## Installation

`npm install @pelevesque/has_prohibited_substring`

## Tests

### Standard Style & Unit Tests

`npm test`

### Unit Tests & Coverage

`npm run cover`

## Usage

### Parameters

```js
str                       (required)
prohibitedSubstrings      (required)
allowLastSubstringToBleed (optional) default = false
```

### Requiring

```js
const hasProhibitedSubstring = require('@pelevesque/has_prohibited_substring')
```

### Basic Usage

`prohibitedSubstrings` is an array of substrings. `true` is returned if at least
one substring is found.

```js
const str = 'abcde'
const prohibitedSubstrings = ['f']
const result = hasProhibitedSubstring(str, prohibitedSubstrings)
// result === false
```

```js
const str = 'abcde'
const prohibitedSubstrings = ['a']
const result = hasProhibitedSubstring(str, prohibitedSubstrings)
// result === true
```

```js
const str = 'abcde'
const prohibitedSubstrings = ['a', 'b', 'f']
const result = hasProhibitedSubstring(str, prohibitedSubstrings)
// result === true
```

```js
const str = 'abcde'
const prohibitedSubstrings = ['a', 'b', 'c']
const result = hasProhibitedSubstring(str, prohibitedSubstrings)
// result === true
```

```js
const str = 'a man a plan a canal'
const prohibitedSubstrings = ['man', 'fly', 'bee']
const result = hasProhibitedSubstring(str, prohibitedSubstrings)
// result === true
```

### Options

#### allowLastSubstringToBleed

The `allowLastSubstringToBleed` option is `false` by default. It it used when you want
to allow the last substring to be incomplete if the string is too short.
In the following example, the last substring `canal` starts at the correct index,
but remains incomplete since the string ends. Normally this would return `false`.
With `allowLastSubstringToBleed` set to `true`, it returns `true`.

```js
const str = 'a man a plan a c'
const prohibitedSubstrings = ['canal']
const allowLastSubstringToBleed = true
const result = hasProhibitedSubstring(str, prohibitedSubstrings, allowLastSubstringToBleed)
// result === true
```

##### options style

For style compatibility with related packages like `has_required_substrings_after_sums`,
it is possible to set `allowLastSubstringToBleed` using an options style.

```js
const str = 'a man a plan a c'
const prohibitedSubstrings = ['canal']
const allowLastSubstringToBleed = true
const result = hasProhibitedSubstring(str, prohibitedSubstrings, {
  allowLastSubstringToBleed: allowLastSubstringToBleed
})
// result === true
```
