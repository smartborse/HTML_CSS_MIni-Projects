function updateClock() {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = "AM";

    if (h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    hourE1.innerText = h;
    minuteE1.innerText = m;
    secondE1.innerText = s;
    ampmE1, (innerText = ampm);
    setTimeout(() => {
        updateClock();
    }, 1000);

}
