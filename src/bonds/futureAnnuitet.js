const PriceN = (P, Po, percent) => {
  const r = percent / 100;
  const result = P * Math.pow((1 + r), 6);
  return result;
};

export default PriceN;
