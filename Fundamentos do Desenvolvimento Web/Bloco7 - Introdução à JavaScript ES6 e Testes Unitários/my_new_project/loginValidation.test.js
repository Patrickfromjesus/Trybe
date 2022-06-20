const {sum, sub, mul, div} = require('./loginValidation.js');

describe('Requisito 1', () => {
  it('Test if the sum(1,4) is correct', () => {
    expect(sum(1,4)).toBe(5);
  })
  it('Test if an error exist', () => {
    expect(() => sum('1', 4)).toThrow(Error);
  })
})

describe('Requisito 2', () => {
  it('Test if the sub(4,7) is correct', () => {
    expect(sub(4,7)).toBe(-3);
  })
  it('Test if an error exist', () => {
    expect(() => sub('4', 7)).toThrow(Error);
  })
})

describe('Requisito 3', () => {
  it('Test if the mul(1,4) is correct', () => {
    expect(mul(9,3)).toBe(27);
  })
  it('Test if an error exist', () => {
    expect(() => mul(3, '1')).toThrow(Error);
  })
})

describe('Requisito 4', () => {
  it('Test if the div(1,4) is correct', () => {
    expect(div(36,12)).toBe(3);
  })
  it('Test if an error exist', () => {
    expect(() => div(3, '1')).toThrow(Error);
  })
  it('Test if occour an div by zero.', () => {
    expect(() => div(1, 0)).toThrow(Error);
  })
})