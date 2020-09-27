import { unset, unsetMultiple } from '@method/delete/unset'

describe('testing removing values from array', () => {
  it('should be able to unset value', () => {
    expect(unset([1, 2, 3], 1)).toStrictEqual([1, 3])
    expect(unset([1, 2, 3], 1, { preserveIndexes: true })).toStrictEqual([1, null, 3])
    expect(unset([1, 2, 3], 1, { preserveIndexes: true, returnNull: false })).toStrictEqual([1, undefined, 3])
    expect(unset(['one', 'two', 'three'], 4)).toStrictEqual(['one', 'two', 'three'])
    expect(unset(['one', 'two', 'three'], -1)).toStrictEqual(['one', 'two', 'three'])
  })

  it('should be able to unset multiple values at specified keys', () => {
    expect(unsetMultiple([1, 2, 3, 4, 5, 6], [2, 4])).toStrictEqual([1, 2, 4, 6])
    expect(unsetMultiple([1, 2, 3, 4, 5, 6], [2, 4], { preserveIndexes: true })).toStrictEqual([1, 2, null, 4, null, 6])
  })
})
