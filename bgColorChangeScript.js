// Random Color Generator
const randomClrGen = function () {
    const colorVal = '0123456789ABCDEF';
    let hexCode = "#";
    for (let i = 0; i < 6; i++) {
        hexCode += colorVal[Math.floor(Math.random() * 16)]; // Random color gen upto 0-16
    }
    return hexCode;
}

let intervalId;

// Start Button - Change Color using setInterval

function changeClr() {
    document.body.style.backgroundColor = randomClrGen();
}
function changeColor() {
    if (intervalId == null) {
        intervalId = setInterval(changeClr, 1000);
        console.log(intervalId);
    }

}
document.getElementById('start').addEventListener('click', changeColor);

// Stop Button - Stop Changing bg Color

function stopColor() {
    clearInterval(intervalId);
    intervalId = null;
}
document.getElementById('stop').addEventListener('click', stopColor);

