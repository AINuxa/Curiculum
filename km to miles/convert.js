function convert() {
    const meters = parseFloat(document.getElementById("meters").value);
    const miles = meters *1.8 + 32;
    document.getElementById("result").textContent = `${meters} meters is equal to ${miles.toFixed(2)} miles.`;
  }