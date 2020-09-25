import { getAtIndex } from '@method/get'
import { getWhere, getWhereFirst, getWhereLast } from '@method/get-where'

describe('testing values retrieval from array', () => {
  describe('testing get method', () => {
    it('should be able to return item at specified index', () => {
      const arr: Array<number> = [1, 2, 3]

      expect(getAtIndex(arr, 0)).toBe(arr[0])
      expect(getAtIndex(arr, 1)).toBe(arr[1])
      expect(getAtIndex(arr, 2)).toBe(arr[2])
    })

    it('should not fail and return null if index doesnt exist in array', () => {
      expect(getAtIndex([], 0)).toBe(null)
      expect(getAtIndex([1, 2, 3], 150)).toBe(null)
      expect(() => getAtIndex([], 0)).not.toThrow()
    })

    it('should be able to return a default value', () => {
      expect(getAtIndex([], 0, 123)).toBe(123)
      expect(getAtIndex([], 125, 'returned')).toBe('returned')
      expect(getAtIndex([0, 'first', true], 125, 'returned')).toBe('returned')
      expect(getAtIndex([0, 'first', true], 1025, { value: 'test' })).toStrictEqual({ value: 'test' })
    })
  })

  describe('testing getWhere method', () => {
    it('should be able to get elements that matches comparison', () => {
      expect(getWhere([1, 2, 3], '>', 2)).toStrictEqual([3])
      expect(getWhere([1, 2, 3], '<', 2)).toStrictEqual([1])
      expect(getWhere([1, 2, 3], '<=', 2)).toStrictEqual([1, 2])
      expect(getWhere([1, 2, 3], '>=', 2)).toStrictEqual([2, 3])
      expect(getWhere(['bike', 'blue', 'flower'], 'like', 'ike')).toStrictEqual(['bike'])
      expect(getWhere(['bike', 'blue', 'blueberry'], 'like', 'blue')).toStrictEqual(['blue', 'blueberry'])
      expect(getWhere(['bike', 'blue', 'blueberry'], 'like', 'none')).toStrictEqual([])
      expect(getWhere(['bike', 'blue', 'flower'], 'ilike', 'IKE')).toStrictEqual(['bike'])
      expect(getWhere(['bike', 'blue', 'blueberry'], 'ilike', 'BlUe')).toStrictEqual(['blue', 'blueberry'])
      expect(getWhere(['bike', 'blue', 'blueberry'], 'ilike', 'none')).toStrictEqual([])
    })

    it('should be able to return first element that match comparison', () => {
      expect(getWhereFirst([1, 2, 1, 3], '>', 2)).toBe(3)
      expect(getWhereFirst([1, 2, 3, 2], '<', 2)).toBe(1)
      expect(getWhereFirst([2, 1, 2, 3], '<=', 2)).toBe(2)
      expect(getWhereFirst([1, 2, 3, 2, 3], '>=', 2)).toBe(2)
      expect(getWhereFirst(['bike', 'blue', 'flower'], 'like', 'l')).toStrictEqual('blue')
      expect(getWhereFirst(['bike', 'blue', 'flower'], 'ilike', 'L')).toStrictEqual('blue')
    })

    it('should be able to return last element that match comparison', () => {
      expect(getWhereLast([3, 2, 1, 5, 3], '>', 2)).toBe(3)
      expect(getWhereLast([0, 2, 3, 1], '<', 2)).toBe(1)
      expect(getWhereLast([2, 1, 2, 3, 4, 2], '<=', 2)).toBe(2)
      expect(getWhereLast([1, 2, 3, 2, 5, 2], '>=', 2)).toBe(2)
      expect(getWhereLast(['bike', 'blue', 'flower'], 'like', 'l')).toStrictEqual('flower')
      expect(getWhereLast(['bike', 'blue', 'flower'], 'ilike', 'L')).toStrictEqual('flower')
    })
  })
})
