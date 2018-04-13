export default (query) => {
  const keys = Object.keys(query);
  keys.sort();
  return keys.map(value => `${value}=${query[value]}`).join('&');
};
