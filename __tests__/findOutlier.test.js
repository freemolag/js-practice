import findOutlier from '../src/codewars/findOutlier';

it('Write a method that takes the array as an argument and returns this "outlier" ', () => {
  expect(findOutlier([2, 6, 8, 10, 3])).toEqual(3);
  expect(findOutlier([1, 2, 3])).toEqual(2);
});
