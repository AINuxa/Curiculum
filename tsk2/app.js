function generateRandom() {
    const start = parseInt(prompt("Enter the starting number:"));
    const end = parseInt(prompt("Enter the ending number:"));
    
    const random = Math.floor(Math.random() * (end - start + 1) + start);
    
    document.getElementById("result").innerHTML = `Random number between ${start} and ${end} is: ${random}`;
  }