import { operators } from '@helpers/Operators'

class C {}
class D {}

describe('testing operator helpers', () => {
  it('should be able to return if its lesser than', () => {
    expect(operators['<'](1, 5)).toBe(true)
    expect(operators['<']('1', 5)).toBe(true)
    expect(operators['<'](5, 5)).toBe(false)
    expect(operators['<']('5', 5)).toBe(false)
    expect(operators['<'](6, 5)).toBe(false)
    expect(operators['<']('6', 5)).toBe(false)
  })

  it('should be able to return if its lesser than or equals', () => {
    expect(operators['<='](1, 5)).toBe(true)
    expect(operators['<=']('1', 5)).toBe(true)
    expect(operators['<='](5, 5)).toBe(true)
    expect(operators['<=']('5', 5)).toBe(true)
    expect(operators['<='](6, 5)).toBe(false)
    expect(operators['<=']('6', 5)).toBe(false)
  })

  it('should be able to return if its greater than', () => {
    expect(operators['>'](5, 1)).toBe(true)
    expect(operators['>']('5', 1)).toBe(true)
    expect(operators['>'](5, 5)).toBe(false)
    expect(operators['>'](5, 6)).toBe(false)
    expect(operators['>'](5, '6')).toBe(false)
  })

  it('should be able to return if its greater than or equals', () => {
    expect(operators['>='](5, 1)).toBe(true)
    expect(operators['>='](5, '1')).toBe(true)
    expect(operators['>='](5, 5)).toBe(true)
    expect(operators['>=']('5', 5)).toBe(true)
    expect(operators['>='](5, 6)).toBe(false)
    expect(operators['>='](5, '6')).toBe(false)
  })

  it('should be able to return if string is included in another string', () => {
    expect(operators.like('abcde', 'a')).toBe(true)
    expect(operators.like('abcde', 'abcd')).toBe(true)
    expect(operators.like('abcde', 'abcde')).toBe(true)
    expect(operators.like('abcde', 'f')).toBe(false)
    expect(operators.like('abcde', 'abdce')).toBe(false)
  })

  it('should be able to return if string is included in another string with insensitive case', () => {
    expect(operators.ilike('aBcDe', 'A')).toBe(true)
    expect(operators.ilike('AbCdE', 'aBcd')).toBe(true)
    expect(operators.ilike('ABcdE', 'aBcDe')).toBe(true)
    expect(operators.ilike('AbCde', 'f')).toBe(false)
    expect(operators.ilike('ABcdE', 'aBdCe')).toBe(false)
  })

  it('should be able to return if is of a basic type', () => {
    expect(operators.isBasicType('a little string', 'string')).toBe(true)
    expect(operators.isBasicType(false, 'boolean')).toBe(true)
    expect(operators.isBasicType(1254, 'number')).toBe(true)
    expect(operators.isBasicType(1254, 'string')).toBe(false)
    expect(operators.isBasicType('a little string', 'object')).toBe(false)
    expect(operators.isBasicType({ a: 1 }, 'object')).toBe(true)
    expect(operators.isBasicType(() => 1, 'function')).toBe(true)
    expect(operators.isBasicType(Date, 'function')).toBe(true)
  })

  it('should be able to return if item is instance of', () => {
    expect(operators.isInstanceOf(new Date(), Date)).toBe(true)
    expect(operators.isInstanceOf(new C(), C)).toBe(true)
    expect(operators.isInstanceOf(new C(), D)).toBe(false)
  })
})
