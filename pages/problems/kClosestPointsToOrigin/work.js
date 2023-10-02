/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
  // Brute force approach, works but slow and lots of memory
  const distanceMap = {};

  for (let i = 0; i < points.length; i++) {
    const [x, y] = points[i];
    const distance = x ** 2 + y ** 2;
    if (distanceMap[distance]) {
      distanceMap[distance].push(i);
    } else {
      distanceMap[distance] = [i];
    }
  }

  const distances = Object.keys(distanceMap).sort((a, b) => a - b);
  // Now that we have a map of all distances and the vertices at each value, we
  // can get the closest
  const solution = [];
  while (solution.length < k) {
    const d = distances.shift();
    const closePoints = distanceMap[d].map((index) => points[index]);
    solution.push(...closePoints);
  }
  return solution;
};

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest_JS = function (points, k) {
  // Assume the brute force approach wont work...
  const sortedByDistance = points.sort(
    (a, b) => a[0] ** 2 + a[1] ** 2 - (b[0] ** 2 + b[1] ** 2)
  );
  return sortedByDistance.slice(0, k);
};
