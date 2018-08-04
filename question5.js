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