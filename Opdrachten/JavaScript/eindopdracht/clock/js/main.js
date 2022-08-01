setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-min-hand]');
const secondHand = document.querySelector('[data-sec-hand]');

const url = window.location.search;
const urlParams = new URLSearchParams(url);
let selectedTimeZone = urlParams.get('timezone');

if(selectedTimeZone == null){
    selectedTimeZone = 'Europe/Amsterdam';
}

const dropdownTZ = document.querySelector('[data-timezone]');
const currentTZ = dropdownTZ[0];

for(let i = 0; i < dropdownTZ.length; i++){
    if(dropdownTZ[i].value == selectedTimeZone){
        currentTZ.textContent = 'Selected TimeZone: ' + dropdownTZ[i].textContent
    }
}


dropdownTZ.appendChild(currentTZ);

function setClock() {
    const currentDate = changeTimeZone(new Date(), selectedTimeZone);
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondHand, secondsRatio);
    setRotation(minuteHand, minutesRatio);
    setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

function changeTimeZone(date, timeZone) {
    if (typeof date === 'string') {
        return new Date(
            new Date(date).toLocaleString('en-US', {
                timeZone,
            }),
        );
    }
    return new Date(
        date.toLocaleString('en-US', {
            timeZone,
        }),
    );
}


setClock();