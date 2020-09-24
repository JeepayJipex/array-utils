import { unset } from '@method/Arr/unset'

describe('testing removing values from array', () => {
  it('should be able to unset value', () => {
    expect(unset([1, 2, 3], 1)).toStrictEqual([1, 3])
    expect(unset([1, 2, 3], 1, { preserveIndexes: true })).toStrictEqual([1, null, 3])
    expect(unset([1, 2, 3], 1, { returnNull: false })).toStrictEqual([1, undefined, 3])
    expect(unset(['one', 'two', 'three'], 4)).toStrictEqual(['one', 'two', 'three'])
    expect(unset(['one', 'two', 'three'], -1)).toStrictEqual(['one', 'two', 'three'])
  })
})
