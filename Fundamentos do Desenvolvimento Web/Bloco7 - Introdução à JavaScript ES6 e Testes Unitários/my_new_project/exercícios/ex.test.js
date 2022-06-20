const {sum, myRemove, myFizzBuzz, encode, decode} = require('./ex');

//Ex 1
describe('1. Test if sum function is correct.', () => {
  it('test if sum(4,5) is 9', () => {
    expect(sum(0,0)).toBe(0);
  })
  it("test if sum(4, ''5'') returns error", () => {
    expect(() => sum(4, '5')).toThrow(Error);
  })
})

//Ex 2
describe('2. Test if remove correct item', () => {
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
describe('3. Test if FizzBuzz works well', () => {
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

//Ex 4
describe('4. Test if encode and decode works well', () => {
  it('test if vogals are converted to numbers correctly', () => {
    expect(encode('patrick')).toBe('p1tr3ck');
  })

  it('test if the lengths of return and parameters are the same in encode', () => {
    expect(encode('patrick').length).toBe(7);
  })

  it('test if non vogals characters is unchanged', () => {
    expect(encode('ptrck')).toBe('ptrck');
  })

  it('test if numbers become vogals again', () => {
    expect(decode('p1tr3ck')).toBe('patrick');
  })

  it('test if the lengths of return and parameters are the same in decode', () => {
    expect(encode('p1tr3ck').length).toBe(7);
  })

  it('test if non numbers characters is unchanged', () => {
    expect(encode('ptrck')).toBe('ptrck');
  })
})