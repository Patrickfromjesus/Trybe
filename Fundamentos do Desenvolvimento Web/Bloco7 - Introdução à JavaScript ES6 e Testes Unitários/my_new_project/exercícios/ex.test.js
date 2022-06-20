const sum = require('./ex');

describe('Test if sum function is correct.', () => {
  it('test if sum(4,5) is 9', () => {
    expect(sum(0,0)).toBe(0);
  })
  it("test if sum(4, ''5'') returns error", () => {
    expect(() => sum(4, '5')).toThrow(Error);
  })
})