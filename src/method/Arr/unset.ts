 /**
     * Remove value at specified index. If specified, can preserve indexes and replace de value by either null or undefined
     * @param arr 
     * @param index 
     * @param preserveIndexes
     * @param returnNull
     */
    export function unset<T>(arr: Array<T>, index: number): Array<T>
    export function unset<T>(arr: Array<T>, index: number, preserveIndexes: boolean): Array<T | null>
    export function unset<T>(arr: Array<T>, index: number, preserveIndexes: boolean, returnNull: boolean): Array<T | null | undefined>
    export function unset<T>(arr: Array<T>, index: number, preserveIndexes = false, returnNull = true): Array<T | null | undefined> {
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