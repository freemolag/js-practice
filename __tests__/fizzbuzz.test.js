import fizzbuzz from '../src/hexlet/fizzbuzz';

test('fizz', () => {
  expect(fizzbuzz(6)).toBe('FIZZ');
  expect(fizzbuzz(9)).toBe('FIZZ');
  expect(fizzbuzz(12)).toBe('FIZZ');
});

test('buzz', () => {
  expect(fizzbuzz(5)).toBe('BUZZ');
  expect(fizzbuzz(10)).toBe('BUZZ');
});

test('fizzbuzz', () => {
  expect(fizzbuzz(15)).toBe('FIZZBUZZ');
  expect(fizzbuzz(30)).toBe('FIZZBUZZ');
  expect(fizzbuzz(45)).toBe('FIZZBUZZ');
});
