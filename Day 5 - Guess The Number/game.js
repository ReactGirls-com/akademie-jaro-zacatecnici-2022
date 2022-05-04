// Funkce pro vygenerování náhodného celého čísla mezi hodnotami minimum
// (včetně) a maximum (včetně).
function generateRandomNumber (minimum, maximum) {
  let result = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum
  return result
}

window.addEventListener('load', function () {
  let randomNumber = generateRandomNumber(0, 100)
  console.log('random number', randomNumber)

  let guessButton = document.querySelector('.guess-button')

  let inputNumber = document.querySelector('.input-number')

  guessButton.addEventListener('click', function () {
    let userGuess = inputNumber.value
    console.log('uzivatel hadal cislo', userGuess)
  })

})
