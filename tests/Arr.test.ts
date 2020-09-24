import { get } from '@method/Arr/get';
import { append } from '@method/Arr/append';
import { prepend } from '@method/Arr/prepend';
import { set } from '@method/Arr/set';
import { unset } from '@method/Arr/unset';

describe('testing Arr methods', () => {

    describe('testing get method', () => {
        it('should be able to return item at specified index', () => {
            const arr: Array<number> = [1, 2, 3]
    
            expect(get(arr, 0)).toBe(arr[0])
            expect(get(arr, 1)).toBe(arr[1])
            expect(get(arr, 2)).toBe(arr[2])
        })
    
        it('should not fail and return null if index doesnt exist in array', () => {
            expect(get([], 0)).toBe(null)
            expect(() => get([], 0)).not.toThrow()
        })
    
        it('should be able to return a default value', () => {
            expect(get([], 0, 123)).toBe(123)
            expect(get([], 125, 'returned')).toBe('returned')
            expect(get([0, 'first', true], 125, 'returned')).toBe('returned')
            expect(get([0, 'first', true], 1025, {value: 'test'})).toStrictEqual({value: 'test'})
        })
    })

    describe('testing adding values method', () => {
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
            expect(set([1, 2, 3], 3, 1)).toStrictEqual([1,3,3])
            expect(set([1, 2, 3], 'test', 4)).toStrictEqual([1, 2, 3, undefined, 'test'])
        })

        it('should replace value at index if needed', () => {
            expect(set([1, 2, 3], 3, 1, false)).toStrictEqual([1,2,3])
            expect(set([1, 2, 3], 3, 1)).toStrictEqual([1,3,3])
            expect(set([1, 2, 3], 'test', 1)).toStrictEqual([1,'test',3])
        })
        
        it('should be able to unset value', () => {
            expect(unset([1, 2, 3], 1)).toStrictEqual([1, 3])
            expect(unset([1, 2, 3], 1, true)).toStrictEqual([1, null, 3])
            expect(unset([1, 2, 3], 1, true, false)).toStrictEqual([1, undefined, 3])
            expect(unset(['one', 'two', 'three'], 4)).toStrictEqual(['one', 'two', 'three'])
            expect(unset(['one', 'two', 'three'], -1)).toStrictEqual(['one', 'two', 'three'])
        })

    })
}) 