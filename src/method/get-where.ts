import { operators } from '@helpers/Operators'
import { ComparisonOperators as ComparisonOperator } from '@custom-types/comparison-operators'

/**
 * Retrieve elements that matches comparison in the given array
 * @param arr The array to search inside
 * @param operator the comparison operator to use
 * @param value the value to compare with
 */
export function getWhere<T, U> (arr: Array<T>, operator: ComparisonOperator, value: U): Array<T|U> {
  return arr.filter(item => operators[operator](item, value))
}

/**
 * Retrieve the first element that matches comparison in the given array
 * @param arr The array to search inside
 * @param operator the comparison operator to use
 * @param value the value to compare with
 */
export function getWhereFirst<T, U> (arr: Array<T>, operator: ComparisonOperator, value: U): T|U|undefined {
  return arr.find(item => operators[operator](item, value))
}

/**
 * Retrieve the last element that matches comparison in the given array
 * @param arr The array to search inside
 * @param operator the comparison operator to use
 * @param value the value to compare with
 */
export function getWhereLast<T, U> (arr: Array<T>, operator: ComparisonOperator, value: U): T|U|undefined {
  return arr.reverse().find(item => operators[operator](item, value))
}
