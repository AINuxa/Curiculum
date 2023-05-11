function cloneArray(arr) {
    return arr.slice(0);
  }
  var originalArray = [1, 2, 3];
  var clonedArray = cloneArray(originalArray);
  console.log(clonedArray); // [1, 2, 3]