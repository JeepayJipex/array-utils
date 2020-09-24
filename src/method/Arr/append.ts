/**
     * Add a value at the end of the array
     * @param arr
     * @param value
     */
export function append<T, U> (arr: Array<T>, value: U): Array<T | U> {
  return [...arr, value] as Array<T | U>
}
