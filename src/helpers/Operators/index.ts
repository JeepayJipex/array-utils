import { shallowCompare } from '@helpers/Object/shallowCompare'

/* eslint-disable @typescript-eslint/no-explicit-any */
export type ComparisonOperators = '<'|'<='|'>'|'>='|'like'|'ilike'|'='

export interface OperatorFunctions {
    '>': (greater: any, lesser: any) => boolean
    '>=': (greater: any, lesser: any) => boolean
    '<': (lesser: any, greater: any) => boolean
    '<=': (lesser: any, greater: any) => boolean
    'like': (charSequence: any, search: any) => boolean
    'ilike': (charSequence: any, search: any) => boolean
    '=': (item: any, search: any) => boolean
}

export const operators: OperatorFunctions = {
  '>': (greater: string|number, lesser: string|number): boolean => greater > lesser,
  '>=': (greater: string|number, lesser: string|number): boolean => greater >= lesser,
  '<': (lesser: string|number, greater: string|number): boolean => lesser < greater,
  '<=': (lesser: string|number, greater: string|number): boolean => lesser <= greater,
  like: (charSequence: string, search: string): boolean => charSequence.includes(search),
  ilike: (charSequence: string, search: string): boolean => charSequence.toLowerCase().includes(search.toLowerCase()),
  '=': (item: any, search: any): boolean => shallowCompare(item, search)
}
