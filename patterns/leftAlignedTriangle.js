const leftAlignedTriangle = function (size) {
  let star = "*";
  for (let count = 1; count <= size; count++) {
    console.log(star.repeat(count));
  }
}

leftAlignedTriangle(6);