function isPalindrome(word) {
  // Write your algorithm here
}
function isPalindrome(word) {
  function isLetter(char) {
    return /[a-z]/.test(char);
  }

  const cleanedWord = word.toLowerCase().split('').filter(isLetter).join('');

  let start = 0;
  let end = cleanedWord.length - 1;

  while (start < end) {
    if (cleanedWord[start] !== cleanedWord[end]) {
      return false;
    }
    start++;
    end--;
  }

  return true;
}

console.log("Expecting: true");
console.log("=>", isPalindrome("racecar"));

console.log("");

console.log("Expecting: true");
console.log("=>", isPalindrome("mom"));

console.log("");

console.log("Expecting: true");
console.log("=>", isPalindrome("abba"));

console.log("");

console.log("Expecting: true");
console.log("=>", isPalindrome("a"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("hi"));

console.log("");

console.log("Expecting: false");
console.log("=>", isPalindrome("robot"));

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
