import { BasicTypes } from '@custom-types/basic-types'
import { Newable } from '@custom-types/newable'
import { shallowCompare } from '@helpers/Object/shallowCompare'
import { OperatorFunctions } from '@interfaces/operator-functions'

/* eslint-disable @typescript-eslint/no-explicit-any */

export const operators: OperatorFunctions = {
  '>': (greater: string|number, lesser: string|number): boolean => greater > lesser,
  '>=': (greater: string|number, lesser: string|number): boolean => greater >= lesser,
  '<': (lesser: string|number, greater: string|number): boolean => lesser < greater,
  '<=': (lesser: string|number, greater: string|number): boolean => lesser <= greater,
  like: (charSequence: string, search: string): boolean => charSequence.includes(search),
  ilike: (charSequence: string, search: string): boolean => charSequence.toLowerCase().includes(search.toLowerCase()),
  '=': (item: any, search: any): boolean => shallowCompare(item, search),
  isBasicType: (item: any, type: BasicTypes) => typeof item === type,
  isInstanceOf: <T>(item: any, constructorFunction: Newable<T>) => item instanceof constructorFunction
}
