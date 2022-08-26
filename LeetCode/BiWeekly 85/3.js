// var maximumSegmentSum =
//     function (nums, removeQueries) {
//         var result = new Array(nums.length);
//         for (let i = 0; i < removeQueries.length; i++) {
//             const removal = removeQueries[i];
//             nums[removal] = 0;
//             result[i] = findLargestSegmentSum(nums);
//         }
//         return result;
//     };

// function findLargestSegmentSum(nums) {
//     var maxSum = 0;
//     for (let i = 0; i < nums.length; i++) {
//         var currCount = 0;
//         while (nums[i] != 0 && i < nums.length) {
//              currCount += nums[i];
//             i++;
//         }
//         maxSum = Math.max(currCount,maxSum);
//     }
//     return maxSum;
// }

// function segment(start,end, sum){
//     this.start = start;
//     this.end = end;
// }
//NOTE: That's not a complete solution
var maximumSegmentSum =
    function (nums, removeQueries) {
        var segms =[];
        var sumSoFar = new Array(nums.length);
        sumSoFar[0] = nums[0];
        for (let i = 1; i < nums.length; i++) {
            const c = nums[i];
            sumSoFar[i] = c + sumSoFar[i - 1];
        }
        segms.push(new segment(0,nums.length));

        
        return result;
    };

function segment(start, end, sum) {
    this.start = start;
    this.end = end;
    this.sum = sum;
}