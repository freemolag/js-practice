/* eslint-disable no-restricted-properties */
// Будущая стоимость обычного аннуитета, 2.2
const PriceN = (A, period, percent) => {
  const r = percent / 100;
  const year = Math.pow((1 + r), period);
  return A * ((year - 1) / r);
};

export default PriceN;
