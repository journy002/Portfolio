const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');

function loadClock(){
    const date = new Date();

    const month = date.getMonth();
    const clockDate = date.getDate();
    const day = date.getDay();
    const week = ['일','월','화','수','목','금','토'];

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    h1.innerText = `${month + 1}월${clockDate}${week[day]}`;
    h2.innerText = `${hours < 10 ? `0${hours}`:hours}:${minutes < 10 ? `0${minutes}`:minutes}:${seconds < 10 ? `0${seconds}`:seconds}`
}

function init(){
    loadClock();

    setInterval(loadClock, 1000);
}

init();
