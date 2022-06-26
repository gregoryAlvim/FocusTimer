export default function({
   buttonForestSound, buttonRainSound, buttonCoffeeShopSound, buttonFireSound, buttonSun,
   buttonMoon, bgColorLightnessValue, stopSounds
}) {

   function resetSelectSounds () {
      buttonForestSound.style.backgroundColor = "var(--soundCardsColor)";
      buttonRainSound.style.backgroundColor = "var(--soundCardsColor)";
      buttonCoffeeShopSound.style.backgroundColor = "var(--soundCardsColor)";
      buttonFireSound.style.backgroundColor = "var(--soundCardsColor)";
      
   }

   function selectSoundColor(sound) {
         resetSelectSounds();
         sound.style.backgroundColor = "var(--soundCardsColorHover)";
   }


   function alterTheme () {
      if (bgColorLightnessValue() == 100) {
         document.documentElement.style.setProperty('--bgColorLightness', '7%');

         document.documentElement.style.setProperty('--itemsSaturation', '7%');
         document.documentElement.style.setProperty('--itemsColorLightness', '78%');

         document.documentElement.style.setProperty('--timerColorLightness', '100%');

         document.documentElement.style.setProperty('--soundCardsColorSaturation', '6%');
         document.documentElement.style.setProperty('--soundCardsColorLightness', '17%');

         document.documentElement.style.setProperty('--soundCardsColorHoverHue', '195');
         document.documentElement.style.setProperty('--soundCardsColorHoverSaturation', '74%');
         document.documentElement.style.setProperty('--soundCardsColorHoverLightness', '15%');
         

         buttonSun.classList.add('hide');
         buttonMoon.classList.remove('hide');

      } else {
         document.documentElement.style.setProperty('--bgColorLightness', '100%');

         document.documentElement.style.setProperty('--itemsSaturation', '6%');
         document.documentElement.style.setProperty('--itemsColorLightness', '21%');

         document.documentElement.style.setProperty('--timerColorLightness', '21%');

         document.documentElement.style.setProperty('--soundCardsColorSaturation', '9%');
         document.documentElement.style.setProperty('--soundCardsColorLightness', '89%');

         document.documentElement.style.setProperty('--soundCardsColorHoverHue', '194');
         document.documentElement.style.setProperty('--soundCardsColorHoverSaturation', '97%');
         document.documentElement.style.setProperty('--soundCardsColorHoverLightness', '31%');

         buttonMoon.classList.add('hide');
         buttonSun.classList.remove('hide'); 
      }
   }

   return {
      resetSelectSounds,
      selectSoundColor,
      alterTheme
   }
}