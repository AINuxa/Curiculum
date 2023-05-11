function convertMilesToKilometers(milesArray) {
    var kilometersArray = [];
    for (var i = 0; i < milesArray.length; i++) {
      var kilometers = milesArray[i] * 1.60934;
      kilometersArray.push(kilometers);
    }
    return kilometersArray;
  }  