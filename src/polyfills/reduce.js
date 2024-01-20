Array.prototype.reduce = function(callbackFn, initialValue) {
    const arr = this;
    let acc = initialValue;
    arr.forEach((item) => {
      acc = callbackFn(acc, item);
    });
    return acc;
  };
  const arr = [1,2,3];
  arr.reduce((acc, val) => {acc= acc+val;return acc}, 0)