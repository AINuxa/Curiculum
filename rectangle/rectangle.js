// Get the width and length of the rectangle from the user
let width = prompt("Enter the width of the rectangle:");
let length = prompt("Enter the length of the rectangle:");

// Convert the width and length to numbers
width = parseFloat(width);
length = parseFloat(length);

// Calculate the area of the rectangle
const area = width * length;

// Display the area of the rectangle
alert(`The area of the rectangle is ${area}.`);