export default function({
   minutesDisplay, secondsDisplay, stopSounds, resetSoundsColors, timerEnd, buttonPlay
}) {

   let timerTimeOut;
   let initialMinutes = String(minutesDisplay.textContent).padStart(2, "0");

   function countDown () {
      timerTimeOut = setTimeout( () => {
         let minutes = Number(minutesDisplay.textContent);
         let seconds = Number(secondsDisplay.textContent);
         
         minutesDisplay.textContent = String(minutes).padStart(2, "0");

         if ( minutes <= 0 && seconds <= 0 ) {
            stopSounds();
            resetSoundsColors();
            timerEnd();
            minutesDisplay.textContent = initialMinutes;
            buttonPlay.removeAttribute('disabled');
            return;
         } else if ( seconds <= 0 ) {
            seconds = 60;
            --minutes;
         }

         minutesDisplay.textContent = String(minutes).padStart(2, "0");
         secondsDisplay.textContent = String(seconds - 1).padStart(2, "0");

         countDown();
      }, 1000)
   }

   function increaseTime () {
      let minutes = Number(minutesDisplay.textContent);
      minutesDisplay.textContent = String(minutes + 5).padStart(2, "0");
   }

   function decrementTime () {
      let minutes = Number(minutesDisplay.textContent);
      let numberDecrement = 5;
      
      if (minutes > 5) {
         minutes -= numberDecrement;
         minutesDisplay.textContent = String(minutes).padStart(2, "0"); 
      } else {
         numberDecrement = Number(minutesDisplay.textContent);
         minutes -= numberDecrement;

         minutesDisplay.textContent = String(minutes).padStart(2, "0");
         secondsDisplay.textContent = String(0).padStart(2, "0");     
      }
   }

   function hold() {
      clearTimeout(timerTimeOut);
   }

   return {
      countDown,
      hold,
      increaseTime,
      decrementTime
   }
}