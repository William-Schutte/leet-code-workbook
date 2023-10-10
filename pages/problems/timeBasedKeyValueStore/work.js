var TimeMap = function () {
  this.timeMap = new Map();
};

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (this.timeMap.has(key)) {
    this.timeMap.get(key)[timestamp] = value;
  } else {
    this.timeMap.set(key, []);
    this.timeMap.get(key)[timestamp] = value;
  }
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  if (this.timeMap.has(key)) {
    const timeArray = this.timeMap.get(key);
    let n = timestamp;
    while (n > 0) {
      if (timeArray[n] !== undefined) return timeArray[n];
      else n--;
    }
    return "";
  } else return "";
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */
