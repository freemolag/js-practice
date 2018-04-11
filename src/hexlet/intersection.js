export default (arr1, arr2) => {
  const set = new Set(arr2);
  const newArr = new Set(arr1.filter(value => set.has(value)));
  return [...newArr];
};
