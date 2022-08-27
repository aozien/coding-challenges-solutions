//843. Guess the Word

/**
 * // This is the master's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Master() {
 *
 *     @param {string} word
 *     @return {integer}
 *     this.guess = function(word) {
 *         ...
 *     };
 * };
 */
/**
 * @param {string[]} words
 * @param {Master} master
 * @return {void}
 */
var findSecretWord = function (words, master) {
    //a 2d array comparing the input words with each other
    let compareTable = [...Array(words.length)].map(_ => Array(words.length))

    for (let i = 0; i < words.length; i++) {
        compareTable[i][i] = words[i].length;
        for (let j = i + 1; j < words.length; j++) {
            let comparison = compareTwoWords(words[i], words[j]);
            compareTable[i][j] = comparison;
            compareTable[j][i] = comparison;
        }
    }

    for (let i = 0; i <= 100; i++) {

        let wordIndex = selectWord(compareTable, words[0].length);
        let guess = words[wordIndex];
        console.log(`guess`, wordIndex)
        let result = masterGuess(guess);
        if (result == guess.length) {
            console.log(`i`, i)
            break;
        }
        else {
            //leave only the matching words
            compareTable[wordIndex]
                .map((a, i) => ({ a, i }))
                .filter(a => a.a != result).forEach(a => {
                    compareTable[a.i].fill(-1);
                    for (let j = 0; j < compareTable.length; j++) {
                        compareTable[j][a.i] = -1;
                        
                    }
                });
        }
    }
};

//returns the count of matching letters in same position
function compareTwoWords(first, second) {
    //They're guaranteed to have the same length
    let count = 0;
    for (let i = 0; i < first.length; i++) {
        if (first[i] == second[i])
            count++;
    }
    return count;
}
//Find the word with the most varying comparison result (have more distinct values)
function selectWord(compareTable, wordLength) {
    let maxSize = 0;
    let maxLength = 0;
    let maxWordIndex = 0;
    for (let i = 0; i < compareTable.length; i++) {
        let d = compareTable[i].filter(x => x > 0);
        let p = new Set(d);
        if ((d.length) >= maxLength && p.size >= maxSize) {
            maxSize = (p.size);
            maxLength = (d.length);
            maxWordIndex = i;
        }
    }
    // console.log(`maxidn`,  maxSize,maxWordIndex)
    return maxWordIndex;
}
function eleminateWords(targetValue, wordIndex, compareTable) {
    for (let i = 0; i < compareTable[wordIndex].length; i++) {
        if (compareTable[wordIndex][i] == targetValue) continue;
        compareTable[wordIndex][i] = -1;
        compareTable[i][wordIndex] = -1;
    }
}
// console.log(`object`, findSecretWord(["acckzz","ccbazz","eiowzz","abcczz"]))
"hbaczn"
console.log(`object`, findSecretWord(
    ["gaxckt", "trlccr", "jxwhkz", "ycbfps", "peayuf", "yiejjw", "ldzccp", "nqsjoa", "qrjasy", "pcldos", "acrtag", "buyeia", "ubmtpj", "drtclz", "zqderp", "snywek", "caoztp", "ibpghw", "evtkhl", "bhpfla", "ymqhxk", "qkvipb", "tvmued", "rvbass", "axeasm", "qolsjg", "roswcb", "vdjgxx", "bugbyv", "zipjpc", "tamszl", "osdifo", "dvxlxm", "iwmyfb", "wmnwhe", "hslnop", "nkrfwn", "puvgve", "rqsqpq", "jwoswl", "tittgf", "evqsqe", "aishiv", "pmwovj", "sorbte", "hbaczn", "coifed", "hrctvp", "vkytbw", "dizcxz", "arabol", "uywurk", "ppywdo", "resfls", "tmoliy", "etriev", "oanvlx", "wcsnzy", "loufkw", "onnwcy", "novblw", "mtxgwe", "rgrdbt", "ckolob", "kxnflb", "phonmg", "egcdab", "cykndr", "lkzobv", "ifwmwp", "jqmbib", "mypnvf", "lnrgnj", "clijwa", "kiioqr", "syzebr", "rqsmhg", "sczjmz", "hsdjfp", "mjcgvm", "ajotcx", "olgnfv", "mjyjxj", "wzgbmg", "lpcnbj", "yjjlwn", "blrogv", "bdplzs", "oxblph", "twejel", "rupapy", "euwrrz", "apiqzu", "ydcroj", "ldvzgq", "zailgu", "xgqpsr", "wxdyho", "alrplq", "brklfk"]
));
function masterGuess(word) {
    this.secret = "hbaczn";

    return compareTwoWords(secret, word)

}

function printTable(tab) {
    var clean = tab.map(x => x.filter(a => a !== -1));
}