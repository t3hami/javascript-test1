//Q10.Write a Javascript program for factorial 5
function factorial(num) {
    if (num == 1 || num == 0){
        return 1;
    }
    else{
        return num * factorial(num - 1);
    }
}

console.log(factorial(5));