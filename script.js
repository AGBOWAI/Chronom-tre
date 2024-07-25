let timer;
let elapsedTime = 0; // Temps écoulé en millisecondes
let isRunning = false;

function updateDisplay() {
    const hours = Math.floor(elapsedTime / 3600000);
    const minutes = Math.floor((elapsedTime % 3600000) / 60000);
    const seconds = Math.floor((elapsedTime % 60000) / 1000);

    document.getElementById('display').textContent =
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function start() {
    if (!isRunning) {
        isRunning = true;
        const startTime = Date.now() - elapsedTime;
        timer = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 1000);
    }
}

function stop() {
    if (isRunning) {
        isRunning = false;
        clearInterval(timer);
    }
}

function reset() {
    stop();
    elapsedTime = 0;
    updateDisplay();
}

document.getElementById('start').addEventListener('click', start); // ce sont des ecouteurs évenementiels(la fonction start se déclenche lorsqu'un click est fait sur le bouton"Start")
document.getElementById('stop').addEventListener('click', stop); // ce sont des ecouteurs évenementiels(la fonction stop se déclenche lorsqu'un click est fait sur le bouton"Stop")
document.getElementById('reset').addEventListener('click', reset); // ce sont des ecouteurs évenementiels(la fonction reset se déclenche lorsqu'un click est fait sur le bouton"rReset")
