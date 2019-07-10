/* global describe, it */
'use strict'

const expect = require('chai').expect
const hasProhibitedSubstring = require('../index')

describe('#hasProhibitedSubstring()', () => {
  describe('empty argument checks', () => {
    it('should return false when prohibitedSubstrings is an empty array', () => {
      const str = 'abcde'
      const prohibitedSubstrings = []
      const result = hasProhibitedSubstring(str, prohibitedSubstrings)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return false when str is empty', () => {
      const str = ''
      const prohibitedSubstrings = ['a', 'b', 'c']
      const result = hasProhibitedSubstring(str, prohibitedSubstrings)
      const expected = false
      expect(result).to.equal(expected)
    })
  })

  describe('single character substrings', () => {
    it('should return false when one of one substring is not found', () => {
      const str = 'abcde'
      const prohibitedSubstrings = ['f']
      const result = hasProhibitedSubstring(str, prohibitedSubstrings)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return true when one of one substring is found', () => {
      const str = 'abcde'
      const prohibitedSubstrings = ['a']
      const result = hasProhibitedSubstring(str, prohibitedSubstrings)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return false when none of many substrings are found', () => {
      const str = 'abcde'
      const prohibitedSubstrings = ['f', 'g', 'h']
      const result = hasProhibitedSubstring(str, prohibitedSubstrings)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return true when at least one of many substrings is found', () => {
      const str = 'abcde'
      const prohibitedSubstrings = ['a', 'g', 'h']
      const result = hasProhibitedSubstring(str, prohibitedSubstrings)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return true when all of many substrings are found', () => {
      const str = 'abcde'
      const prohibitedSubstrings = ['a', 'c', 'e']
      const result = hasProhibitedSubstring(str, prohibitedSubstrings)
      const expected = true
      expect(result).to.equal(expected)
    })
  })

  describe('multi character substrings', () => {
    it('should return false when one of one substring is not found', () => {
      const str = 'abcde'
      const prohibitedSubstrings = ['fgh']
      const result = hasProhibitedSubstring(str, prohibitedSubstrings)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return true when one of one substring is found', () => {
      const str = 'abcde'
      const prohibitedSubstrings = ['abc']
      const result = hasProhibitedSubstring(str, prohibitedSubstrings)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return false when none of many substrings are found', () => {
      const str = 'abcde'
      const prohibitedSubstrings = ['fgh', 'ghi', 'hij']
      const result = hasProhibitedSubstring(str, prohibitedSubstrings)
      const expected = false
      expect(result).to.equal(expected)
    })

    it('should return true when at least one of many substrings is found', () => {
      const str = 'abcde'
      const prohibitedSubstrings = ['abc', 'ghi', 'hij']
      const result = hasProhibitedSubstring(str, prohibitedSubstrings)
      const expected = true
      expect(result).to.equal(expected)
    })

    it('should return true when all of many substrings are found', () => {
      const str = 'abcde'
      const prohibitedSubstrings = ['abc', 'cde', 'e']
      const result = hasProhibitedSubstring(str, prohibitedSubstrings)
      const expected = true
      expect(result).to.equal(expected)
    })
  })

  describe('allowLastSubstringToBleed option', () => {
    it('should default to false', () => {
      const str = 'a big ma'
      const prohibitedSubstrings = ['machine']
      const result = hasProhibitedSubstring(str, prohibitedSubstrings)
      const expected = false
      expect(result).to.equal(expected)
    })

    describe('classic argument style', () => {
      it('should not allow last substring to bleed when set to false', () => {
        const str = 'a big ma'
        const prohibitedSubstrings = ['machine']
        const allowLastSubstringToBleed = false
        const result = hasProhibitedSubstring(str, prohibitedSubstrings, allowLastSubstringToBleed)
        const expected = false
        expect(result).to.equal(expected)
      })

      it('should allow last substring to bleed when set to true', () => {
        const str = 'a big ma'
        const prohibitedSubstrings = ['machine']
        const allowLastSubstringToBleed = true
        const result = hasProhibitedSubstring(str, prohibitedSubstrings, allowLastSubstringToBleed)
        const expected = true
        expect(result).to.equal(expected)
      })
    })

    describe('options style', () => {
      it('should not allow last substring to bleed when set to false', () => {
        const str = 'a big ma'
        const prohibitedSubstrings = ['machine']
        const allowLastSubstringToBleed = false
        const result = hasProhibitedSubstring(str, prohibitedSubstrings, {
          allowLastSubstringToBleed: allowLastSubstringToBleed
        })
        const expected = false
        expect(result).to.equal(expected)
      })

      it('should allow last substring to bleed when set to true', () => {
        const str = 'a big ma'
        const prohibitedSubstrings = ['machine']
        const allowLastSubstringToBleed = true
        const result = hasProhibitedSubstring(str, prohibitedSubstrings, {
          allowLastSubstringToBleed: allowLastSubstringToBleed
        })
        const expected = true
        expect(result).to.equal(expected)
      })
    })
  })
})
