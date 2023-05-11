function propertyTaker(obj, propertyName) {
    var propertyValue = obj[propertyName];
    delete obj[propertyName];
    return propertyValue;
  }
  var obj1 = { continent: 'Asia', country: 'Japan' };
  console.log(propertyTaker(obj1, 'continent')); // Output: 'Asia'
  console.log(obj1); // Output: { country: 'Japan' }
  
  var obj2 = { country: 'Sweden', continent: 'Europe' };
  console.log(propertyTaker(obj2, 'country')); // Output: 'Sweden'
  console.log(obj2); // Output: { continent: 'Europe' }
  
  var obj3 = {name:'higher', age:12};
  console.log(propertyTaker(obj3, 'name')); // Output: 'higher'
  console.log(obj3); // Output: { age: 12 }    