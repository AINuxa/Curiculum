
// var snow = [];
// function drawTree(value) {
//   snow.push(value);
//   var str = snow.join(',');
//   console.log(str);
  
//   for (var i = 0; i < 5; i++) {
//     snow.push(value, value);
//     var str = snow.join(' ');
//     console.log(str);
//   }
// };

// // drawTree('*');
// drawTree(0);

// //  вариант 2 (сложный)
// var line = 3;
// var symbol = '*';
// var delimetr = ' ';
// var maxLength = line * 2 - 1;

// for (var i = 1; i <= line; i++) {
//   var string = '';
//   for (var j = 1; j <= maxLength; j++) {
//     var quantitySymbol = i * 2 - 1;
//     var quantityDelimetr = maxLength - quantitySymbol;
//     if (j <= quantityDelimetr / 2) {
//       string = string + delimetr;
//     }
//     if (j > quantityDelimetr / 2 && j <= maxLength - quantityDelimetr / 2) {
//       string = string + symbol;
//     }
//     if (j > maxLength - quantityDelimetr / 2) {
//       string = string + delimetr;
//     }
//   }
//   console.log(string);
// }

function drawTree([line, symbol, delimetr]) {
    var maxLength = line * 2 - 1;
  
    for (var i = 1; i <= line; i++) {
      var string = '';
      for (var j = 1; j <= maxLength; j++) {
        var quantitySymbol = i * 2 - 1;
        var quantityDelimetr = maxLength - quantitySymbol;
        if (j <= quantityDelimetr / 2) {
          string = string + delimetr;
        }
        if (j > quantityDelimetr / 2 && j <= maxLength - quantityDelimetr / 2) {
          string = string + symbol;
        }
        if (j > maxLength - quantityDelimetr / 2) {
          string = string + delimetr;
        }
      }
      console.log(string);
    }
  };
  
  var myElka = {
    firstSection: [3, '*', ' '],
    secondSection: [4, '*', '-'],
    thirdSection: [5, '*', '=']
  };
  
  //  call the section
  for (key in myElka) {
    drawTree(myElka[key]);
  };