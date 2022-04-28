// // Pozdravení uživatele
// let jmeno = prompt("Zadej svoje jméno:");
// console.log(`Ahoj, tvoje jméno je ${jmeno}.`);

// --------------------------------------------------

// // Načtení čísla od uživatele
// let hodina = Number(prompt("Zadej, kolik je hodin:"));
// if (hodina < 9) {
// 	console.log("Je ráno.");
// } else if (hodina < 12) {
// 	console.log("Je dopoledne");
// } else if (hodina === 12) {
// 	console.log("Je poledne.");
// } else {
// 	console.log("Je odpoledne.");
// }

// --------------------------------------------------

// Vypsání všech lichých čísel od 1 do 9
for (let i = 1; i <= 9; i++) {
	if (i % 2 === 1) {
		console.log(i);
	}
}
