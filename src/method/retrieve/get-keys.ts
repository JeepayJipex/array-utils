import { operators } from '@helpers/Operators'
import { ComparisonOperators as ComparisonOperator } from '@custom-types/comparison-operators'

/**
 * Gets keys where items satisfy the condition passed
 * @template T Types of values in array
 * @template U Type of compared value passed
 * @param arr The array to search in
 * @param operator the operator to use for the search
 * @param value the value to compare with
 * @returns keys where value satisfy the condition
 */
export function getKeysWhere<T, U> (arr: Array<T>, operator: ComparisonOperator, value: U): Array<number> {
  let indexes: number[] = []
  arr.forEach((item, index) => {
    if (operators[operator](item, value)) {
      indexes = [...indexes, index]
    }
  })
  return indexes
}

/**
 * Gets first key where item satisfy the condition passed
 * @template T Types of items in array
 * @template U Type of compared value passed
 * @param arr The array to search in
 * @param operator the operator to use for the search
 * @param value the value to compare with
 * @returns first key where first item satisfy the condition
 */
export function getKeyWhereFirst<T, U> (arr: Array<T>, operator: ComparisonOperator, value: U): number {
  return arr.findIndex(item => operators[operator](item, value))
}

/**
 * Gets last key where item satisfy the condition passed
 * @template T Types of items in array
 * @template U Type of compared value passed
 * @param arr The array to search in
 * @param operator the operator to use for the search
 * @param value the value to compare with
 * @returns last key where first item satisfy the condition
 */
export function getKeyWhereLast<T, U> (arr: Array<T>, operator: ComparisonOperator, value: U): number {
  for (let i = arr.length - 1; i > -1; i--) {
    if (operators[operator](arr[i], value)) {
      return i
    }
  }
  return -1
}
