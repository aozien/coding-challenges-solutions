/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function (nums) {
    if (nums.length <= 4) return 0;
    var sorted = nums.sort((a, b) => a - b);
    var minDiff = 10 ** 32;
    for (let i = 0; i < 4; i++) {
        let pointer = `${i}, ${sorted.length - 4 + i}`
        let diff = sorted[sorted.length - 4 + i] - sorted[i];
        if (diff < minDiff) {
            minDiff = diff;
            console.log(pointer)
        }
    }
    return minDiff;
};
