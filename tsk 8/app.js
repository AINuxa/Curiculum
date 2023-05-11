function displayArrayProduct(arr) {
    let product = 1;
    for (let i = 0; i < arr.length; i++) {
      product *= arr[i];
    }
    const resultDiv = document.getElementById("result");
    const productText = document.createTextNode("Product of array elements: " + product);
    resultDiv.appendChild(productText);
  }
  
  const myArray = [2, 4, 6, 8];
  displayArrayProduct(myArray);