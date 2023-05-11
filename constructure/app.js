function splitSentence(sentence) {
    return sentence.split(" ");
  }
  
  const sentence = "What does Eshgin say? Bla bla bla bla";
  const words = splitSentence(sentence);
  
  console.log("The original sentence is: " + sentence);
  console.log("The words in the sentence are: " + words.join(", "));  