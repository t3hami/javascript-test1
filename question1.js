function maximum(array) {
    var max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) max = array[i];
    }
    return max;
}

var array = [9,8,7,6,9, 10,5,3,2];
console.log(maximum(array));
