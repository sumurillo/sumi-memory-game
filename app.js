/*----- app's state (variables) -----*/
const boardEl = document.getElementById('board');
const startBtn = document.getElementById('button1');
const resetBtn = document.getElementById('button2');

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
let card12 = document.getElementById('r3c4')

let choices = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6]; //choices to match


/*----- variables-----*/

let gameArr = [];


/*----- cached element references -----*/




startBtn.addEventListener('click', countdown);
// resetBtn.addEventListener('click', resetTimer);

/*----- functions -----*/

//shuffle array function
function shuffle(choices) {
	let currentIndex = choices.length,  randomIndex;
  
	while (currentIndex != 0) {
	  randomIndex = Math.floor(Math.random() * currentIndex); //math.floor and math.random from w3
	  currentIndex--;
  
	  // And swap it with the current element.
	  [choices[currentIndex], choices[randomIndex]] = 
	  [	choices[randomIndex], choices[currentIndex]];
	}
	return choices;
  }

	shuffle(choices);
	gameArr.push(choices);
	console.log(gameArr);

//timer cited from stack overflow by James McDowell
timeLeft = 30;

function countdown() {
	timeLeft--;
	document.getElementById("seconds").innerHTML = String( timeLeft );
	if (timeLeft > 0) {
		setTimeout(countdown, 1000);
	}
};

