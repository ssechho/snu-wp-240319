document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("startButton");
    const minutesDisplay = document.getElementById("minutes");
    const secondsDisplay = document.getElementById("seconds");
    let totalSeconds = 0;
    let interval;

    startButton.addEventListener("click", function() {
        if (!interval) {
            totalSeconds = 0;
            interval = setInterval(updateTimer, 1000);
            startButton.textContent = "정지";
        } else {
            clearInterval(interval);
            interval = null;
            startButton.textContent = "시작";
        }
    });

    function updateTimer() {
        totalSeconds++;
        const minutes = Math.floor(totalSeconds / 60).toString().padStart(2, "0");
        const seconds = (totalSeconds % 60).toString().padStart(2, "0");
        minutesDisplay.textContent = minutes;
        secondsDisplay.textContent = seconds;
    }
});
