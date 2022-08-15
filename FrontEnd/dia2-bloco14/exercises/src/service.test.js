const { randomNumber, upperCase } = require('./Components/service');
const service = require('./Components/service');
/* jest.mock('./Components/service'); */

describe('1.Test randomNumber function', () => {
  it('should return a random value between 0 and 100', () => {
    const randomNumber = jest.fn().mockReturnValue(10);
    randomNumber();
    expect(randomNumber).toHaveBeenCalled();
    expect(randomNumber()).toBe(10);
    expect(randomNumber).toHaveBeenCalledTimes(2);
  })
  it('should works as division only once', () => {
    const newRandom = jest.spyOn(service, 'randomNumber').mockImplementation((a, b) => a / b);
    expect(newRandom(4, 2)).toBe(2);
    expect(newRandom).toHaveBeenCalledTimes(1);
  })
  it('should works as multiplication with three parameters only once', () => {
    const randomN = jest.spyOn(service, 'randomNumber').mockImplementation((a, b, c) => a * b * c);
    expect(randomN(4, 2, 1)).toBe(8);
    expect(randomN).toHaveBeenCalledTimes(1);
    randomN.mockRestore();
    const double = jest.spyOn(service, 'randomNumber').mockImplementation((a) => 2 * a);
    expect(double(3)).toBe(6);
  })
})

describe('2. Test another functions', () => {
  it('should change the toUpper function to LowerCase', () => {
    const toLower = jest.spyOn(service, 'upperCase').mockImplementation((string) => string.toLowerCase());
    const lastLetter = jest.spyOn(service, 'firstLetter').mockImplementation((string) => string[string.length - 1]);
    const concatThree = jest.spyOn(service, 'concatStrings').mockImplementation((a, b, c) => a + b + c);
    expect(toLower('PATRICK')).toBe('patrick');
    expect(lastLetter('patrick')).toBe('k');
    expect(concatThree('t', 'i', 'm')).toBe('tim');
    toLower.mockRestore();
    expect(service.upperCase('patrick')).toBe('PATRICK');
  })
})