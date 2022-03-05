var isPalindrome = function(x) {
    
    if(x<0)return false
    let xString=x.toString();
    return xString.split('').reverse().join('')===xString
    
};

/*
Runtime: 160 ms  O(len X)
Memory Usage: 51.2 MB  O(1)
*/

