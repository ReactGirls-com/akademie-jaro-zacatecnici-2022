// Funkce pro vygenerování náhodného celého čísla mezi hodnotami minimum
// (včetně) a maximum (včetně).
function generateRandomNumber (minimum, maximum) {
  let result = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  return result;
}

window.addEventListener('load', function () {
  let randomNumber = generateRandomNumber(0, 100);
  console.log('random number', randomNumber);

  let guessForm = document.querySelector('.guess-form');

  let inputNumber = document.querySelector('.input-number');

  guessForm.addEventListener('submit', function (event) {
    event.preventDefault()
    let userGuess = Number(inputNumber.value);

    if (userGuess === randomNumber) {
      console.log('uhodla jsi')
    } else if (userGuess > randomNumber) {
      console.log('myslim si mensi cislo')
    } else {
      console.log('myslim si vetsi cislo')
    }

  });

});
