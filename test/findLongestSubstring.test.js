const findLongestSubstring = require('../exercises/findLongestSubstring');

describe('Longes Substring', () => {


  it('is a function', () => {
    expect(typeof findLongestSubstring).toEqual('function');
  });

  it('to find the longest substring of a given string', () => {
    expect(findLongestSubstring('0')).toBe(1);
    expect(findLongestSubstring('i')).toBe(1);
    expect(findLongestSubstring('it')).toBe(2);
    expect(findLongestSubstring('four')).toBe(4);
    expect(findLongestSubstring('mm')).toBe(1);
    expect(findLongestSubstring('rithmschool')).toBe(7); // rithmsc
    expect(findLongestSubstring('bbbbbbb')).toBe(1);
    expect(findLongestSubstring('thecatinthehat')).toBe(7); // hecatin
  })
})