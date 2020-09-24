/**
     * Insert a value at specified index, by default, replace the old value if defined
     * @param arr
     * @param value
     * @param index
     * @param replace
     */
export function set<T, U>(arr: Array<T | U>, value: U, index: number): Array<T | U>
export function set<T, U>(arr: Array<T | U>, value: U, index: number, replace: boolean): Array<T | U>
export function set<T, U> (arr: Array<T | U>, value: U, index: number, replace = true): Array<T | U> {
  if (!replace && arr[index]) {
    return arr as Array<T | U>
  }
  arr[index] = value
  return [...arr] as Array<T>
}
