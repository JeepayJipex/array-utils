import { ComparisonOperators } from '@custom-types/comparison-operators'
import { unsetOptions } from '@interfaces/unset-options'
import { getKeysWhere, getKeyWhereFirst, getKeyWhereLast } from '@method/retrieve/get-keys'
import { unset, unsetMultiple } from '@method/delete/unset'

/**
 * Unsets where items satisfies the condition
 * @template T Types present in array
 * @template U Type of comparison value passed
 * @param arr The array to search in
 * @param operator The comparison operator to use
 * @param value The value to compare with
 * @param options Options to either return null or undefined or strip array from unsetted indexes
 * @returns Array passed with unsetted items
 */
export function unsetWhere <T, U> (arr: Array<T>, operator: ComparisonOperators, value: U, options: unsetOptions = { preserveIndexes: false, returnNull: true }): Array<T|U|null|undefined> {
  const indexes: Array<number> = getKeysWhere(arr, operator, value)
  if (indexes.length === 0) {
    return arr
  }
  return unsetMultiple(arr, indexes, options)
}

/**
 * Unsets where items satisfies the condition
 * @template T Types present in array
 * @template U Type of comparison value passed
 * @param arr The array to search in
 * @param operator The comparison operator to use
 * @param value The value to compare with
 * @param options Options to either return null or undefined or strip array from unsetted indexes
 * @returns Array passed with unsetted items
 */
export function unsetWhereFirst<T, U> (arr: Array<T>, operator: ComparisonOperators, value: U, options: unsetOptions = { preserveIndexes: false, returnNull: true }): Array<T|U|null|undefined> {
  const index: number = getKeyWhereFirst(arr, operator, value)
  return unset(arr, index, options)
}

/**
 * Unsets where items satisfies the condition
 * @template T Types present in array
 * @template U Type of comparison value passed
 * @param arr The array to search in
 * @param operator The comparison operator to use
 * @param value The value to compare with
 * @param options Options to either return null or undefined or strip array from unsetted indexes
 * @returns Array passed with unsetted items
 */
export function unsetWhereLast<T, U> (arr: Array<T>, operator: ComparisonOperators, value: U, options: unsetOptions = { preserveIndexes: false, returnNull: true }): Array<T|U|null|undefined> {
  const index: number = getKeyWhereLast(arr, operator, value)
  return unset(arr, index, options)
}
