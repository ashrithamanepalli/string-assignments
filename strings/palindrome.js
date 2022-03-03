const reverse = function (text) {
  let reversedString = "";
  for (let index = 0; index < text.length; index++) {
    reversedString = text[index] + reversedString;
  }
  return reversedString;
}

const isPalindrome = function (text) {
  return reverse(text) === text;
}

const main = function () {
  console.log(isPalindrome("ap"));
  console.log(isPalindrome("apa"));
}

const testFunction = function (actualCount, expectedCount, message) {
  let mark = "✓";
  if (actualCount !== expectedCount) {
    mark = "x";
  }
  console.log(mark, " - ", message);
}

const singleLetter = function () {
  let message = "Single letter";
  let expectedOutput = true;
  let actualOutput = isPalindrome("a");

  testFunction(actualOutput, expectedOutput, message);
}

const palindrome = function () {
  let message = "Palindrome";
  let expectedOutput = true;
  let actualOutput = isPalindrome("wow");

  testFunction(actualOutput, expectedOutput, message);
}

const notAPalindrome = function () {
  let message = "Not a palindrome";
  let expectedOutput = false;
  let actualOutput = isPalindrome("try");

  testFunction(actualOutput, expectedOutput, message);
}

const isPalindromeTests = function () {
  singleLetter();
  palindrome();
  notAPalindrome();
}

isPalindromeTests();