// Returns the computer's next guess from the interval (minimum, maximum), inclusive on both sides.
function guessNumber(minimum, maximum) {
	// return minimum;
	// return maximum;
	// return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
	return Math.floor((minimum + maximum) / 2);
}

// Returns the computer's first guess from the interval (minimum, maximum).
// It is a random number from the 10% wide middle of the original interval.
function guessNumberFirstTime(minimum, maximum) {
	let middle = (maximum + minimum) / 2;
	let fivePercent = (maximum - minimum) * 0.05;
	let tolerationIntervalMinimum = Math.floor(middle - fivePercent);
	let tolerationIntervalMaximum = Math.floor(middle + fivePercent);
	return Math.floor(Math.random() * (tolerationIntervalMaximum - tolerationIntervalMinimum + 1)) + tolerationIntervalMinimum;
}

window.addEventListener("load", function () {
	// set values of variables expressing the state of the game
	let highestLowBoundary = 0;
	let lowestHighBoundary = 100;
	let currentGuess;
	let numberOfGuesses = 0;

	// locate important elements on the page
	let minimumElement = document.querySelector(".minimum");
	let maximumElement = document.querySelector(".maximum");
	let startGameButton = document.querySelector(".start-game-button");
	let currentGuessElement = document.querySelector(".current-guess");
	let numberOfGuessesElement = document.querySelector(".number-of-guesses");
	let tooLowButton = document.querySelector(".too-low-button");
	let tooHighButton = document.querySelector(".too-high-button");
	let bingoButton = document.querySelector(".bingo-button");
	let h1Element = document.querySelector("h1");
	let newGameButton = document.querySelector(".new-game-button");

	// show to the user boundaries for their secret number
	minimumElement.innerHTML = highestLowBoundary;
	maximumElement.innerHTML = lowestHighBoundary;

	// Guesses the next number and redraws the playfield.
	function guessAndRedraw() {
		// guess the next number
		if (numberOfGuesses === 0) {
			currentGuess = guessNumberFirstTime(highestLowBoundary, lowestHighBoundary);
		} else {
			currentGuess = guessNumber(highestLowBoundary, lowestHighBoundary);
		}
		// increase the counter
		numberOfGuesses = numberOfGuesses + 1;
		// show the guess and the counter to the player
		currentGuessElement.innerHTML = currentGuess;
		numberOfGuessesElement.innerHTML = numberOfGuesses;
	}

	// add listener for the start game button
	startGameButton.addEventListener("click", function () {
		// change body's class to "during-game", so that we show the playfield (see CSS)
		document.body.className = "during-game";
		// make the first guess
		guessAndRedraw();
	});

	// add listener for the "too low" button
	tooLowButton.addEventListener("click", function () {
		if (currentGuess === lowestHighBoundary) {
			alert("Cheater!");
		} else {
			// increase the low boundary
			highestLowBoundary = currentGuess + 1;
			console.log(`My next guess will be between ${highestLowBoundary} and ${lowestHighBoundary}`);
			// make the next guess
			guessAndRedraw();
		}
	});

	// add listener for the "too high" button
	tooHighButton.addEventListener("click", function () {
		if (currentGuess === highestLowBoundary) {
			alert("Cheater!");
		} else {
			// decrease the high boundary
			lowestHighBoundary = currentGuess - 1;
			console.log(`My next guess will be between ${highestLowBoundary} and ${lowestHighBoundary}`);
			// make the next guess
			guessAndRedraw();
		}
	});

	// add listener for the bingo button
	bingoButton.addEventListener("click", function () {
		// change body's class to "after-game", so that we show only the final result (see CSS)
		document.body.className = "after-game";
		h1Element.innerHTML = `I won and I only needed ${numberOfGuesses} guesses!`;
	});

	// add listener for the new game button
	newGameButton.addEventListener("click", function () {
		// reload the whole page, so that we can start from scratch
		window.location.reload();
	});
});
