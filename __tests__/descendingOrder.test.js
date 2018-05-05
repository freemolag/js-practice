import descendingOrder from '../src/codewars/descendingOrder';

it('return digits in descending order', () => {
  expect(descendingOrder(1)).toBe(1);
  expect(descendingOrder(123456789)).toBe(987654321);
});
