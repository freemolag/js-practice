/*
For example, if we run 9119 through the function,
811181 will come out, because 92 is 81 and 12 is 1.
*/

export default num => Number(Array.from(num.toString(), Number)
  .map(n => n * n).join(''));
