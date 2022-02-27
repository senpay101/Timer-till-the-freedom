timer();

function timer(){
    var today = new Date();

    var days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    var year = 'Year: ' + today.getFullYear();
    var dayOfWeek = today.getDay();
    var day = 'Date: ' + today.getDate();
    var month ='Month: ' +  (today.getMonth()+1);
    var time = 'Current time is: ' + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

    document.getElementById("year").innerHTML = year;
    document.getElementById("day-of-week").innerHTML = "Today is: " +  days[dayOfWeek - 1];
    document.getElementById("day").innerHTML = day;
    document.getElementById("month").innerHTML = month;
    document.getElementById("time").innerHTML = time;


    var countDownDate = new Date("Jul 25, 2024");
    var now = new Date();
    var timeleft = countDownDate - now;
    var daysLeft = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    document.getElementById("days-left").innerHTML = daysLeft + " days left until the freedom!";
    setTimeout(timer,1000);

}

var int1 = document.getElementById("int1");
var int2 = document.getElementById("int2");
var multiply = document.getElementById("multiply-btn");
var divide =  document.getElementById("divide-btn");

var result;

multiply.onclick = function() {
    result = int1.value * int2.value;
    document.getElementById("result").innerHTML = result;
}

divide.onclick = function() {
    result = int1.value / int2.value;
    document.getElementById("result").innerHTML = result;
}




    