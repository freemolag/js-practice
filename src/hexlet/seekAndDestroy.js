export default (arr, ...rest) => {
  const set = new Set(rest);
  return arr.filter(value => !set.has(value));
};
