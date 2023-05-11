function letterFromPosition(position) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    return alphabet.split("").splice(position - 1, 1)[0];
  }
  const letterSpan = document.getElementById("letter");
  letterSpan.textContent = letterFromPosition(1);