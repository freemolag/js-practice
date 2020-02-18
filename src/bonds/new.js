// Будущая стоимость. 2.1
/* eslint-disable no-restricted-properties */
const PriceN = (P, Po, percent) => {
  const r = percent / 100;
  const result = P * Math.pow((1 + r), Po);
  return result;
};

export default PriceN;
