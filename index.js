'use strict'

const isObject = require('isobject')

function parseAllowLastSubstringToBleed (allowLastSubstringToBleed) {
  if (
    isObject(allowLastSubstringToBleed) &&
    typeof allowLastSubstringToBleed.allowLastSubstringToBleed !== 'undefined'
  ) {
    allowLastSubstringToBleed = allowLastSubstringToBleed.allowLastSubstringToBleed
  }
  return allowLastSubstringToBleed
}

module.exports = (str, prohibitedSubstrings, allowLastSubstringToBleed = false) => {
  if (str === '' || prohibitedSubstrings.length === 0) return false
  allowLastSubstringToBleed = parseAllowLastSubstringToBleed(allowLastSubstringToBleed)
  let hasProhibitedSubstring = false
  for (let i = 0, len = prohibitedSubstrings.length; i < len; i++) {
    if (str.includes(prohibitedSubstrings[i])) {
      hasProhibitedSubstring = true
      break
    }
  }
  if (!hasProhibitedSubstring && allowLastSubstringToBleed) {
    for (let i = 0, len = prohibitedSubstrings.length; i < len; i++) {
      for (let j = 1, len = prohibitedSubstrings[i].length; j < len; j++) {
        const substring = prohibitedSubstrings[i].substr(0, j)
        const target = str.substr(str.length - j, j)
        if (substring.localeCompare(target) === 0) {
          hasProhibitedSubstring = true
          break
        }
      }
    }
  }
  return hasProhibitedSubstring
}
