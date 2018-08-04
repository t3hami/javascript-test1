// Q2.Make this syntax possible: var a = add(2)(3); //5
function add(a) {
    return function(b) {
       return a + b;
    }
}

var a = add(2)(3);
console.log('Sum: ' + a);