import { ComparisonOperators, operators } from '@helpers/Operators'

/**
 * Search a value in the array and replace it
 * @param arr The array where to find value
 * @param search The value to be replaced
 * @param replacer The value to insert
 */
export function setWhere<T, U> (arr: Array<T>, search: T, operator: ComparisonOperators, replacer: U): Array<T|U> {
  return arr.map(value => operators[operator](value, search) ? replacer : value)
}

/**
 * Search a value in the array and replace its first occurence
 * @param arr The array where to find value
 * @param search The value to be replaced
 * @param replacer The value to insert
 */
export function setWhereFirst<T, U> (arr: Array<T>, search: T, operator: ComparisonOperators, replacer: U): Array<T|U> {
  const index = arr.findIndex(value => operators[operator](value, search))
  if (index === -1) {
    return arr
  }
  return arr.map((value, i) => i === index ? replacer : value)
}

/**
 * Search a value in the array and replace its last occurence
 * @param arr The array where to find value
 * @param search The value to be replaced
 * @param replacer The value to insert
 */
export function setWhereLast<T, U> (arr: Array<T>, search: T, operator: ComparisonOperators, replacer: U): Array<T|U> {
  const index = arr.reverse().findIndex(value => operators[operator](value, search))
  if (index === -1) {
    return arr
  }

  return arr.map((value, i) => i === index ? replacer : value).reverse()
}
