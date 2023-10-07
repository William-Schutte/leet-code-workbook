/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // Iterate over intervals
  // While interval n extends into interval m, set new max
  // When gap is found, merge
  if (intervals.length < 2) return intervals;

  const answer = [];
  intervals.sort((a, b) => a[0] - b[0]);
  let left = intervals[0][0];
  let right = intervals[0][1];

  for (let i = 1; i <= intervals.length; i++) {
    if (i === intervals.length) {
      answer.push([left, right]);
      break;
    }
    if (right >= intervals[i][0]) {
      left = Math.min(intervals[i][0], left);
      right = Math.max(intervals[i][1], right);
    } else {
      answer.push([left, right]);
      left = intervals[i][0];
      right = intervals[i][1];
    }
  }
  return answer;
};
