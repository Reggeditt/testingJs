const stringLength = (string) => {
  if (string.length < 1 || string.length > 10) {
    throw Error('String length must be between 1 and 10');
  }
  return string.length;
};

module.exports = stringLength;