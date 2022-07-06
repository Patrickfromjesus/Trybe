const toupper = require('./toUpperCase.js');

describe('test of toupper function', (done) => {
  it('test if works normally', (done) => {
   toupper('coco', (string) => {
    try {
    expect(string).toEqual('COCO');
    done();
    }
    catch(error) {
      done(error);
    }
   });
  })
  it('test if without parameter', () => {
    expect(toupper()).toEqual('Insira apenas caracteres válidos, do tipo string.');
  })
})