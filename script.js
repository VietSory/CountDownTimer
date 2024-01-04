const newYear ="2/1/2024";
const daysleft = document.getElementById("days");
const hoursleft = document.getElementById("hours");
const minutesleft = document.getElementById("mins");
const secondsleft = document.getElementById("seconds");

function countDown(){
    const newYearDate = new Date(newYear);
    const currentDate = new Date();
    const totalSeconds = (newYearDate - currentDate) / 1000;
    const days = Math.floor(totalSeconds/3600/24);
    const hours = Math.floor(totalSeconds/3600)%24;
    const minutes = Math.floor(totalSeconds/60)%60;
    const seconds = Math.floor(totalSeconds)%60;
    daysleft.innerHTML = formatTime(days);
    hoursleft.innerHTML = formatTime(hours);
    minutesleft.innerHTML = formatTime(minutes);
    secondsleft.innerHTML = formatTime(seconds);
}
function formatTime(time){
    return time < 10 ? `0${time}` : time;
}
setInterval(countDown,1000);
countDown();