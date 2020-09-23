export default class Arr {

    /**
     * Retrieve an item from array by index, return default value if provided
     * @param arr 
     * @param index 
     * @param defaultValue
     */
    public static get<T>(arr: Array<T>, index: number): T
    public static get<T, U>(arr: Array<T>, index: number, defaultValue?: U): T | U | null
    public static get<T, U>(arr: Array<T>, index: number, defaultValue?: U): T | U | null {
        if (!arr[index]) {
            return defaultValue as U ?? null
        }
        return arr[index] as T
    }

    /**
     * Insert a value at specified index, by default, replace the old value if defined 
     * @param arr 
     * @param value 
     * @param index 
     * @param replace
     */
    public static set<T, U>(arr: Array<T | U>, value: U, index: number): Array<T | U>
    public static set<T, U>(arr: Array<T | U>, value: U, index: number, replace: boolean): Array<T | U>
    public static set<T, U>(arr: Array<T | U>, value: U, index: number, replace = true): Array<T | U> {
        if (!replace && arr[index]) {
            return arr as Array<T | U>
        }
        arr[index] = value
        return [...arr] as Array<T>
    }

    /**
     * Remove value at specified index. If specified, can preserve indexes and replace de value by either null or undefined
     * @param arr 
     * @param index 
     * @param preserveIndexes
     * @param returnNull
     */
    public static unset<T>(arr: Array<T>, index: number): Array<T>
    public static unset<T>(arr: Array<T>, index: number, preserveIndexes: boolean): Array<T | null>
    public static unset<T>(arr: Array<T>, index: number, preserveIndexes: boolean, returnNull: boolean): Array<T | null | undefined>
    public static unset<T>(arr: Array<T>, index: number, preserveIndexes = false, returnNull = true): Array<T | null | undefined> {
        if (!arr[index]) {
            return arr
        }
        if (!preserveIndexes) {
            return arr.filter((value, i) => i !== index)
        }
        return arr.map((value: T, i) => {
            if (i === index) {
                return returnNull ? null : undefined
            }
            return value
        })
    }

    /**
     * Add a value at the end of the array
     * @param arr 
     * @param value 
     */
    public static append<T, U>(arr: Array<T>, value: U): Array<T | U> {
        return [...arr, value] as Array<T | U>
    }

    /**
     * Add a value at the begining of the array
     * @param arr 
     * @param value 
     */
    public static prepend<T, U>(arr: Array<T>, value: U): Array<T | U> {
        return [value, ...arr] as Array<T | U>
    }


}