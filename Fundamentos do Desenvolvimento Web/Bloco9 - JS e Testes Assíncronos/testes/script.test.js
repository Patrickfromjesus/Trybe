const toLower = require('./script');

describe('Test if toLower function works well', () => {
  test('test if return error, with no parameter', () => {
    expect(toLower()).toEqual(new Error('Deu erro'));
  })
  test('test if works well, with valid parameter', (done) => {
      toLower('CACHORRO', (param) => {
        expect(param).toEqual('cachorro');
        done();
      })
  })
  })