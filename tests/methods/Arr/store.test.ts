import { append } from '@method/Arr/append'
import { prepend } from '@method/Arr/prepend'
import { set } from '@method/Arr/set'

describe('testing adding values to array', () => {
  it('should be able to append values to the end of array', () => {
    const arr = [1, 2, 3]
    expect(append(arr, 4)).toStrictEqual([...arr, 4])
    expect(append(arr, 'test')).toStrictEqual([...arr, 'test'])
  })

  it('should be able to prepend value to the array', () => {
    const arr = [1, 2, 3]
    expect(prepend(arr, 4)).toStrictEqual([4, ...arr])
    expect(prepend(arr, 'test')).toStrictEqual(['test', ...arr])
  })

  it('should be able to set value at specified index', () => {
    expect(set([1, 2, 3], 3, 1)).toStrictEqual([1, 3, 3])
    expect(set([1, 2, 3], 'test', 4)).toStrictEqual([1, 2, 3, undefined, 'test'])
  })

  it('should replace value at index if needed', () => {
    expect(set([1, 2, 3], 3, 1, false)).toStrictEqual([1, 2, 3])
    expect(set([1, 2, 3], 3, 1)).toStrictEqual([1, 3, 3])
    expect(set([1, 2, 3], 'test', 1)).toStrictEqual([1, 'test', 3])
  })
})
