export default (arr, num) => {
  if (arr.length === 0) {
    return null;
  }
  const set = new Set(arr);
  const number = arr.sort((a, b) => a - b).reduce((acc, value) =>
    (value <= num ? value : arr[0]), 0);
  return Array.from(set).indexOf(number);
};
