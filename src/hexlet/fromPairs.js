export default pairs =>
  pairs.reduce((acc, item) => ({ [item[0]]: item[1], ...acc }), {});
