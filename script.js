document.addEventListener("DOMContendLoaded", () => {
    const clock = document.getElementById('clock');

    clock.innerHTML = "test";

    const time = Date.now();

    console.log(clock);
    console.log(time);
});