/*----- app's state (variables) -----*/
let game;

const gameArray = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
];

/*----- cached element references -----*/

const boardEl = document.getElementById('board');
const startButton = document.getElementById('button1');

startButton.addEventListener('click', countdown);

let choices = [1, 2, 3, 4, 5, 6];


/*----- functions -----*/

for (let i = 0; i < Math.floor(Math.random() * 2); i++) {
    choices++;
}
console.log(choices)


//timer cited from stack overflow by James McDowell
timeLeft = 30;

function countdown() {
	timeLeft--;
	document.getElementById("seconds").innerHTML = String( timeLeft );
	if (timeLeft > 0) {
		setTimeout(countdown, 1000);
	}
};