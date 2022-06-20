const {sum, myRemove, myFizzBuzz, encode, decode, techList, hydrate, searchEmployee} = require('./ex');

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
  it('Test if the function encode is defined', () => {
    expect(encode).toBeDefined();
  });

  it('Test if the function decode is defined', () => {
    expect(decode).toBeDefined();
  });

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

//Ex 5
describe('5. Testa a função techList', () => {
  it('Test if the function techList is defined', () => {
    expect(techList).toBeDefined();
  });

  it('Test if techList is a function', () => {
    expect(typeof techList).toBe('function');
  });

  it('List with 5 tecnologies must return a list of sorted objects', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });

  it('List with 0 tecnologies must return a message of error "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});

//Ex 6
describe('6. Test hydrate function', () => {
  it('Test if hydrate function is defined', () => {
    expect(hydrate).toBeDefined();
  });

  it('Test if hydrate is a function', () => {
    expect(typeof hydrate).toBe('function');
  });

  it('When recive a string, returns a guess of how much cups of water should drink', () => {
    expect(hydrate('1 cerveja')).toBe('1 copo de água');
    expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
    expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
    expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
    expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
  });
});

//Bônus
describe('7. test if searchEmployee works well', () => {
  it('test if function exists', () => {
    expect(searchEmployee).toBeDefined();
  })

  it('test if it returns correct search', () => {
    expect(searchEmployee('5569-4', 'firstName')).toEqual("George");
  })

  it('test if it recognizes when the ID doesn´t exist', () => {
    expect(() => searchEmployee('33945-2', 'firstName')).toThrow(Error);
  })

  it('test if it recognizes when the detail isn´t inside the array.', () => {
    expect(() => searchEmployee('5569-4', 'middleName')).toThrow(Error);
  })
})