import { unsetOptions } from '@interfaces/unset-options'

/**
 * Remove value at specified index. If specified, can preserve indexes and replace de value by either null or undefined
 * @template T Types of the array
 * @param arr The array to search in
 * @param index The index at wich value should be removed
 * @param options Options to either keep indexes unchanged, and choose to replace by null|undefined
 * @returns Array after removed value or replaced by null|undefined
 */
export function unset<T>(arr: Array<T>, index: number): Array<T>
export function unset<T>(arr: Array<T>, index: number, options: unsetOptions): Array<T | null | undefined>
export function unset<T> (arr: Array<T>, index: number, options: unsetOptions = { preserveIndexes: false, returnNull: true }): Array<T | null | undefined> {
  const { preserveIndexes = false, returnNull = true } = options as unsetOptions
  if (!arr[index]) {
    return arr
  }
  if (!preserveIndexes) {
    return arr.filter((_, i) => i !== index)
  }
  return arr.map((value: T, i) => {
    if (i === index) {
      return returnNull ? null : undefined
    }
    return value
  })
}

/**
 * Unsets multiple items corresponding to passed keys
 * @template T Types of the array
 * @param arr The array to search in
 * @param indexes Array of indexes to unset
 * @param options Options to either keep indexes unchanged, and choose to replace by null|undefined
 * @returns Array after removed value or replaced by null|undefined
 */
export function unsetMultiple<T>(arr: Array<T>, indexes: Array<number>): Array<T>
export function unsetMultiple<T>(arr: Array<T>, indexes: Array<number>, options: unsetOptions): Array<T|null|undefined>
export function unsetMultiple<T> (arr: Array<T>, indexes: Array<number>, options: unsetOptions = { preserveIndexes: false, returnNull: true }): Array<T | null | undefined> {
  const { preserveIndexes = false, returnNull = true } = options as unsetOptions
  if (!preserveIndexes) {
    return arr.filter((_, i) => !indexes.includes(i))
  }
  return arr.map((value: T, i) => {
    if (indexes.includes(i)) {
      return returnNull ? null : undefined
    }
    return value
  })
}
