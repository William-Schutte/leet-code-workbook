/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  // This is the interval that will replace the old overlapping ones
  let [start, end] = newInterval;
  let left = [];
  let right = [];

  for (const interval of intervals) {
    const [i_start, i_end] = interval;
    // First two conditions maintain intervals that are not operlapping with newInterval
    if (i_end < start) {
      left.push(interval);
    } else if (i_start > end) {
      right.push(interval);
    } else {
      // That means there are intersections, create a new start or end
      start = Math.min(start, i_start);
      end = Math.max(end, i_end);
    }
  }

  return [...left, [start, end], ...right];
};
