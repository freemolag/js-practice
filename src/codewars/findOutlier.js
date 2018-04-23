const findOutlier = (int) => {
  const isOdd = int.filter(x => x % 2 === 0);
  return isOdd.length === 1 ? Number(isOdd) : Number(int.filter(x => x % 2 !== 0));
};

export default findOutlier;
