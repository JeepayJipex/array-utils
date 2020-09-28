import { append } from '@method/store/append'
import { prepend } from '@method/store/prepend'
import { setAtIndex } from '@method/store/set'
import { setWhere, setWhereFirst, setWhereLast } from '@method/store/set-where'

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
    expect(setAtIndex([1, 2, 3], 3, 1)).toStrictEqual([1, 3, 3])
    expect(setAtIndex([1, 2, 3], 'test', 4)).toStrictEqual([1, 2, 3, undefined, 'test'])
  })

  it('should replace value at index if needed', () => {
    expect(setAtIndex([1, 2, 3], 3, 1, false)).toStrictEqual([1, 2, 3])
    expect(setAtIndex([1, 2, 3], 3, 1)).toStrictEqual([1, 3, 3])
    expect(setAtIndex([1, 2, 3], 'test', 1)).toStrictEqual([1, 'test', 3])
  })
})

describe('testing adding value with optionnal context', () => {
  it('should be able to replace value where value equals argument', () => {
    expect(setWhere([1, 2, 3], 2, '=', 4)).toStrictEqual([1, 4, 3])
    expect(setWhere([1, 'two', 'three'], 'two', '=', 'four')).toStrictEqual([1, 'four', 'three'])
    expect(setWhere([1, 2, 3, { a: 'b' }], { a: 'b' }, '=', 1)).toStrictEqual([1, 2, 3, 1])
  })

  it('should be able to replace only first occurence of value', () => {
    expect(setWhereFirst([1, 'two', 'three', 'two'], 'two', '=', 'four')).toStrictEqual([1, 'four', 'three', 'two'])
    expect(setWhereFirst([1, 2, 'three', 4, 'three', 5], 'three', '=', 'four')).toStrictEqual([1, 2, 'four', 4, 'three', 5])
    expect(setWhereFirst([1, 2, 3, 4, 5, 6], 7, '=', 'four')).toStrictEqual([1, 2, 3, 4, 5, 6])
  })

  it('should be able to replace last occurence of value', () => {
    expect(setWhereLast([1, 2, 3, 2, 3, 2], 2, '=', 4)).toStrictEqual([1, 2, 3, 2, 3, 4])
    expect(setWhereLast([1, 2, 3, 2, 3, 2], 2, '=', 4)).toStrictEqual([1, 2, 3, 2, 3, 4])
  })
})
