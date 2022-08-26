/**
 * @param {string} blocks
 * @param {number} k
 * @return {number}
 */
var minimumRecolors = function (bl, k) {
    var blocks = bl.split("");
    var result = new Array(blocks.length - k + 1);
    result[0] = 0;
    for (let i = 0; i < k; i++) {
        result[0] += blocks[i] == "W" ? 1 : 0;
    }
    
    for (let i = 0; i < blocks.length - k; i++) 
    {
        let windowEnd = i+k;
        if(blocks[windowEnd]  == blocks[i] ){
            result[i+1] = result[i];
        }else if (blocks[windowEnd] == "W"){
            result[i+1] = result[i]+1;

        }else {
            result[i+1] = result[i]-1;
        }
    }
    return Math.min(...result);
};

console.log(
    minimumRecolors("WBBWWBBWBW",7)
    )

    console.log(
        minimumRecolors("WBWBBBW",7)
        )
    