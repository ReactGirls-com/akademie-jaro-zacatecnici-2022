// let retezec = "ReactGirls";

// // Vypsání řetězce po znacích
// for (let i = 0; i < retezec.length; i++) {
// 	console.log(retezec.charAt(i));
// }

// // Vypsání řetězce odzadu po znacích
// for (let i = retezec.length - 1; i > -1; i--) {
// 	console.log(retezec.charAt(i));
// }

// // Vypsání řetězce odzadu
// let otocenyRetezec = "";
// for (let i = retezec.length - 1; i > -1; i--) {
// 	otocenyRetezec = otocenyRetezec + retezec.charAt(i);
// }
// console.log(otocenyRetezec);

// --------------------------------------------------

// Funkce pro zjištění, zda je daný znak samohláskou. Funguje pouze pro samohlásky bez diakritiky.
// V případě, že ano, vrací funkce true, v případě, že ne, vrací false.
function jeZnakSamohlaska(znak) {
	if (
		znak === "a" ||
		znak === "A" ||
		znak === "e" ||
		znak === "E" ||
		znak === "i" ||
		znak === "I" ||
		znak === "o" ||
		znak === "O" ||
		znak === "u" ||
		znak === "U" ||
		znak === "y" ||
		znak === "Y"
	) {
		return true;
	} else {
		return false;
	}
}

// Funkce pro spočtení počtu samohlásek v řetězci.
function pocetSamohlasek(retezec) {
	let vysledek = 0;
	for (let i = 0; i < retezec.length; i++) {
		if (jeZnakSamohlaska(retezec.charAt(i))) {
			vysledek = vysledek + 1;
		}
	}
	return vysledek;
}

// // Vypsání počtu samohlásek v řetězci.
// let retezec = "Two households both alike in dignity";
// console.log(`Počet samohlásek: ${pocetSamohlasek(retezec)}.`);

// --------------------------------------------------

// let pole = [12, 5, -7, 0, 33];

// // Vypsání sudých čísel v poli
// for (let i = 0; i < pole.length; i++) {
// 	if (pole[i] % 2 === 0) {
// 		console.log(pole[i]);
// 	}
// }

// // Vypsání obsahu pole odzadu
// for (let i = pole.length - 1; i > -1; i--) {
// 	console.log(pole[i]);
// }

// --------------------------------------------------

// Funkce pro nalezení nejmenší hodnoty v poli čísel.
// V případě, že je pole prázdné, je výsledkem hodnota undefined.
function minimum(poleCisel) {
	let vysledek = undefined;
	for (let i = 0; i < poleCisel.length; i++) {
		if (vysledek === undefined || poleCisel[i] < vysledek) {
			vysledek = poleCisel[i];
		}
	}
	return vysledek;
}

// // Vypsání minima v poli
// console.log(minimum([12, 5, -7, 0, 33]));
// console.log(minimum([]));

// --------------------------------------------------

// Funkce pro nalezení nejdelšího řetězce v poli řetězců.
// V případě, že pole obsahuje více řetězců maximální délky, funkce vrátí první takový.
// V případě, že je pole prázdné, je výsledkem hodnota undefined.
function nejdelsiRetezec(poleRetezcu) {
	let vysledek = undefined;
	for (let i = 0; i < poleRetezcu.length; i++) {
		if (vysledek === undefined || poleRetezcu[i].length > vysledek.length) {
			vysledek = poleRetezcu[i];
		}
	}
	return vysledek;
}

// // Vypsání nejdelšího řetězce v poli
// console.log(nejdelsiRetezec(["Kašpar", "Melichar", "Baltazar"]));

// --------------------------------------------------

// // Nalezení nejdelšího řetězce v poli pěti řetězců zadaných uživatelem
// let poleRetezcu = [];
// for (let i = 0; i < 5; i++) {
// 	let retezec = prompt("Zadej řetězec:");
// 	poleRetezcu.push(retezec);
// }
// console.log(`Nejdelší zadaný řetězec je: ${nejdelsiRetezec(poleRetezcu)}.`);

// --------------------------------------------------

// // Nalezení řetězce s nejvíce samohláskami v poli pěti řetězců zadaných uživatelem
// let poleRetezcu = [];
// for (let i = 0; i < 5; i++) {
// 	let retezec = prompt("Zadej řetězec:");
// 	poleRetezcu.push(retezec);
// }
// let maximumSamohlasek = 0;
// let retezecSNejviceSamohlaskami = undefined;
// for (let i = 0; i < poleRetezcu.length; i++) {
// 	let aktualniPocetSamohlasek = pocetSamohlasek(poleRetezcu[i]);
// 	if (aktualniPocetSamohlasek > maximumSamohlasek) {
// 		maximumSamohlasek = aktualniPocetSamohlasek;
// 		retezecSNejviceSamohlaskami = poleRetezcu[i];
// 	}
// }
// console.log(`Řetězec s nejvíce samohláskami je: ${retezecSNejviceSamohlaskami}.`);

// --------------------------------------------------

// Funkce pro nalezení nejmladšího člověka v poli lidí (objektů reprezentujících člověka).
// V případě, že je pole prázdné, je výsledkem hodnota undefined.
function nejmladsiClovek(poleLidi) {
	let vysledek = undefined;
	for (let i = 0; i < poleLidi.length; i++) {
		if (vysledek === undefined || poleLidi[i].vek < vysledek.vek) {
			vysledek = poleLidi[i];
		}
	}
	return vysledek;
}

