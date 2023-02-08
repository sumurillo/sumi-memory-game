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

const cardsMatch = [
	{card1: choices[0]}, 
	{card2: choices[1]},
	{card3: choices[2]},
	{card4: choices[3]},
	{card5: choices[4]},
	{card6: choices[5]},
	{card7: choices[6]},
	{card8: choices[7]},
	{card9: choices[8]},
	{card10: choices[9]},
	{card11: choices[10]},
	{card12: choices[11]},
]


/*----- variables-----*/

let gameArr = [];

/*----- cached element references -----*/

startBtn.addEventListener('click', countdown);


/*----- functions -----*/

	
card1.onclick = function() {
	card1.style.backgroundColor = "red";
}
card2.onclick = function() {
	card2.style.backgroundColor = "red";
}
card3.onclick = function() {
	card3.style.backgroundColor = "purple";
}
card4.onclick = function() {
	card4.style.backgroundColor = "purple";
}
card5.onclick = function() {
	card5.style.backgroundColor = "blue";
}
card6.onclick = function() {
	card6.style.backgroundColor = "blue";
}
card7.onclick = function() {
	card7.style.backgroundColor = "green";
}
card8.onclick = function() {
	card8.style.backgroundColor = "green";
}
card9.onclick = function() {
	card9.style.backgroundColor = "orange";
}
card10.onclick = function() {
	card10.style.backgroundColor = "orange";
}
card11.onclick = function() {
	card11.style.backgroundColor = "aqua";
}
card12.onclick = function() {
	card12.style.backgroundColor = "aqua";
}


//shuffle array function
function shuffle(cards) {
	let currentIndex = cards.length,  randomIndex;
  
	while (currentIndex != 0) {
	  randomIndex = Math.floor(Math.random() * currentIndex); //math.floor and math.random from w3
	  currentIndex--;
  
	  // And swap it with the current element.
	  [cards[currentIndex], cards[randomIndex]] = 
	  [	cards[randomIndex], cards[currentIndex]];
	}
	return cards;
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

//reset timer
// button2.onClick(
//     clearTimeout(timeLeft);
//     timeLeft = setTimeout(countdown(){}, 1000);
// );

