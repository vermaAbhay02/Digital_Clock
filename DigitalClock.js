let hrs = document.getElementById('hour');

let min = document.getElementById('minute');

let sec = document.getElementById('second');

let start = document.getElementById('start');

let stop = document.getElementById('stop');

let isRunning;

stop.addEventListener('click', () => {

    clearInterval(isRunning);
});

start.addEventListener('click', () => {

    isRunning = setInterval(() => {

        let currentTime = new Date();

        hour.innerHTML = (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();

        minute.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();

        second.innerHTML = (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();

    }, 1000);
    
});





