const numbers = [8, 7, 9, 10];
const squaredNumbers = numbers.filter(num => num >= 0).map(num => num ** 2);

if (squaredNumbers.length >= 4) {
  console.log(squaredNumbers);
}