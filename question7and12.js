//Q7.reverse the string
// let str = "i m normal string"
function reverse(str) {
    let newStr = '';
    for(let i=str.length-1; i>-1; i--) {
        newStr = newStr + str[i];
    }
    return newStr;
    //str.split('').reverse().join();
}
//Q12.Write a program that checks word is pelindrome or not
// ex:
// function palindrome(str) {
// return true;
// }
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