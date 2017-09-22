document.addEventListener("DOMContentLoaded", () => {
    const clock = document.getElementById('clock');

    let counter = setInterval(() => {
        let time = new Date;
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        clock.innerHTML =
            `${formatTime(nonMilTime(hours))}:${formatTime(minutes)}:${formatTime(seconds)} ${ampm(hours)}`;
    }, 1000);
});


function formatTime(num) {
    return (num < 10) ? `0${num}` : `${num}`;
}

function ampm(num) {
    return (num > 12) ? 'pm' : 'am';
}

function nonMilTime(hours) {
    if (hours > 12) {
      return (hours % 12) == 0 ? 12 : hours % 12
    } else{
      return hours == 0 ? 12 : hours;
    }
};
