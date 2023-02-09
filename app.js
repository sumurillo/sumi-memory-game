/*----- app's state (variables) -----*/
const startBtn = document.getElementById('button1');
const resetBtn = document.getElementById('button2');

const cards = document.querySelectorAll('.container');

//matching colors
let randomColors= ['red', 'red', 'purple', 'purple', 'green', 'green', 'blue', 'blue', 'orange', 'orange', 'aqua', 'aqua'];


//mapping individual cards to the array 
//r: row; c: card
let card1 = document.getElementById('r1c1')
let card2 = document.getElementById('r1c2')
let card3 = document.getElementById('r1c3')
let card4 = document.getElementById('r1c4')
let card5 = document.getElementById('r2c1')
let card6 = document.getElementById('r2c2')
let card7 = document.getElementById('r2c3')
let card8 = document.getElementById('r2c4')
let card9 = document.getElementById('r3c1')
let card10 = document.getElementById('r3c2')
let card11 = document.getElementById('r3c3')
let card12 = document.getElementById('r3c4')


function init () {

};

let firstCard = null;
let secondCard = null;


/*----- cached element references -----*/

startBtn.addEventListener('click', countdown);


//cards changing color on click while iterating through the array	
card1.onclick = function() {
	card1.style.backgroundColor = randomColors[0];
}
card2.onclick = function() {
	card2.style.backgroundColor = randomColors[1];
}
card3.onclick = function() {
	card3.style.backgroundColor = randomColors[2];
}
card4.onclick = function() {
	card4.style.backgroundColor = randomColors[3];
}
card5.onclick = function() {
	card5.style.backgroundColor = randomColors[4];
}
card6.onclick = function() {
	card6.style.backgroundColor = randomColors[5];
}
card7.onclick = function() {
	card7.style.backgroundColor = randomColors[6];
}
card8.onclick = function() {
	card8.style.backgroundColor = randomColors[7];
}
card9.onclick = function() {
	card9.style.backgroundColor = randomColors[8];
}
card10.onclick = function() {
	card10.style.backgroundColor = randomColors[9];
}
card11.onclick = function() {
	card11.style.backgroundColor = randomColors[10];
}
card12.onclick = function() {
	card12.style.backgroundColor = randomColors[11];
}


/*----- functions -----*/

//shuffle function to shuffle colors in array
function shuffle(randomColors) {
	let currentIndex = randomColors.length,  randomIndex;
	
	while (currentIndex != 0) {
	  randomIndex = Math.floor(Math.random() * currentIndex); //math.floor and math.random from w3
	  currentIndex--;
  
	  //swap it with the current element.
	  [randomColors[currentIndex], randomColors[randomIndex]] = 
	  [randomColors[randomIndex], randomColors[currentIndex]];
	}
	return randomColors;
  }

	shuffle(randomColors);


//timer cited from stack overflow by James McDowell
let timeLeft = 30;

function countdown() {
	timeLeft--;
	document.getElementById("timer").innerHTML = String( timeLeft );
	if (timeLeft > 0) {
		setTimeout(countdown, 1000);
	}
};



function matchCard () {
	if (firstCard.cards.childElement === secondCard.cards.childElement) {
		console.log("match");
	}
}