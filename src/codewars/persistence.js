const persistence = (num) => {
  const iter = (item, acc) => {
    if (item < 10) {
      return acc;
    }
    const mmultiplyNum = String(item).split('').reduce((a, b) => a * b);
    return iter(mmultiplyNum, acc + 1);
  };

  return iter(num, 0);
};

export default persistence;
