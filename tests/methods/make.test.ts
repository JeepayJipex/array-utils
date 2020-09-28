import { make } from '@method/create/make'

describe('testing array creation methods', () => {
  it('should be able to return array from passed parameters', () => {
    expect(make(1, 2, 3)).toStrictEqual([1, 2, 3])
    expect(make('a', 'b', 3)).toStrictEqual(['a', 'b', 3])
  })
})
