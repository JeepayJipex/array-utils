/* eslint-disable @typescript-eslint/no-explicit-any */
export type ComparisonOperators = '<'|'<='|'>'|'>='

export interface OperatorFunctions {
    '>': (greater: any, lesser: any) => boolean
    '>=': (greater: any, lesser: any) => boolean
    '<': (lesser: any, greater: any) => boolean
    '<=': (lesser: any, greater: any) => boolean
}

export const operators: OperatorFunctions = {
  '>': (greater: any, lesser: any): boolean => {
    return greater > lesser
  },
  '>=': (greater: any, lesser: any): boolean => {
    return greater >= lesser
  },
  '<': (lesser: any, greater: any): boolean => {
    return lesser < greater
  },
  '<=': (lesser: any, greater: any): boolean => {
    return lesser <= greater
  }
}
