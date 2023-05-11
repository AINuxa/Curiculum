function existsAndTruthy(obj, propertyName) {
    return obj.hasOwnProperty(propertyName) && Boolean(obj[propertyName]);
  }
  console.log(existsAndTruthy({a:1,b:2,c:3},'b')); // true
  console.log(existsAndTruthy({x:'a',y:null,z:'c'},'y')); // false
  console.log(existsAndTruthy({x:'a',b:'b',z:undefined},'z')); // false    