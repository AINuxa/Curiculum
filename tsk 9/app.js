function multiply(...args) {
    return args.reduce((acc, val) => acc * val, 1);
  }
  
  let result1 = multiply(2, 3, 4);
  let result2 = multiply(5, 6, 7, 8);
  let result3 = multiply(2.5, 3, 1.5, 2);
  
  document.getElementById("result1").textContent = result1;
  document.getElementById("result2").textContent = result2;
  document.getElementById("result3").textContent = result3;