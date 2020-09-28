
/**
 * Create an array with passed arguments
 * @param args arguments to join in array
 */
export function make (...args: Array<unknown>): Array<unknown> {
  return [...args]
}
