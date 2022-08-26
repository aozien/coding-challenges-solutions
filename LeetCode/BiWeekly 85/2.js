var secondsToRemoveOccurrences = function (s) {
    if (s.length == 1) return 0;
    var chars = s.split("");
    var count = 0;
    var out = s.split("");
    while (flip(chars,out)) 
    count++;
    return count;
};

function flip(arr) {
    if(arr.length == 1) return false;
    var flipped = false;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] == '1' && arr[i - 1] == '0') {
            arr[i] = '0';
            arr[i - 1] = '1';
            flipped = true;
            i++;
        }
    }
    return flipped;
}