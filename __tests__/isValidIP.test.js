import isValidIP from '../src/codewars/isValidIP';

it('valid IPv4 addresses in dot-decimal format', () => {
  expect(isValidIP('1.2.3')).toEqual(false);
  expect(isValidIP('1.2.3.4.5')).toEqual(false);
  expect(isValidIP('123.456.78.90')).toEqual(false);
  expect(isValidIP('123.45.67.89')).toEqual(true);
  expect(isValidIP('1.2.3.4')).toEqual(true);
  expect(isValidIP('127.0.0.0')).toEqual(true);
});
