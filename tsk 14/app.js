function getEvenNumbers(arr) {
    var evenNumbers = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenNumbers.push(arr[i]);
      }
    }
    return evenNumbers;
  }
  var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var evenNumbersArray = getEvenNumbers(numbersArray);
  console.log(evenNumbersArray); // [2, 4, 6, 8, 10]