import flatten from '../src/hexlet/deepFlatten';


describe('Flatten', () => {
  it('set 1', () => {
    const list = [];

    expect(flatten(list)).toEqual([]);
  });

  it('set 2', () => {
    const list = [1, 2, [3, 5], [[4, 3], 2]];

    expect(flatten(list)).toEqual([1, 2, 3, 5, 4, 3, 2]);
  });

  it('set 3', () => {
    const list = [[1, [5], [], [[-3, 'hi']]], 'string', 10, [[[5]]]];

    expect(flatten(list)).toEqual([1, 5, -3, 'hi', 'string', 10, 5]);
  });
});
