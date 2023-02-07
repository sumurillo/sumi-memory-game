/*----- app's state (variables) -----*/
let game;

let card1 = document.getElementById('r1c1');
let card2 = document.getElementById('r1c2');
let card3 = document.getElementById('r1c3');
let card4 = document.getElementById('r1c4');
let card5 = document.getElementById('r2c1');
let card6 = document.getElementById('r2c2');
let card7 = document.getElementById('r2c3');
let card8 = document.getElementById('r2c4');
let card9 = document.getElementById('r3c1');
let card10 = document.getElementById('r3c2');
let card11 = document.getElementById('r3c3');
let card12 = document.getElementById('r3c4');

const gameArr = [
	[card1, card2, card3, card4],
	[card5, card6, card7, card8],
    [card9, card10, card11, card12]
];

/*----- cached element references -----*/

const boardEl = document.getElementById('board');
const startButton = document.getElementById('button1');

startButton.addEventListener('click', countdown);

let choices = [1, 2, 3, 4, 5, 6];

/*----- functions -----*/

// for (let i = 0; i < Math.floor(Math.random() * 2); i++) {
//     choices++;
// }

// console.log(choices)


//timer cited from stack overflow by James McDowell
timeLeft = 30;

function countdown() {
	timeLeft--;
	document.getElementById("seconds").innerHTML = String( timeLeft );
	if (timeLeft > 0) {
		setTimeout(countdown, 1000);
	}
};