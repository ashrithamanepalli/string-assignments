function printFilledRectangle(length, breadth) {
  let star = "*";
  for (let number = 1; number <= length; number++) {
    console.log(star.repeat(breadth));
  }
}

printFilledRectangle(4, 10);