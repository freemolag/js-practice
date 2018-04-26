import persistence from '../src/codewars/persistence';

it('function takes in a positive parameter and returns its multiplicative persistence, which is the number of times you must multiply the digits', () => {
  expect(persistence(39)).toEqual(3);
  expect(persistence(4)).toEqual(0);
  expect(persistence(25)).toEqual(2);
  expect(persistence(999)).toEqual(4);
});
