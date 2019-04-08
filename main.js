function arrayToObj(array) {
  return array.reduce((obj, item) => {
  obj[item[0]] = item[1];
  return obj;
}, {});
};


module.exports = arrayToObj;
