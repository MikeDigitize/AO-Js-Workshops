export function Game() {
	let target = document.querySelector(".target");
	let container = document.querySelector("#game-area");
	let targetSpeed = 2000;
	start(target, container, targetSpeed);
}

function onTargetClick(score, container) {
	let getScore = getGameScore(score);
	let setScore = setGameScore(score);
	return function(evt) {
		repositionTarget(this, container);
		let points = getClickScore(evt);
		let currentScore = getScore();
		setScore(currentScore, points);
	}
}

function setGameScore(score) {
	return function(prev, points) {
		score.innerText = prev + points;
	}
}

function getGameScore(score) {
	return function() {
		return Number(score.innerText);
	}
}

function startGameTimer(timeDisplay) {
	let setTimer = setGameTime(timeDisplay);
	let count = 10;
	let timer = setInterval(function() {
		if(count === 0) {
			clearInterval(timer);
			setTimer(count);
		}
		else {
			count--;
			setTimer(count);
		}
	}, 1000);
}

function getGameTime(timer) {
	return function() {
		return Number(timer.innerText);
	}
}

function setGameTime(timer) {
	return function(text) {
		timer.innerText = text;
	}
}

function getRandomXYWithinContainer(container, target) {
	let width = container.offsetWidth;
	let height = container.offsetHeight;
	return function() {		
		let x = getRandomNumber(0, width - target.offsetWidth / 2);
		let y = getRandomNumber(0, height - target.offsetHeight / 2);
		return { x, y };
	}	
}

function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function start(target, container, targetSpeed) {
	let timeDisplay = document.querySelector("#timer");
	let score = document.querySelector("#score");
	let getTimerCount = getGameTime(timeDisplay);
	let handler = onTargetClick(score, timeDisplay, container);
	target.addEventListener("click", handler, false);
	startGameTimer(timeDisplay);
	let timer = setInterval(function() {
		if(getTimerCount() === 0) {
			clearInterval(timer);
			target.removeEventListener("click", handler, false);
			alert(`Game over! You scored ${getGameScore(score)()} points!`);
		}
		else {
			repositionTarget(target, container);
		}
	}, targetSpeed);
}

function repositionTarget(target, container) {
	let randomXYGenerator = getRandomXYWithinContainer(container, target);
	let random = randomXYGenerator();
	hideTarget(target);
	positionTarget(target, random.x, random.y);
	showTarget(target);
}

function hideTarget(target) {
	target.style.display = "none";
}

function showTarget(target) {
	target.style.display = "block";
}

function positionTarget(target, left, top) {
	target.style.top = `${top}px`;
	target.style.left = `${left}px`;
}


function getClickScore(evt) {
	let target = evt.target;
	return target.classList.contains("bullseye") ? 3 : target.classList.contains("inner") ? 2 : 1;
}