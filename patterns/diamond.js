const startingValue = function (number) {
  return (number % 2) === 1 ? 1 : 2;
}

const requiredPadding = function (maxWidth, count) {
  return Math.floor((maxWidth - count) / 2) + count;
}

const printDiamond = function (maxWidth) {
  let count = startingValue(maxWidth);
  while (count < maxWidth) {
    console.log("*".repeat(count).padStart(requiredPadding(maxWidth, count)));
    count = count + 2;
  }
  count = maxWidth;
  while (count > 0) {
    console.log("*".repeat(count).padStart(requiredPadding(maxWidth, count)));
    count = count - 2;
  }
}

printDiamond(1);
printDiamond(2);
printDiamond(3);
printDiamond(5);
printDiamond(6);