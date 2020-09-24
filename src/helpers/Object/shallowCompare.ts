/**
 * Compare two objects and return if objects are equals
 * @param object1 The first object to compare
 * @param object2 The second object to compare
 */
export function shallowCompare<T> (object1:T, object2:T): boolean {
  if (typeof object1 !== 'object' || typeof object2 !== 'object') {
    return object1 === object2
  }

  const object1Entries = Object.entries(object1)
  const object2Entries = Object.entries(object2)

  if (object1Entries.length !== object2Entries.length) {
    return false
  }

  for (let i = 0; i < object1Entries.length; i++) {
    if (!shallowCompare(object1Entries[i][0], object2Entries[i][0])) {
      return false
    }

    if (!shallowCompare(object1Entries[i][1], object2Entries[i][1])) {
      return false
    }
  }

  return true
}
