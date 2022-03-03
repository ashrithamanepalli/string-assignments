const rightAlignedTriangle = function (height) {
  let star = "*";
  for (let count = 1; count <= height; count++) {
    console.log(star.repeat(count).padStart(height));
  }
}

rightAlignedTriangle(6);