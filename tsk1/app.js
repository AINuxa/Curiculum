function reverseNumber(num) {
    let reversed = 0;

    while (num !== 0) {
      reversed = reversed * 10 + (num % 10);
      num = Math.floor(num / 10);
    }

    return reversed;
  }

  function handleSubmit(event) {
    event.preventDefault();
    const inputNum = parseInt(document.getElementById('inputNum').value);
    const reversedNum = reverseNumber(inputNum);
    document.getElementById('output').textContent = `Reversed number: ${reversedNum}`;
  }