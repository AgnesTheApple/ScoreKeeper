var bt1 = document.querySelector("#bt1");
var bt2 = document.querySelector("#bt2");
var score1 = document.querySelector("#score1");
var score2 = document.querySelector("#score2");
var reset = document.querySelector("#reset");
var playingTo = document.querySelector("p span");
var input = document.querySelector("input");
var gameOver = false;
var winScore;



input.addEventListener("change", function() {
	playingTo.textContent = input.value;
	winScore = Number(input.value);
	resetG();
});

var p1Score = 0;
var p2Score = 0;

bt1.addEventListener("click", function() {
	if (!gameOver) {
	p1Score ++;
		if(p1Score === winScore){
			score1.classList.add("green");
			gameOver = true;
		}
	score1.textContent = p1Score;
	}
});
	
	
bt2.addEventListener("click", function() {
	if(!gameOver){
		p2Score ++;
			if(p2Score === winScore){
				score2.classList.add("green");
				gameOver = true;
			}
	}
	score2.textContent = p2Score;
});

reset.addEventListener("click", function() {
	resetG();
});

function resetG() {
	p1Score = 0;
	p2Score = 0;
	score1.textContent = 0;
	score2.textContent = 0;
	score1.classList.remove("green");
	score2.classList.remove("green");
	gameOver = false;
	}