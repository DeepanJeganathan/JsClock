

var clock = setInterval(start, 10)

const hourHand= document.querySelector('.h');
const secHand= document.querySelector('.s');
const minHand= document.querySelector('.m');

function start() {
    const date = new Date();
    const millisecondRatio=date.getMilliseconds()/1000;
    const secondsRatio = (millisecondRatio+date.getSeconds())/60;
    const minutesRatio = (secondsRatio+date.getMinutes())/60;
    const hourRatio = (minutesRatio+ date.getHours())/12;

setInMotion(hourHand,hourRatio);
setInMotion(minHand,minutesRatio);
setInMotion(secHand,secondsRatio);

}

function setInMotion(element, ratio) {

    element.style.setProperty('--turn', ratio * 360);
}
start()