import { operators } from '@helpers/Operators'

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
})