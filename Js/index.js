import { 
   buttonPlay, buttonStop, buttonIncrease, buttonDecrement,   
   buttonForestSound, buttonRainSound, buttonCoffeeShopSound, buttonFireSound,
   minutesDisplay, secondsDisplay, buttonSun, buttonMoon, bgColorLightnessValue,
   volumeRangeReturn, volumeRangeForestSound, volumeRangeRainSound, volumeRangeCoffeeShopSound,
   volumeRangeFireSound
} from "./elements.js";

import Controls from "./controls.js";
import Timer from "./timer.js";
import Sounds from "./sounds.js";

const sounds = Sounds({
   buttonForestSound, buttonRainSound, buttonCoffeeShopSound, buttonFireSound, volumeRangeReturn: volumeRangeReturn
});

const controls = Controls({
   buttonForestSound, buttonRainSound, buttonCoffeeShopSound, buttonFireSound, buttonSun, buttonMoon,
   bgColorLightnessValue, stopSounds: sounds.stopSounds
});

const timer = Timer({
   minutesDisplay, secondsDisplay, stopSounds: sounds.stopSounds, resetSoundsColors: controls.resetSelectSounds, timerEnd: sounds.timeEnd, buttonPlay
});

buttonPlay.addEventListener('click', () => {
   timer.countDown();
   sounds.pressButton();
   buttonPlay.setAttribute('disabled', 'true');
})

buttonStop.addEventListener('click', () => {
   sounds.pressButton();
   timer.hold();
   buttonPlay.removeAttribute('disabled');
})

buttonIncrease.addEventListener('click', () => {
   timer.increaseTime();
   sounds.pressButton();
})

buttonDecrement.addEventListener('click', () => {
   timer.decrementTime();
   sounds.pressButton();
})

buttonForestSound.addEventListener('click', () => {
   sounds.selectSound(buttonForestSound);
   controls.selectSoundColor(buttonForestSound);
})

buttonRainSound.addEventListener('click', () => {
   sounds.selectSound(buttonRainSound);
   controls.selectSoundColor(buttonRainSound);
})

buttonCoffeeShopSound.addEventListener('click', () => {
   sounds.selectSound(buttonCoffeeShopSound);
   controls.selectSoundColor(buttonCoffeeShopSound);
})

buttonFireSound.addEventListener('click', () => {
   sounds.selectSound(buttonFireSound);
   controls.selectSoundColor(buttonFireSound);
})

buttonSun.addEventListener('click', () => {
   controls.alterTheme();
});

buttonMoon.addEventListener('click', () => {
   controls.alterTheme();
});

volumeRangeForestSound.addEventListener('input', () => {
   sounds.volumeControl(buttonForestSound);
});

volumeRangeRainSound.addEventListener('input', () => {
   sounds.volumeControl(buttonRainSound);
});

volumeRangeCoffeeShopSound.addEventListener('input', () => {
   sounds.volumeControl(buttonCoffeeShopSound);
});

volumeRangeFireSound.addEventListener('input', () => {
   sounds.volumeControl(buttonFireSound);
});