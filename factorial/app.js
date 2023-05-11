function calculateFactorial() {
    const num = parseInt(document.getElementById("num").value);
    
    if (num < 0) {
      document.getElementById("result").innerHTML = "Invalid input. Please enter a positive integer.";
      return;
    }
    
    let factorial = 1;
    for (let i = 2; i <= num; i++) {
      factorial *= i;
    }
    
    document.getElementById("result").innerHTML = `Factorial of ${num} is: ${factorial}`;
  }