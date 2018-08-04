//Q13.Write a JavaScript program to convert the letters of a given string in alphabetical order.
function alphabetical(str) {
    return str.split('').sort().join('');
}

var newStr = alphabetical('defgad');

console.log(newStr);