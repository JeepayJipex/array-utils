import { operators } from '@helpers/Operators'
import { ComparisonOperators as ComparisonOperator } from '@custom-types/comparison-operators'

/**
 * Gets where items satisfy the passed condition
 * @template T Types present in array
 * @template U Type of comparison value passed
 * @param arr The array to search in
 * @param operator The comparison operator to use
 * @param value The value to compare with
 * @returns items where comparison is true
 */
export function getWhere<T, U> (arr: Array<T>, operator: ComparisonOperator, value: U): Array<T|U> {
  return arr.filter(item => operators[operator](item, value))
}

/**
 * Gets where first item satisfy the passed condition
 * @template T Types present in array
 * @template U Type of comparison value passed
 * @param arr The array to search in
 * @param operator The comparison operator to use
 * @param value The value to compare with
 * @returns first item where comparison is true
 */
export function getWhereFirst<T, U> (arr: Array<T>, operator: ComparisonOperator, value: U): T|U|undefined {
  return arr.find(item => operators[operator](item, value))
}

/**
 * Gets last item that satisfy the passed condition
 * @template T Types present in array
 * @template U Type of comparison value passed
 * @param arr The array to search in
 * @param operator The comparison operator to use
 * @param value The value to compare with
 * @returns last item where comparison is true
 */
export function getWhereLast<T, U> (arr: Array<T>, operator: ComparisonOperator, value: U): T|U|undefined {
  return arr.reverse().find(item => operators[operator](item, value))
}
