const {sum, myRemove, myFizzBuzz} = require('./ex');

//Ex 1
describe('Test if sum function is correct.', () => {
  it('test if sum(4,5) is 9', () => {
    expect(sum(0,0)).toBe(0);
  })
  it("test if sum(4, ''5'') returns error", () => {
    expect(() => sum(4, '5')).toThrow(Error);
  })
})

//Ex 2
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

//Ex 3
describe('Test if FizzBuzz works well', () => {
  it('Test if returns fizzbuzz', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
  })

  it('Test if returns fizz', () => {
    expect(myFizzBuzz(9)).toBe('fizz');
  })

  it('Test if returns buzz', () => {
    expect(myFizzBuzz(10)).toBe('buzz');
  })

  it('Test if returns number', () => {
    expect(myFizzBuzz(11)).toBe(11);
  })

  it('Test if returns error', () => {
    expect(() => myFizzBuzz('9')).toThrow(Error);
  })
})