// Funkce pro vygenerování náhodného celého čísla mezi hodnotami minimum
// (včetně) a maximum (včetně).
function generateRandomNumber (minimum, maximum) {
  let result = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  return result;
}

window.addEventListener('load', function () {
  let randomNumber = generateRandomNumber(0, 100);
  console.log('random number', randomNumber);

  let guessCounter = 0

  let guessForm = document.querySelector('.guess-form');

  let inputNumber = document.querySelector('.input-number');

  let titleElement = document.querySelector('.title')

  guessForm.addEventListener('submit', function (event) {
    event.preventDefault()
    let userGuess = Number(inputNumber.value);

    guessCounter = guessCounter + 1

    if (userGuess === randomNumber) {
      titleElement.innerHTML = '🎉 uhodla jsi na ' + guessCounter + ' pokusů 🎉'
    } else if (userGuess > randomNumber) {
      titleElement.innerHTML = 'myslim si mensi cislo'
    } else {
      titleElement.innerHTML = 'myslim si vetsi cislo'
    }

  });

});
