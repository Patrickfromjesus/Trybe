const asyncSum = (a, b, callback) => {
  setTimeout(() => {
    const result = a + b;
    callback(result);
  }, 400);
};

it('testa a soma', (done) => {
  asyncSum(3, 6, (result) => {
    try {
      expect(result).toBe(9);
      done();
    } catch (error) {
      done(error);
    }
  })
})