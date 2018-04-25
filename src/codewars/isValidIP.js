const isValidIP = (str) => {
  const re = /^(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/;
  if (str.match(re)) return true;
  return false;
};

export default isValidIP;
