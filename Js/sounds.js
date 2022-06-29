export default function({
   buttonForestSound, buttonRainSound, buttonCoffeeShopSound, buttonFireSound, volumeRangeReturn
}) {

   const forestSound = new Audio("../Sounds/Floresta.wav");
   const rainSound = new Audio("../Sounds/Chuva.wav");
   const coffeeShopSound = new Audio("../Sounds/Cafeteria.wav");
   const fireSound = new Audio("../Sounds/Lareira.wav");

   const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true");
   const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true");

   forestSound.loop = true; 
   rainSound.loop = true; 
   coffeeShopSound.loop = true; 
   fireSound.loop = true;

   function pressButton() {
      buttonPressAudio.play();
   }

   function timeEnd () {
      kitchenTimer.play()
   }

   function stopSounds () {
      forestSound.pause();
      rainSound.pause();
      coffeeShopSound.pause();
      fireSound.pause();
   }

   function selectSound(sound) {
      switch (sound) {
         case buttonForestSound:
            stopSounds();
            forestSound.play();
         break;

         case buttonRainSound:
            stopSounds();
            rainSound.play();
         break;

         case buttonCoffeeShopSound:
            stopSounds();
            coffeeShopSound.play();
         break;

         case buttonFireSound:
            stopSounds();
            fireSound.play();
         break;

         default:
            prompt("Ocorreu um erro!");
         break;
      }
   }

   function volumeControl (sound) {
      switch (sound) {
         case buttonForestSound:
            
            forestSound.volume = volumeRangeReturn('volumeRangeForestSound');
         break;

         case buttonRainSound:
            
            rainSound.volume = volumeRangeReturn('volumeRangeRainSound');
         break;

         case buttonCoffeeShopSound:
            
            coffeeShopSound.volume = volumeRangeReturn('volumeRangeCoffeeShopSound');
         break;

         case buttonFireSound:
            
            fireSound.volume = volumeRangeReturn('volumeRangeFireSound');
         break;

         default:
            prompt("Ocorreu um erro!");
         break;
      }
   }

   return {
      pressButton,
      timeEnd,
      selectSound,
      stopSounds,
      volumeControl
   }
}