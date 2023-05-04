var ball = document.getElementById("ball");
var score = document.getElementById("score");
var points = 0;

ball.onclick = function() {
	ball.style.top = Math.random() * 80 + "%";
	ball.style.left = Math.random() * 80 + "%";
	points++;
	score.innerHTML = "Points: " + points;
}
