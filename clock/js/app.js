const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.minutes-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
    const now = new Date();

    // Setting the seconds
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    console.log(secondsDegrees);

    // Setting the minutes hand
    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    minsHand.style.transform = `rotate(${minutesDegrees}deg)`;
    console.log(minutesDegrees);


    // Setting the minutes hand
    const hours = now.getHours();
    const hourDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    console.log(hourDegrees);


}

setInterval(setDate, 1000);

setDate();
