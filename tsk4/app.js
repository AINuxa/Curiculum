function prop2Taker(obj) {
    return obj['prop-2'];
  }

  console.log(prop2Taker({ one: 1, 'prop-2': 2})); // Output: 2
  console.log(prop2Taker({ 'prop-2': 'two', prop: 'test'})); // Output: 'two'