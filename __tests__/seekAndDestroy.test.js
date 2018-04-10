import seekAndDestroy from '../src/hexlet/seekAndDestroy';

describe('seekAndDestroy', () => {
  it('should works', () => {
    const result = seekAndDestroy([], 1, 2, 5);
    expect(result).toEqual([]);

    const result1 = seekAndDestroy([2, 1, 2, 3], 1, 2, 5);
    expect(result1).toEqual([3]);

    const result2 = seekAndDestroy([10, 'str', -3, 'world', 'hello', ''], 'hello', -3);
    expect(result2).toEqual([10, 'str', 'world', '']);
  });
});
