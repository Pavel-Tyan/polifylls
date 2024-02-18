Array.prototype.myReduce = function (callback, initial) {
  let accumulator = undefined;
  if (initial) {
    accumulator = initial;
  }
  for (let i = 0; i < this.length; i++) {
    if (accumulator) {
      accumulator = callback.call(undefined, accumulator, this[i], i, this);
    } else {
      accumulator = this[i];
    }
  }
  return accumulator;
};
