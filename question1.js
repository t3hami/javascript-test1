//Q1. find biggest number in array [1,2,3,4,5,6,7,8,9];
function maximum(array) {
    var max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) max = array[i];
    }
    return max;
}

var array = [9,8,7,6,9, 10,5,3,2];
console.log(maximum(array));
