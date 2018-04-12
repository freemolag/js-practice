/* eslint no-bitwise: ["error", { "allow": ["^"] }] */
export default (numbers) => {
  const filtered = numbers.filter(num =>
    (numbers.reduce((acc, item) =>
      (((item ^ num) === 0) ? acc + 1 : acc), 0)) % 2);
  return filtered[0];
};

