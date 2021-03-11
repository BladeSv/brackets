module.exports = function check(str, bracketsConfig) {
  if (!str || !bracketsConfig || !bracketsConfig.length || str.length % 2 !== 0) {
    return false;
  }
  const strArr = str.split("");
  let startLength;

  while (startLength !== strArr.length) {
    startLength = strArr.length;

    for (let i = 0; i < strArr.length - 1 && i >= 0; i++) {
      const bracket = bracketsConfig.find(el => strArr[i] === el[0]);
      if (bracket && bracket[1] === strArr[i + 1]) {
        strArr.splice(i, 2);
        i -= 2;
      }
    }
  }

  return !strArr.length;
}
