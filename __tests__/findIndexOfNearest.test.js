import findIndexOfNearest from '../src/hexlet/findIndexOfNearest';

it('find the nearest number to the desired array and return its index', () => {
  expect(findIndexOfNearest([], 2)).toBeNull();
  expect(findIndexOfNearest([10], 0)).toBe(0);
  expect(findIndexOfNearest([10, 15], 0)).toBe(0);
  expect(findIndexOfNearest([15, 10], 0)).toBe(1);
  expect(findIndexOfNearest([15, 10, 3, 4], 0)).toBe(2);
});
