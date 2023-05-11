var numbers = [1,2,3,4,5,6,7,8];
numbers.forEach(function(element, index, array){
    array[index] = element* element;
});
console.log(numbers);