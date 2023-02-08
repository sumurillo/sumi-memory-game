/*----- app's state (variables) -----*/
const boardEl = document.getElementById('board');
const startBtn = document.getElementById('button1');
const resetBtn = document.getElementById('button2');

//mapping individual cards to the array
let .card1= choices[0];
let .card2 = choices[1];
let .card3 = choices[2];
let .card4 = choices[3];
let .card5 = choices[4];
let .card6 = choices[5];
let .card7 = choices[6];
let .card8 = choices[7];
let .card9 = choices[8];
let .card10 = choices[9];
let .card11 = choices[10];
let .card12 = choices[11];

//matching colors
let choices = ['red', 'red', 'purple', 'purple', 'green', 'green', 'blue', 'blue', 'orange', 'orange', 'aqua', 'aqua'];
// let gameArr = [];

/*----- cached element references -----*/

startBtn.addEventListener('click', countdown);


/*----- functions -----*/

Init ();
	
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
	let currentIndex = choices.length,  randomIndex;
  
	while (currentIndex != 0) {
	  randomIndex = Math.floor(Math.random() * currentIndex); //math.floor and math.random from w3
	  currentIndex--;
  
	  //swap it with the current element.
	  [cards[currentIndex], cards[randomIndex]] = 
	  [	cards[randomIndex], cards[currentIndex]];
	}
	return cards;
  }

	shuffle(choices);
	gameArr.push(choices);
	console.log(gameArr);

//timer cited from stack overflow by James McDowell
let timeLeft = 30;

function countdown() {
	timeLeft--;
	document.getElementById("seconds").innerHTML = String( timeLeft );
	if (timeLeft > 0) {
		setTimeout(countdown, 1000);
	}
};


