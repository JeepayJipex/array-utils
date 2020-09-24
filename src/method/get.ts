/**
     * Retrieve an item from array by index, return default value if provided
     * @param arr
     * @param index
     * @param defaultValue
     */
export function get<T>(arr: Array<T>, index: number): T
export function get<T, U>(arr: Array<T>, index: number, defaultValue?: U): T | U | null
export function get<T, U> (arr: Array<T>, index: number, defaultValue?: U): T | U | null {
  if (!arr[index]) {
    return defaultValue as U ?? null
  }
  return arr[index] as T
}
