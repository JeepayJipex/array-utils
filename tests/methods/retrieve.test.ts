import { get } from '@method/get'
import { getWhere } from '@method/get-where'

describe('testing values retrieval from array', () => {
  describe('testing get method', () => {
    it('should be able to return item at specified index', () => {
      const arr: Array<number> = [1, 2, 3]

      expect(get(arr, 0)).toBe(arr[0])
      expect(get(arr, 1)).toBe(arr[1])
      expect(get(arr, 2)).toBe(arr[2])
    })

    it('should not fail and return null if index doesnt exist in array', () => {
      expect(get([], 0)).toBe(null)
      expect(get([1, 2, 3], 150)).toBe(null)
      expect(() => get([], 0)).not.toThrow()
    })

    it('should be able to return a default value', () => {
      expect(get([], 0, 123)).toBe(123)
      expect(get([], 125, 'returned')).toBe('returned')
      expect(get([0, 'first', true], 125, 'returned')).toBe('returned')
      expect(get([0, 'first', true], 1025, { value: 'test' })).toStrictEqual({ value: 'test' })
    })
  })

  describe('testing getWhere method', () => {
    it('should be able to get normal type value', () => {
      expect(getWhere([1, 2, 3], '>', 2)).toStrictEqual([3])
      expect(getWhere([1, 2, 3], '<', 2)).toStrictEqual([1])
      expect(getWhere([1, 2, 3], '<=', 2)).toStrictEqual([1, 2])
      expect(getWhere([1, 2, 3], '>=', 2)).toStrictEqual([2, 3])
    })
  })
})
