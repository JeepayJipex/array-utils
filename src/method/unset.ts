import { unsetOptions } from '@interfaces/unset-options'

/**
 * Remove value at specified index. If specified, can preserve indexes and replace de value by either null or undefined
 * @param arr
 * @param index
 * @param options
 */
export function unset<T>(arr: Array<T>, index: number): Array<T>
export function unset<T>(arr: Array<T>, index: number, options: unsetOptions): Array<T | null | undefined>
export function unset<T> (arr: Array<T>, index: number, options: unsetOptions = { preserveIndexes: false, returnNull: true }): Array<T | null | undefined> {
  const { preserveIndexes = true, returnNull = true } = options as unsetOptions
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
