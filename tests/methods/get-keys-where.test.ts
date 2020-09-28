import { getKeysWhere, getKeyWhereFirst, getKeyWhereLast } from '@method/retrieve/get-keys'

describe('testing get keys where methods', () => {
  it('should be able to retrieve all keys corresponding', () => {
    expect(getKeysWhere([1, 2, 3, 4, 4, 2, 1], '<', 3)).toStrictEqual([0, 1, 5, 6])
    expect(getKeysWhere([1, 3, 3, 4, 5, 3, 1], '=', 3)).toStrictEqual([1, 2, 5])
    expect(getKeysWhere(['key', 'blue', 'sweet', 'bluefish', 'bike', 'blueberry'], 'like', 'blue')).toStrictEqual([1, 3, 5])
  })

  it('should be able to retrive first key correponding', () => {
    expect(getKeyWhereFirst([1, 2, 3, 4, 4, 2, 1], '>', 3)).toStrictEqual(3)
    expect(getKeyWhereFirst(['key', 'blue', 'sweet', 'bluefish', 'bike', 'blueberry'], 'like', 'blue')).toStrictEqual(1)
  })

  it('should be able to retrive first key correponding', () => {
    expect(getKeyWhereLast([1, 2, 3, 4, 4, 2, 1], '>', 3)).toStrictEqual(4)
    expect(getKeyWhereLast(['key', 'blue', 'sweet', 'bluefish', 'blueberry', 'bike'], 'like', 'blue')).toStrictEqual(4)
  })
})
