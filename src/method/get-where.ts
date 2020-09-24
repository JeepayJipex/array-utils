import { operators, ComparisonOperators } from '@helpers/Operators'
export function getWhere<T, U> (arr: Array<T>, operator: ComparisonOperators, value: U): Array<T|U> {
  return arr.filter(item => operators[operator](item, value))
}
