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

// // Vypsání všech lichých čísel od 1 do 9
// for (let i = 1; i <= 9; i++) {
// 	if (i % 2 === 1) {
// 		console.log(i);
// 	}
// }

// --------------------------------------------------

// // Pozdravení uživatele pomocí funkce

// function pozdravUzivatele() {
// 	let jmeno = prompt("Zadej svoje jméno:");
// 	console.log(`Ahoj, tvoje jméno je ${jmeno}.`);
// }

// pozdravUzivatele();
// pozdravUzivatele();

// --------------------------------------------------

// // Aritmetický průměr tří čísel
// function aritmetickyPrumer(cislo1, cislo2, cislo3) {
// 	let vysledek = (cislo1 + cislo2 + cislo3) / 3;
// 	return vysledek;
// }

// let cislo1 = aritmetickyPrumer(2, 4, 7);
// let cislo2 = aritmetickyPrumer(2, 3, -305);
// console.log(cislo1);
// console.log(cislo2);

// --------------------------------------------------

// // Funkce pro výpočet délky přepony na základě délek obou odvěsen pravoúhlého trojúhelníku
// function delkaPrepony(odvesnaA, odvesnaB) {
// 	let vysledek = Math.sqrt(odvesnaA * odvesnaA + odvesnaB * odvesnaB);
// 	return vysledek;
// }

// let prepona = delkaPrepony(3, 4);
// console.log(prepona);

// --------------------------------------------------

// Funkce pro vygenerování náhodného celého čísla mezi hodnotami minimum (včetně) a maximum (včetně).
function nahodneCislo(minimum, maximum) {
	let vysledek = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
	return vysledek;
}

// Funkce pro hod hrací kostkou o libovolném počtu stěn. Pro obvyklou kostku by se použilo volání hodKostkou(6).
function hodKostkou(pocetSten) {
	let vysledek = nahodneCislo(1, pocetSten);
	return vysledek;
}

// --------------------------------------------------

// // Házení kostkou tak dlouho, než padne šestka
// let kostka;
// do {
// 	kostka = hodKostkou(6);
// 	console.log(`Na kostce padlo: ${kostka}.`);
// } while (kostka !== 6);

// --------------------------------------------------

// Funkce pro načtení čísla od uživatele
function nactiCislo() {
	return Number(prompt("Zadej číslo:"));
}

// --------------------------------------------------

// Program na hádání tajného čísla uživatelem

let minimum = 1;
let maximum = 5;
let tajneCislo = nahodneCislo(minimum, maximum);
console.log(`Myslím si číslo mezi ${minimum} a ${maximum}. Dokážeš je uhodnout?`);
let hadaneCislo;
do {
	hadaneCislo = nactiCislo();
	if (hadaneCislo < tajneCislo) {
		console.log(`Kdepak, myslím si číslo větší než ${hadaneCislo}.`);
	} else if (hadaneCislo > tajneCislo) {
		console.log(`Kdepak, myslím si číslo menší než ${hadaneCislo}.`);
	} else {
		console.log(`Výborně, uhodl(a) jsi! Skutečně jsem si myslel číslo ${tajneCislo}.`);
	}
} while (hadaneCislo !== tajneCislo);
