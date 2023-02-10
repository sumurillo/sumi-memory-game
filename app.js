/*----- app's state (variables) -----*/
const message = document.getElementById('message');
const startBtn = document.getElementById('button1');
const resetBtn = document.getElementById('button2');
const cards = document.querySelectorAll('.container');

let firstPicked= null;//first card picked
let secondPicked = null;//second card picked
let counter = 0;//counter for 'click' max per choice
let matchCount = 0;//counter for 'clicks' 
let timeLeft = 30; //countdown seconds
let countdownTimer = null;

//color choices that need to match
let randomColors= ['lightseagreen', 'lightseagreen', 'plum', 'plum', 'lightgreen', 'lightgreen', 'lightblue',
'lightblue', 'lightcoral', 'lightcoral', 'mediumpurple', 'mediumpurple'];


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

/*----- cached element references -----*/

startBtn.addEventListener('click', countdown); //button to start countdown 
resetBtn.addEventListener('click', refresh);

/*----- functions -----*/

//function for matches and declaring win/lose
function toFindMatches(firstCard, secondCard) {
		if (firstCard.style.backgroundColor === secondCard.style.backgroundColor) {
			firstCard.onclick=null;
			secondCard.onclick=null;
			matchCount++
			if (matchCount === 6) {
				clearInterval(countdownTimer);
				message.innerHTML = "You win!";
			}
			console.log('match');
		} else {
			setTimeout(() => {firstCard.style.backgroundColor = 'black';
			secondCard.style.backgroundColor = 'black'}, 1000);
			console.log('not match');
		}
}


//cards changing color on click while iterating through the array	
//click count function
card1.onclick = function(evt) {
	evt.target.style.backgroundColor = randomColors[0];
	console.log(firstPicked, secondPicked, evt.target);
	console.log(counter);
	if (counter === 0) {
		firstPicked = evt.target;
		console.log('first card')
		counter++
		console.log(counter);
	} else {
		secondPicked = evt.target;
		console.log('second card')
		counter = 0;
		toFindMatches(firstPicked, secondPicked);
	}
}
card2.onclick = function(evt) {
	card2.style.backgroundColor = randomColors[1];
	console.log(firstPicked, secondPicked, evt.target);
	if (counter === 0) {
		firstPicked = evt.target;
		console.log('first card')
		counter++
		console.log(counter);
	} else {
		secondPicked = evt.target;
		console.log('second card')
		counter = 0;
		toFindMatches(firstPicked, secondPicked);
	}
}
card3.onclick = function(evt) {
	card3.style.backgroundColor = randomColors[2];
	console.log(firstPicked, secondPicked, evt.target);
	if (counter === 0) {
		firstPicked = evt.target;
		console.log('first card')
		counter++
		console.log(counter);
	} else {
		secondPicked = evt.target;
		console.log('second card')
		counter = 0;
		toFindMatches(firstPicked, secondPicked);
	}
}
card4.onclick = function(evt) {
	card4.style.backgroundColor = randomColors[3];
	console.log(firstPicked, secondPicked, evt.target);
	if (counter === 0) {
		firstPicked = evt.target;
		console.log('first card')
		counter++
		console.log(counter);
	} else {
		secondPicked = evt.target;
		console.log('second card')
		counter = 0;
		toFindMatches(firstPicked, secondPicked);
	}
}
card5.onclick = function(evt) {
card5.style.backgroundColor = randomColors[4];
console.log(firstPicked, secondPicked, evt.target);
if (counter === 0) {
	firstPicked = evt.target;
	console.log('first card')
	counter++
	console.log(counter);
} else {
	secondPicked = evt.target;
	console.log('second card')
	counter = 0;
	toFindMatches(firstPicked, secondPicked);
	}
}
card6.onclick = function(evt) {
	card6.style.backgroundColor = randomColors[5];
	console.log(firstPicked, secondPicked, evt.target);
	if (counter === 0) {
		firstPicked = evt.target;
		console.log('first card')
		counter++
		console.log(counter);
	} else {
		secondPicked = evt.target;
		console.log('second card')
		counter = 0;
		toFindMatches(firstPicked, secondPicked);
	}
}
card7.onclick = function(evt) {
	card7.style.backgroundColor = randomColors[6];
	console.log(firstPicked, secondPicked, evt.target);
	if (counter === 0) {
		firstPicked = evt.target;
		console.log('first card')
		counter++
		console.log(counter);
	} else {
		secondPicked = evt.target;
		console.log('second card')
		counter = 0;
		toFindMatches(firstPicked, secondPicked);
	}
}
card8.onclick = function(evt) {
	card8.style.backgroundColor = randomColors[7];
	console.log(firstPicked, secondPicked, evt.target);
	if (counter === 0) {
		firstPicked = evt.target;
		console.log('first card')
		counter++
		console.log(counter);
	} else {
		secondPicked = evt.target;
		console.log('second card')
		counter = 0;
		toFindMatches(firstPicked, secondPicked);
	}
}
card9.onclick = function(evt) {
	card9.style.backgroundColor = randomColors[8];
	console.log(firstPicked, secondPicked, evt.target);
	if (counter === 0) {
		firstPicked = evt.target;
		console.log('first card')
		counter++
		console.log(counter);
	} else {
		secondPicked = evt.target;
		console.log('second card')
		counter = 0;
		toFindMatches(firstPicked, secondPicked);
	}
}
card10.onclick = function(evt) {
	card10.style.backgroundColor = randomColors[9];
	console.log(firstPicked, secondPicked, evt.target);
	if (counter === 0) {
		firstPicked = evt.target;
		console.log('first card')
		counter++
		console.log(counter);
	} else {
		secondPicked = evt.target;
		console.log('second card')
		counter = 0;
		toFindMatches(firstPicked, secondPicked);
	}
}
card11.onclick = function(evt) {
	card11.style.backgroundColor = randomColors[10];
	console.log(firstPicked, secondPicked, evt.target);
	if (counter === 0) {
		firstPicked = evt.target;
		console.log('first card')
		counter++
		console.log(counter);
	} else {
		secondPicked = evt.target;
		console.log('second card')
		counter = 0;
		toFindMatches(firstPicked, secondPicked);
	}
}
card12.onclick = function(evt) {
	card12.style.backgroundColor = randomColors[11];
	console.log(firstPicked, secondPicked, evt.target);
	if (counter === 0) {
		firstPicked = evt.target;
		console.log('first card')
		counter++
		console.log(counter);
	} else {
		secondPicked = evt.target;
		console.log('second card')
		counter = 0;
		toFindMatches(firstPicked, secondPicked);
	}
}

//shuffle function to shuffle colors in array
//math.floor and math.random from w3
function shuffle(randomColors) {
	let currentIndex = randomColors.length,  randomIndex;
	
	while (currentIndex != 0) {
		randomIndex = Math.floor(Math.random() * currentIndex); 
		currentIndex--;
		
		//swap it with the current element.
		[randomColors[currentIndex], randomColors[randomIndex]] = 
		[randomColors[randomIndex], randomColors[currentIndex]];
	}
	return randomColors;
}

shuffle(randomColors);

//timer cited from stack overflow by James McDowell

function countdown() {
	timeLeft--;
	document.getElementById("timer").innerHTML = String( timeLeft );
	if (timeLeft > 0) {
		countdownTimer = setTimeout(countdown, 1000);
	} else {
		message.innerHTML = "You lose!"
	}
};

function refresh () {
	document.location.reload();
}