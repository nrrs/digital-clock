document.addEventListener("DOMContentLoaded", () => {
    const clock = document.getElementById('clock');

    let counter = setInterval(() => {
        let time = new Date;
        let hours = (time.getHours() % 12);
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let ap = time.getHours();
        clock.innerHTML =
            `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)} ${ampm(ap)}`;
    }, 1000);
});


function formatTime(num) {
    return (num < 10) ? `0${num}` : `${num}`;
}

function ampm(num) {
    return (num > 12) ? 'pm' : 'am';
}