
/**
 * Divides at index and return array of array containing divided values
 * @template T Types present in passed array
 * @param arr Array to search In
 * @param index Index at which the array should be divided
 * @returns Array of arrays containing divided values
 */
export function divideAtIndex<T> (arr: Array<T>, index: number): Array<Array<T>> {
  let left: Array<T> = []
  let right: Array<T> = []

  arr.forEach((value, i) => {
    if (i < index) {
      left = [...left, value]
    } else {
      right = [...right, value]
    }
  })
  return [left, right]
}

/**
 * Divides at indexes and return multiple arrays
 * @template T Types present in passed array
 * @param arr Array to search in
 * @param indexes indexes at which should start a new array
 * @returns Arrays containing the divided values
 */
export function divideAtIndexes<T> (arr: Array<T>, indexes: Array<number>): Array<Array<T>> {
  let returnArray: Array<Array<T>> = []
  indexes = Array
    .from(new Set(indexes))
    .sort()
  let currentArray = arr
  indexes.forEach(index => {
    const divided = divideAtIndex(currentArray, index)
    returnArray = [...returnArray, divided[0]]
    currentArray = divided[1]
  })
  return returnArray
}
