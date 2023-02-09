/*----- app's state (variables) -----*/
const startBtn = document.getElementById('button1');
const resetBtn = document.getElementById('button2');

const cards = document.querySelectorAll('.container');

let firstPicked= null;//first card picked
let secondPicked = null;//second card picked

let counter = 0;//counter for 'click' max per choice

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

let cardsArr = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12];

function toFindMatches(firstCard, secondCard) {
// 	const filteredElements = randomColors.filter(item => {
// 		if (filteredElements.has(item)) {
// 			return
// 		}
// 	})
	if (firstCard === secondCard) {
		console.log('found a match');
	} else {
		console.log('not match')
	}
}


/*----- cached element references -----*/

startBtn.addEventListener('click', countdown);


//cards changing color on click while iterating through the array	
card1.onclick = function(evt) {
	evt.target.style.backgroundColor = randomColors[0];
	console.log(firstPicked, secondPicked, evt.target);
	toFindMatches(firstPicked, secondPicked);
	console.log(counter);
	if (counter === 0) {
		firstPicked = evt.target.style.backgroundColor;
		console.log('first card')
		counter++
		console.log(counter);
	} else {
		secondPicked = evt.target.style.backgroundColor;
		console.log('second card')
		counter = 0;
	}
}
card2.onclick = function(evt) {
	card2.style.backgroundColor = randomColors[1];
	console.log(firstPicked, secondPicked, evt.target);
	toFindMatches(firstPicked, secondPicked);
	if (counter === 0) {
		firstPicked = evt.target.style.backgroundColor;
		console.log('first card')
		counter++
		console.log(counter);
	} else {
		secondPicked = evt.target.style.backgroundColor;
		console.log('second card')
		counter = 0;
	}
}
card3.onclick = function(evt) {
	card3.style.backgroundColor = randomColors[2];
	console.log(firstPicked, secondPicked, evt.target);
	toFindMatches(firstPicked, secondPicked);
	if (counter === 0) {
		firstPicked = evt.target.style.backgroundColor;
		console.log('first card')
		counter++
		console.log(counter);
	} else {
		secondPicked = evt.target.style.backgroundColor;
		console.log('second card')
		counter = 0;
	}
}
card4.onclick = function(evt) {
	card4.style.backgroundColor = randomColors[3];
	console.log(firstPicked, secondPicked, evt.target);
	toFindMatches(firstPicked, secondPicked);
	if (counter === 0) {
		firstPicked = evt.target.style.backgroundColor;
		console.log('first card')
		counter++
		console.log(counter);
	} else {
		secondPicked = evt.target.style.backgroundColor;
		console.log('second card')
		counter = 0;
	}
}
card5.onclick = function(evt) {
card5.style.backgroundColor = randomColors[4];
console.log(firstPicked, secondPicked, evt.target);
toFindMatches(firstPicked, secondPicked);
if (counter === 0) {
		firstPicked = evt.target.style.backgroundColor;
		console.log('first card')
		counter++
		console.log(counter);
	} else {
		secondPicked = evt.target.style.backgroundColor;
		console.log('second card')
		counter = 0;
	}
}
card6.onclick = function(evt) {
	card6.style.backgroundColor = randomColors[5];
	console.log(firstPicked, secondPicked, evt.target);
	toFindMatches(firstPicked, secondPicked);
	if (counter === 0) {
		firstPicked = evt.target.style.backgroundColor;
		console.log('first card')
		counter++
		console.log(counter);
	} else {
		secondPicked = evt.target.style.backgroundColor;
		console.log('second card')
		counter = 0;
	}
}
card7.onclick = function(evt) {
	card7.style.backgroundColor = randomColors[6];
	console.log(firstPicked, secondPicked, evt.target);
	toFindMatches(firstPicked, secondPicked);
	if (counter === 0) {
		firstPicked = evt.target.style.backgroundColor;
		console.log('first card')
		counter++
		console.log(counter);
	} else {
		secondPicked = evt.target.style.backgroundColor;
		console.log('second card')
		counter = 0;
	}
}
card8.onclick = function(evt) {
	card8.style.backgroundColor = randomColors[7];
	console.log(firstPicked, secondPicked, evt.target);
	toFindMatches(firstPicked, secondPicked);
	if (counter === 0) {
		firstPicked = evt.target.style.backgroundColor;
		console.log('first card')
		counter++
		console.log(counter);
	} else {
		secondPicked = evt.target.style.backgroundColor;
		console.log('second card')
		counter = 0;
	}
}
card9.onclick = function(evt) {
	card9.style.backgroundColor = randomColors[8];
	console.log(firstPicked, secondPicked, evt.target);
	toFindMatches(firstPicked, secondPicked);
	if (counter === 0) {
		firstPicked = evt.target.style.backgroundColor;
		console.log('first card')
		counter++
		console.log(counter);
	} else {
		secondPicked = evt.target.style.backgroundColor;
		console.log('second card')
		counter = 0;
	}
}
card10.onclick = function(evt) {
	card10.style.backgroundColor = randomColors[9];
	console.log(firstPicked, secondPicked, evt.target);
	toFindMatches(firstPicked, secondPicked);
	if (counter === 0) {
		firstPicked = evt.target.style.backgroundColor;
		console.log('first card')
		counter++
		console.log(counter);
	} else {
		secondPicked = evt.target.style.backgroundColor;
		console.log('second card')
		counter = 0;
	}
}
card11.onclick = function(evt) {
	card11.style.backgroundColor = randomColors[10];
	console.log(firstPicked, secondPicked, evt.target);
	toFindMatches(firstPicked, secondPicked);
	if (counter === 0) {
		firstPicked = evt.target.style.backgroundColor;
		console.log('first card')
		counter++
		console.log(counter);
	} else {
		secondPicked = evt.target.style.backgroundColor;
		console.log('second card')
		counter = 0;
	}
}
card12.onclick = function(evt) {
	card12.style.backgroundColor = randomColors[11];
	console.log(firstPicked, secondPicked, evt.target);
	toFindMatches(firstPicked, secondPicked);
	if (counter === 0) {
		firstPicked = evt.target.style.backgroundColor;
		console.log('first card')
		counter++
		console.log(counter);
	} else {
		secondPicked = evt.target.style.backgroundColor;
		console.log('second card')
		counter = 0;
	}
}


/*----- functions -----*/

function init () {

};


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