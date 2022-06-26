const buttonPlay = document.querySelector('.controlPlay');
const buttonStop = document.querySelector('.controlStop');
const buttonIncrease = document.querySelector('.controlIncrease');
const buttonDecrement = document.querySelector('.controlDecrement');
const buttonForestSound = document.querySelector('.optionForestSound');
const buttonRainSound = document.querySelector('.optionRainSound');
const buttonCoffeeShopSound = document.querySelector('.optionCoffeeShopSound');
const buttonFireSound = document.querySelector('.optionFireSound');

const volumeRangeForestSound = document.getElementById('volumeRangeForestSound');
const volumeRangeRainSound = document.getElementById('volumeRangeRainSound');
const volumeRangeCoffeeShopSound = document.getElementById('volumeRangeCoffeeShopSound');
const volumeRangeFireSound = document.getElementById('volumeRangeFireSound');

function volumeRangeReturn (volumeRange) {
   return document.getElementById(volumeRange).value;
}

const buttonSun = document.querySelector('.sunIcon');
const buttonMoon = document.querySelector('.moonIcon');

const minutesDisplay = document.querySelector('.minutes');
const secondsDisplay = document.querySelector('.seconds');

function bgColorLightnessValue () {
   return Number(getComputedStyle(document.documentElement).getPropertyValue('--bgColorLightness').replace('%', ''));
}

export {
   buttonPlay,
   buttonStop,
   buttonIncrease,
   buttonDecrement,
   buttonForestSound,
   buttonRainSound,
   buttonCoffeeShopSound,
   buttonFireSound,
   minutesDisplay,
   secondsDisplay,
   buttonSun,
   buttonMoon,
   bgColorLightnessValue,
   volumeRangeReturn,
   volumeRangeForestSound,
   volumeRangeRainSound,
   volumeRangeCoffeeShopSound,
   volumeRangeFireSound
}