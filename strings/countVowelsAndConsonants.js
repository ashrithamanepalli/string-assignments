const isConsonant = function (letter) {
  let consonants = "bcdfghjklmnpqrstvwxyz";
  return consonants.includes(letter.toLowerCase());
}

const isVowel = function (letter) {
  let vowels = "aeiou";
  return vowels.includes(letter.toLowerCase());
}

const count = function (text, operation) {
  let count = 0;
  for (let element = 0; element < text.length; element++) {
    if (operation(text[element])) {
      count = count + 1;
    }
  }
  return count;
}

const countVowels = function (text) {
  return count(text, isVowel);
}

const countConsonants = function (text) {
  return count(text, isConsonant);
}

const main = function () {
  console.log("Vowels in 'audio' - ", countVowels("audio"));
  console.log("Consonants in 'rhymes' - ", countConsonants("rhymes"));
}

const testFunction = function (functionName, string, expectedCount, message) {
  let mark = "✓"
  if (functionName(string) !== expectedCount) {
    mark = "x";
  }
  console.log(mark, " - ", message);
}

const countVowelsTests = function () {
  console.log("Vowels count");
  testFunction(countVowels, "a", 1, "Single vowel a");
  testFunction(countVowels, "e", 1, "Single vowel e");
  testFunction(countVowels, "aa", 2, "Single repeated vowel");
  testFunction(countVowels, "ou", 2, "Two different vowels");
  testFunction(countVowels, "in", 1, "A vowel and a consonant");
  testFunction(countVowels, "try", 0, "No vowel");
  testFunction(countVowels, "Art", 1, "Vowel in capital letter");
}

const countConsonantsTests = function () {
  console.log("Consonants count");
  testFunction(countConsonants, "s", 1, "Single consonant s");
  testFunction(countConsonants, "ss", 2, "Single repeated consonant");
  testFunction(countConsonants, "ly", 2, "Two different consonants");
  testFunction(countConsonants, "on", 1, "A consonant and a consonant");
  testFunction(countConsonants, "Tea", 1, "consonant in capital letter");
}

countVowelsTests();
countConsonantsTests();
main();