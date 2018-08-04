//Q6.Write a JavaScript program to capitalize the first letter of each word of a given string
// let str = "please make me capitalize";
let str = "please make me capitalize";
/*let newStr = str[0].toUpperCase();
for (let i=0;i<str.length-2;i++) {
    if (str[i]==' ') {
        newStr = newStr + str[i+1].toUpperCase();
    }
    else {
        newStr = newStr + str[i+1];
    }
}*/
function capitalize(str) {
    let newStr = str.split(' ');
    for (let i=0; i<newStr.length; i++) {
        newStr[i] = newStr[i][0].toUpperCase() + newStr[i].slice(1);
    }

    newStr = newStr.join(' ');
    return newStr;

}

capitalize(str);