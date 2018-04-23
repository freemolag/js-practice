import rowWeights from '../src/codewars/rowWeights';

it('return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.', () => {
  expect(rowWeights([80])).toEqual([80, 0]);
  expect(rowWeights([50, 60, 70, 80])).toEqual([120, 140]);
  expect(rowWeights([0, 1, 0])).toEqual([0, 1]);
  expect(rowWeights([39, 84, 74, 18, 59, 72, 35, 61])).toEqual([207, 235]);
});
