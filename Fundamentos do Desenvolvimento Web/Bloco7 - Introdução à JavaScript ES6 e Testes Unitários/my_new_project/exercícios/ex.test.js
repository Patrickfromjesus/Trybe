const {sum, myRemove} = require('./ex');

describe('Test if sum function is correct.', () => {
  it('test if sum(4,5) is 9', () => {
    expect(sum(0,0)).toBe(0);
  })
  it("test if sum(4, ''5'') returns error", () => {
    expect(() => sum(4, '5')).toThrow(Error);
  })
})

describe('Test if remove correct item', () => {
  const arr = [1, 2, 3, 4];
  it('test if myRemove([1, 2, 3, 4], 3) works well', () => {
    expect(myRemove(arr, 3)).toEqual([1,2,4]);
  })

  it('test if myRemove([1, 2, 3, 4], 3) works well', () => {
    expect(myRemove(arr, 3)).not.toEqual([1,2,3,4]);
  })

  it('test if myRemove([1, 2, 3, 4], 5) works well', () => {
    expect(myRemove(arr, 5)).toEqual([1,2,3,4]);
  })
})