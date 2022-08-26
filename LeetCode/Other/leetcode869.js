/**
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function(n) {
    if(n < 10 && [1,2,4,8].includes(n)) return true;
    var table = [];
    let targetNum = n.toString().split("").sort().join("");
    for(var i=3;i<30;i++){
        let c =2**i;
        let cLen = c.toString().length;
        if(cLen> n.toString().length) break;
        if(cLen< n.toString().length) continue;
        table.push(c.toString().split("").sort().join(""));
    }
    for (const item of table) {
        if(compareStr(item, targetNum)) return true;
    }
    return false;
};

function compareStr(str1,str2){
    if(str1.length != str2.length) return false;
    for (let i = 0; i < str1.length; i++) {
        if(str1[i] != str2[i]) return false;
    }
    return true;
}

console.log(`object`, reorderedPowerOf2(10))
console.log(`object`, reorderedPowerOf2(23))
console.log(`object`, reorderedPowerOf2(4210))
console.log(`object`, reorderedPowerOf2(125))
console.log(`object`, reorderedPowerOf2(46))