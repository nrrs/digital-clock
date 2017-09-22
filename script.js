document.addEventListener("DOMContentLoaded", () => {
    const clock = document.getElementById('clock');

    clock.innerHTML = "test";

    const time = new Date;
    let hours = time.getHours() + 1;
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    console.log(clock);
    console.log();
});
