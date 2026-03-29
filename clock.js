console.log("fail ühendatud")

let hours, minutes, seconds, day, month, year, dateTime; //let sest var on vana, võib ka const kasutada, let saab üle kirjutada, const ei saa
let fontSize = 25;


function changeFontSizeBigger(){
    fontSize = fontSize + 5;
    if(fontSize > 180){
        fontSize = 180;
        window.alert("Fondi suurus ei saa olla üle 180 piksli!")
    }
    document.getElementById('dateContainer').style.fontSize = fontSize + "px";
    document.getElementById('clockContainer').style.fontSize = fontSize + "px";
}

function changeFontSizeSmaller(){
    fontSize = fontSize - 5;
    if(fontSize < 10){
        fontSize = 10;
        window.alert("Fondi suurus ei saa olla alla 10 piksli!");
    }
    document.getElementById('dateContainer').style.fontSize = fontSize + "px";
    document.getElementById('clockContainer').style.fontSize = fontSize + "px";
}

function upDateClock() {
    dateTime = new Date();

    hours = dateTime.getHours();
    minutes = dateTime.getMinutes();
    seconds = dateTime.getSeconds();

    if (hours < 10) {
        hours = "0" + hours
    }

    if (minutes < 10) {
        minutes = "0" + minutes
    }

    if (seconds < 10) {
        seconds = "0" + seconds
    }

    document.getElementById('hours').innerHTML = hours + ":";
    document.getElementById('minutes').innerHTML = minutes + ":";
    document.getElementById('seconds').innerHTML = seconds;
}

function updateDate(){
    dateTime = new Date();
    
    day = dateTime.getDate();
    month = dateTime.getMonth() + 1;
    year = dateTime.getFullYear();

    if(day < 10){
        day = "0" + day
    }

    if (month < 10) {
        month = "0" + month
    }



    document.getElementById('day').innerHTML = day + ".";
    document.getElementById('month').innerHTML = month + ".";
    document.getElementById('year').innerHTML = year;

}

function checkKey(e){
    console.log(e.keyCode)
    if(e.keyCode == 43){
        changeFontSizeBigger();
    }
    if(e.keyCode == 45){
        changeFontSizeSmaller();
    }
}

//muudab kellale vajutades kella texti värvi roosaks
document.getElementById('clockContainer').addEventListener('click', function () {
    document.getElementById('hours').style.color = 'pink';
    document.getElementById('minutes').style.color = 'pink';
    document.getElementById('seconds').style.color = 'pink';
})

document.getElementById('dateContainer').addEventListener('click', function () {
    document.getElementById('day').style.color = 'blue';
    document.getElementById('month').style.color = 'blue';
    document.getElementById('year').style.color = 'blue';
})


upDateClock();
updateDate();
setInterval(upDateClock, 1000);
setInterval(updateDate, 60000);
document.getElementById('bigger').addEventListener('click', changeFontSizeBigger);
document.getElementById('smaller').addEventListener('click', changeFontSizeSmaller);
window.addEventListener('keypress', checkKey);