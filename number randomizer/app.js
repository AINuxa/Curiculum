function genNum(min, max) {
    // use Math.floor() to round down to the nearest integer
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  console.log(genNum(1, 100)); // print a random integer between 1 and 100  