const index = require('./index');

test('Capitalizes string', () => {
  expect(index.capitalize('bob')).toBe('Bob');
  expect(index.capitalize('1bob')).toBe('1bob');
  expect(index.capitalize('BOB')).toBe('Bob');
});

test('Reverses string', () => {
  expect(index.reverseString('asdf')).toBe('fdsa');
  expect(index.reverseString('hello there nerd')).toBe('dren ereht olleh');
  expect(index.reverseString('123456789')).toBe('987654321');
});

test('calculator works', () => {
  expect(index.calculator.add(4, 7)).toBe(11);
  expect(index.calculator.subtract(4, 7)).toBe(-3);
  expect(index.calculator.divide(24, 2)).toBe(12);
  expect(index.calculator.multiply(4, 8)).toBe(32);
});

test('caesar cipher works', () => {
  expect(index.caesarCipher('attack at dawn', 23)).toBe('xqqxzh xq axtk');
  expect(index.caesarCipher('look at me!', 14)).toBe('zccy oh as!');
  expect(index.caesarCipher('!@#$%', 20)).toBe('!@#$%');
  expect(index.caesarCipher('attack at dawn', -17)).toBe('jccjlt jc mjfw');
});

test('analyzer works', () => {
  expect(index.analyze([1, 2, 3, 4])).toStrictEqual({
    "average": 2.5,
    "length": 4,
    "min": 1,
    "max": 4,
  });
  expect(index.analyze([6, 8, -2, 0])).toStrictEqual({
    "average": 3,
    "length": 4,
    "min": -2,
    "max": 8,
  });
  expect(index.analyze([])).toStrictEqual({});
  expect(index.analyze([-3, -3])).toStrictEqual({
    "average": -3,
    "length": 2,
    "min": -3,
    "max": -3,
  });
});
