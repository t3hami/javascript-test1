//Q5.Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

function displayDateTime() {
    var today = new Date();
    var day = days[today.getDay()];
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    var amOrPm = 'AM';
    if (parseInt(hours) >= 12){
        hours = hours - 12;
        amOrPm = 'PM';
    }

    console.log('Today is: ' + day);
    console.log('Current time is ' + hours + ' ' + amOrPm + ' : ' + minutes + ' : ' + seconds);
}

displayDateTime();