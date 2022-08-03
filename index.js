const hourE1 = document.getElementById("hour");

const minutesE1 = document.getElementById("minutes");

const ampmE1 = document.getElementById("ampm");

function updateClock(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if(h > 12 ){
        h = h - 12
        ampm = "PM"
    }

    hourE1.innerText = h;
    minutesE1.innerText = m;
    secondsE1.innrText = s


}

updateClock();