/* eslint-disable no-restricted-properties */
const PriceN = (A, period, percent) => {
  const r = (percent / 100);
  const year = Math.pow((1 + r), period);
  return A * (1 / (year));
};

export default PriceN;
