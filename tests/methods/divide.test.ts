import { divideAtIndex, divideAtIndexes } from '@method/divide/divide'

describe('testing divide methods', () => {
  it('should be able to divide at specified index', () => {
    expect(divideAtIndex([1, 2, 3, 4, 5, 6, 7], 3)).toStrictEqual([[1, 2, 3], [4, 5, 6, 7]])
  })

  it('should be able to divide at multiple indexes', () => {
    expect(divideAtIndexes([1, 2, 3, 4, 5, 6, 7, 8], [2, 4, 6])).toStrictEqual([[1, 2], [3, 4, 5, 6], [7, 8]])
  })
})
