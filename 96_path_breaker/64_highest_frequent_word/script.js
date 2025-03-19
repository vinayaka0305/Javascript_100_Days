const sentence = "apple orange banana apple grape apple";

function findHighestFrequentWord(sentence) {
  const freq = {};
  const str = sentence.split(" ");
  console.log(str);
  for (let char of str) {
    freq[char] = (freq[char] || 0) + 1;
  }
  console.log(freq);

  for (let char of str) {
    if (freq[char] > 1) {
      return char;
    }
  }
  return null;
}

console.log(findHighestFrequentWord(sentence));
