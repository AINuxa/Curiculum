function addNumber() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }
  
  console.log(addNumber(2, 10, 10, 20, 13, 15)); // prints 70  