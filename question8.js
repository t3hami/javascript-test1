//Q8.Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit;
function celToFar(temp) {
    return temp * (9 / 5) + 32;
}

function farToCel(temp) {
    return (temp - 32) * (9 / 5);
}
