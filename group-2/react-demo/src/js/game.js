export function Game() {
	var target = document.querySelector(".target");
	var container = document.querySelector("#game-area");
	var targetSpeed = 1000;
	start(target, container, targetSpeed);
}

function startGameTimer(timeDisplay) {
	var setTimer = setGameTime(timeDisplay);
	var count = 10;
	var timer = setInterval(function() {
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
	let getTimerCount = getGameTime(timeDisplay);
	let randomXYGenerator = getRandomXYWithinContainer(container, target);
	startGameTimer(timeDisplay);
	let timer = setInterval(function() {
		let random = randomXYGenerator();
		if(getTimerCount() === 0) {
			clearInterval(timer);
			alert("Game over!");
		}
		else {
			hideTarget(target);
			positionTarget(target, random.x, random.y);
			showTarget(target);
		}
	}, targetSpeed);
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