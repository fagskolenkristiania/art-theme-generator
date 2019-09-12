let themeList = [
	"Planets in Space",
	"Space Invaders",
	"Atoms and Molecules",
	"Food invasion",
	"Colorful Fruits",
	"Circus is in town",
	"Full Moon",
	"Rainy Day",
	"Say it with flowers",
	"Happy Hormones",
	"It smells lovely",
	"Old folks home",
	"Where is Waldo?",
	"Racks on racks on racks",
	"In the Forrest",
	"High street meets low street",
	"Central Station",
	"Going blind",
	"Looking sharp",
	"Seduce the mind",
	"Look twice",
	"Sargent Pepper",
	"Streets of Barcelona",
	"Swedish meatballs",
	"Can you see me?",
	"The world is burning, again",
	"Lucid dreams",
	"Feeling hot",
	"I love Ostepop",
	"Déjà vu",
	"Nå henger månen lavt øve' fjorden",
	"I still love you",
	"Safari",
	"Midnight blues",
	"Laser Disco",
	"Tetris blocks",
	"Balloons that look like...",
	"Map of Norway",
	"Strange Objects",
	"Menneskets Kropp",
	"Walking my Dog"
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
