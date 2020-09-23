export default class Arr {
    public static first<T>(arr: Array<T>): T {
        return arr[0] as T
    }

    public static get<T, U>(arr: Array<T>, index: number, defaultValue?: U): T|U|null {
        if(!arr[index]) {
            return defaultValue as U ?? null
        }
        return arr[index] as T
    }

    public static set<T, U>(arr: Array<T|U>, value: U, index: number, replace = true): Array<T|U> {
        if (!replace && arr[index]) {
            return arr as Array<T|U>
        }
        arr[index] = value
        return [...arr] as Array<T>
    }
    
    public static append<T, U>(arr: Array<T>, value: U): Array<T|U> {
        return [...arr, value] as Array<T|U>
    }

    public static prepend<T,U>(arr: Array<T>, value: U): Array<T|U> {
        return [value, ...arr] as Array<T|U>
    }
}