/* eslint-disable @typescript-eslint/no-explicit-any */

import { BasicTypes } from '@custom-types/basic-types'
import { Newable } from '@custom-types/newable'

export interface OperatorFunctions {
    '>': (greater: any, lesser: any) => boolean
    '>=': (greater: any, lesser: any) => boolean
    '<': (lesser: any, greater: any) => boolean
    '<=': (lesser: any, greater: any) => boolean
    'like': (charSequence: any, search: any) => boolean
    'ilike': (charSequence: any, search: any) => boolean
    '=': (item: any, search: any) => boolean
    'isBasicType': (item: any, type: BasicTypes) => boolean
    'isInstanceOf': <T>(item: any, constructorFunction: Newable<T>) => boolean
}
