function reverse(str) {
    let newStr = '';
    for(let i=str.length-1; i>-1; i--) {
        newStr = newStr + str[i];
    }
    return newStr;
    //str.split('').reverse().join();
}

function palindrome(str) {
    if (str == reverse(str))
        return true;
    else
        return false;
}


let str = "i m normal string";
console.log(reverse(str));
console.log(palindrome("eye")); // true
console.log(palindrome("egg")); // false