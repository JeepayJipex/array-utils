/**
     * Add a value at the begining of the array
     * @param arr
     * @param value
     */
export function prepend<T, U> (arr: Array<T>, value: U): Array<T | U> {
  return [value, ...arr] as Array<T | U>
}
