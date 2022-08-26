// console.log("hello world");

const letters = "abcdefghijklmnopqrstuvwxyz";
var indexToChar = {};
var charToIndex = {};
letters.split("").forEach((a, i) => {
    indexToChar[i] = a;
    charToIndex[a] = i;
});

// var shiftingLetters = function (s, shifts) {
//     var chars = s.split("");
//     for (const shift of shifts) {
//         for (let j = shift[0]; j <= shift[1]; j++) 
//         {
//             chars[j] = moveChar(chars[j],shift[2]);
//         }
//     }
//     return chars.join("");
// };

// function moveChar(char, direction){
//     var newInd = charToIndex[char] + (direction? direction : -1);
//     if(newInd < 0 ) newInd +=26;
//     else if(newInd > 25 ) newInd -=26;
//     return indexToChar[newInd];
// }



var shiftingLetters = function (s, shifts) {
    var arr = new Array(s.length).fill(0);
    
    for (const shift of shifts) {
        for (let j = shift[0]; j <= shift[1]; j++) 
        {
            arr[j] += shift[2] ? shift[2] : -1;
        }
    }
    return  s.split("").map((a,i)=>{
        return shiftChar(a, arr[i]);
    }).join("");
    
};
function shiftChar(char,shift){
    var newInd = (charToIndex[char] + shift)%26;
        if(newInd < 0 ) newInd +=26;
    else if(newInd > 25 ) newInd -=26;
    return indexToChar[newInd];
}
console.log(shiftingLetters("abc",  [ [0,1,0],[1,2,1],[0,2,1]]));
console.log(shiftingLetters("dztz", [[0,0,0],[1,1,1]]));
