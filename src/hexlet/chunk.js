const chunk = (arr, num) => {
  const iter = (item, acc) => {
    if (item.length === 0) {
      return acc;
    }
    return iter(item.slice(num), [...acc, item.slice(0, num)]);
  };
  return iter(arr, []);
};

export default chunk;
