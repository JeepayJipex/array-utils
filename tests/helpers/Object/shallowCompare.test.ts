import { shallowCompare } from '@helpers/Object/shallowCompare'

describe('testing shallow compare', () => {
  it('should correctly compare simple types', () => {
    expect(shallowCompare(1, 2)).toBe(false)
    expect(shallowCompare(1, 1)).toBe(true)
    expect(shallowCompare('a', 'b')).toBe(false)
    expect(shallowCompare('a', 'a')).toBe(true)
    expect(shallowCompare([1, 2, 3, 'a'], [1, 2, 3, 'b'])).toBe(false)
    expect(shallowCompare([1, 2, 3, 'a'], [1, 2, 4, 'b'])).toBe(false)
    expect(shallowCompare([1, 2, 3, 'a'], [1, 2, 3, 'a'])).toBe(true)
    expect(shallowCompare(true, true)).toBe(true)
    expect(shallowCompare(true, false)).toBe(false)
  })

  it('should correctly compare objects', () => {
    expect(shallowCompare({ a: 'a', b: 'b' }, { a: 'a', b: 'b' })).toBe(true)
    expect(shallowCompare({ a: 'a', b: 'b' }, { a: 'a', b: 'b', c: 'c' })).toBe(false)
    expect(shallowCompare({ a: 'a', b: 'b', c: 'c' }, { a: 'a', b: 'b' })).toBe(false)
    expect(shallowCompare({ a: 'a', b: 'b', c: 'c' }, { a: 'a', b: 'b', c: 'a' })).toBe(false)
    expect(shallowCompare({ a: 'a', b: 'b', c: 'c', d: null }, { a: 'a', b: 'b', c: 'c' })).toBe(false)
  })
})
