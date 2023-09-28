/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
  // Microsoft paint -> Paint bucket
  // Any squares up, down, left, right of [sr,sc] get filled with new color

  // Paint the square, get 4-directional connections, recurse
  // Check for array bounds, don't fill where you came from
  if (image.length == 0) return image;

  const xSize = image[0]?.length;
  const ySize = image?.length;
  if (!xSize) {
    return new Array(image.length).fill(color);
  }
  const baseColor = image[sr][sc];
  const touched = {};

  if (sc < xSize && sr < ySize) {
    image[sr][sc] = color;
    touched[String(sr) + String(sc)] = true;
    flood(sr + 1, sc);
    flood(sr - 1, sc);
    flood(sr, sc + 1);
    flood(sr, sc - 1);
  }

  function flood(srNew, scNew) {
    if (srNew < 0 || scNew < 0) return;
    if (srNew < ySize && scNew < xSize) {
      const pixel = image[srNew][scNew];

      if (!touched[String(srNew) + String(scNew)]) {
        if (pixel === baseColor) {
          image[srNew][scNew] = color;
          touched[String(srNew) + String(scNew)] = true;

          flood(srNew + 1, scNew);
          flood(srNew - 1, scNew);
          flood(srNew, scNew + 1);
          flood(srNew, scNew - 1);
        }
      }
    }
  }

  return image;
};
