Promise.myAll = function (promises) {
  return new Promise((resolve, reject) => {
    if (promises.length == 0) {
      resolve([]);
    }
    const results = new Array(promises.length);
    let resolvedCount = 0;
    promises.forEach((promise, index) => {
      promise
        .then((subResult) => {
          results[index] = subResult;
          resolvedCount++;
          if (resolvedCount == promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};
