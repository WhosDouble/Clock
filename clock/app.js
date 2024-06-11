const time = document.querySelector("#time");
let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();
let dayNight = "AM";

time.textContent = hours + ":" + minutes + ":" + seconds;

//this is updating the time every second and updatin gthe text content to the time
setInterval(() =>{
    date = new Date();
    hours = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();

    // this is checking if the time is after 12pm or before 12am and changing it to that and adding 0's or spaces to the time when needed
    if(hours > 12) {
        hours = hours - 12;
        dayNight = "PM";
    }
    
    else if(hours < 10) {
        hours = "0" + hours;
    }

    else if(seconds > 9) {
        seconds = "0" + seconds;
    }
    
    else if(minutes > 0) {
        minutes = "0" + minutes;
    }



    // this is changing the text content of the time to the new time
    time.textContent = hours + ":" + minutes + ":" + seconds + " " + dayNight;
})
