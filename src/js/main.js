let themeList = [
	"Mamma, se på meg",
	"Hallo Bestefar",
	"Ikke i dag ... eller i morgen",
	"Hvordan går det?",
	"Så mange bananer",
	"Spiseklar mango",
	"Ingen kan se meg nå",
	"Trange gater",
	"Gaudies byggninger",
	"Svensk lungemos",
	"Jeg føller meg ikke så hot i dag",
	"Endelig sommer igjen",
	"Er vi snart fremme?",
	"Dette er bare så meg",
	"Rare drømmer",
	"Den vondeste dagen i mitt liv",
	"Jeg elsker ostepop",
	"En dag på IKEA",
	"I natt sover vi i skogen",
	"Hva var 2+5 igjen?",
	"Eg trur eg har déjà vu",
	"Nå henger månen lavt øve' fjorden",
	"Jeg trur jeg blir gal",
	"Har den lampen altit stått der?",
	"For en bart!",
	"Peis & kose-rock",
	"Forskerne har funnet ut en hel del",
	"Hun kaster et nytt blikk på skulpturen",
	"Jeg reiser mye",
	"Å få den spesielle følelsen",
	"Hun slo opp med meg, igjen",
	"Et fortrengt mareritt fra skoledagene",
	"I mitt neste liv vil jeg bli ei...",
	"Røyk er digg",
	"Det er ubehagelig å se på",
	"En magisk aften",
	"Klarsynt healer og medium",
	"Sterk utenpå, sterk inni",
	"Slik former du kroppen",
	"Fordi jeg altid har elsket deg",
	"Perfekt for deg som vil spare penger",
	"Oi, så fin den var!",
	"Så hyggelig å se deg igjen",
	"Norske barnehager",
	"Eg elskar å vera den rare tanta",
	"Verktøy eller våpen",
	"Jeg vil prate om oss",
	"For mange filtre"
];

console.log(`There are currently, ${themeList.length} sentences in the system.`);

let themeTextElement = document.querySelector(".theme");
let buttonElement = document.querySelector(".button");

let generateTheme = (event) => {
	let theme = themeList[Math.floor(Math.random() * themeList.length)];
	themeTextElement.textContent = theme;
}

buttonElement.addEventListener("click", generateTheme)
document.addEventListener("DOMContentLoaded", generateTheme)