// // Nalezení nejmladšího člověka
// let lide = [
// 	{ jmeno: "David", prijmeni: "Novák", vek: 27 },
// 	{ jmeno: "Olga", prijmeni: "Černá", vek: 57 },
// 	{ jmeno: "Jan", prijmeni: "Sýkora", vek: 30 },
// ];
// console.log(nejmladsiClovek(lide));

// --------------------------------------------------

// Funkce pro nalezení nejvíce vydělávajícího člověka v poli lidí (objektů reprezentujících člověka).
// V případě, že je pole prázdné, je výsledkem hodnota undefined.
function nejviceVydelavajiciClovek(poleLidi) {
	let vysledek = undefined;
	for (let i = 0; i < poleLidi.length; i++) {
		if (vysledek === undefined || poleLidi[i].mzda > vysledek.mzda) {
			vysledek = poleLidi[i];
		}
	}
	return vysledek;
}

// // Nalezení nejvíce vydělávajícího člověka
// let lide = [
// 	{ jmeno: "David", prijmeni: "Novák", vek: 27, mzda: 40000 },
// 	{ jmeno: "Olga", prijmeni: "Černá", vek: 57, mzda: 70000 },
// 	{ jmeno: "Jan", prijmeni: "Sýkora", vek: 30, mzda: 30000 },
// ];
// console.log(nejviceVydelavajiciClovek(lide));

// --------------------------------------------------

// Funkce pro navýšení mzdy o 10 % lidem se mzdou menší než 50000 v poli lidí.
function pridejMeneVydelavajicim(poleLidi) {
	for (let i = 0; i < poleLidi.length; i++) {
		if (poleLidi[i].mzda < 50000) {
			poleLidi[i].mzda = poleLidi[i].mzda * 1.1;
		}
	}
}

// // Přidání lidem s nižší mzdou
// let lide = [
// 	{ jmeno: "David", prijmeni: "Novák", vek: 27, mzda: 40000 },
// 	{ jmeno: "Olga", prijmeni: "Černá", vek: 57, mzda: 70000 },
// 	{ jmeno: "Jan", prijmeni: "Sýkora", vek: 30, mzda: 30000 },
// ];
// pridejMeneVydelavajicim(lide);
// console.log(lide);

// --------------------------------------------------

// Funkce pro výpočet délky přepony na základě délek obou odvěsen pravoúhlého trojúhelníku
function delkaPrepony1(odvesnaA, odvesnaB) {
	return Math.sqrt(odvesnaA * odvesnaA + odvesnaB * odvesnaB);
}

// Funkce pro výpočet délky přepony na základě délek obou odvěsen pravoúhlého trojúhelníku
const delkaPrepony2 = function (odvesnaA, odvesnaB) {
	return Math.sqrt(odvesnaA * odvesnaA + odvesnaB * odvesnaB);
};

// Funkce pro výpočet délky přepony na základě délek obou odvěsen pravoúhlého trojúhelníku
const delkaPrepony3 = (odvesnaA, odvesnaB) => Math.sqrt(odvesnaA * odvesnaA + odvesnaB * odvesnaB);

// // Výpočet délky přepony
// console.log(delkaPrepony1(3, 4));
// console.log(delkaPrepony2(3, 4));
// console.log(delkaPrepony3(3, 4));

// --------------------------------------------------

// Funkce pro aplikaci jiné funkce (první parametr) na určitou hodnotu (druhý parametr).
function aplikuj(funkce, hodnota) {
	return funkce(hodnota);
}

// Funkce pro výpočet druhé mocniny čísla.
function druhaMocnina(x) {
	return x * x;
}

// // Předání funkce jako parametru jiné funkci
// let cislo1 = aplikuj(druhaMocnina, 4);
// let cislo2 = aplikuj(Math.round, 5.7);
// console.log(cislo1);
// console.log(cislo2);

// --------------------------------------------------

// Funkce, která aplikuje jinou funkci (první parametr) na každou položku pole (druhý parametr).
// Výsledkem je nové pole stejné velikosti jako pole původní obsahující výsledky volání předané funkce pro každou
// položku původního pole.
function aplikujNaPole(funkce, pole) {
	let vysledek = [];
	for (let i = 0; i < pole.length; i++) {
		vysledek.push(funkce(pole[i]));
	}
	return vysledek;
}

// // Získání pole druhých mocnin (k původnímu poli čísel)
// let poleDruhychMocnin = aplikujNaPole(druhaMocnina, [12, 5, -7, 0, 5]);
// console.log(poleDruhychMocnin);

// // Získání pole druhých mocnin (k původnímu poli čísel)
// poleDruhychMocnin = aplikujNaPole((x) => x * x, [12, 5, -7, 0, 5]);
// console.log(poleDruhychMocnin);

// // Získání pole řetězců velkými písmeny (k původnímu poli řetězců)
// let poleJmenVelkymiPismeny = aplikujNaPole((jmeno) => jmeno.toUpperCase(), ["Eva", "Filip", "Tereza"]);
// console.log(poleJmenVelkymiPismeny);

// // Získání pole příjmení (k původnímu poli objektů lidí)
// let polePrijmeni = aplikujNaPole(
// 	(clovek) => clovek.prijmeni,
// 	[
// 		{ jmeno: "Jan", prijmeni: "Sýkora", vek: 30 },
// 		{ jmeno: "Zdena", prijmeni: "Císařová", vek: 22 },
// 	]
// );
// console.log(polePrijmeni);
