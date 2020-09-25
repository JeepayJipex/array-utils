/* eslint-disable @typescript-eslint/no-explicit-any */

export interface OperatorFunctions {
    '>': (greater: any, lesser: any) => boolean
    '>=': (greater: any, lesser: any) => boolean
    '<': (lesser: any, greater: any) => boolean
    '<=': (lesser: any, greater: any) => boolean
    'like': (charSequence: any, search: any) => boolean
    'ilike': (charSequence: any, search: any) => boolean
    '=': (item: any, search: any) => boolean
}
