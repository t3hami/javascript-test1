function alphabetical(str) {
    return str.split('').sort().join('');
}

var newStr = alphabetical('defgad');

console.log(newStr);