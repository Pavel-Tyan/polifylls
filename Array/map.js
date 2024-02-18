Array.prototype.myMap = function (callback) {
  modifiedArray = [];
  for (let i = 0; i < this.length; i++) {
    modifiedArray.push(callback(this[i], i, this));
  }
  return modifiedArray;
};
