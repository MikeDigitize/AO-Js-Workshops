export function Game() {
	var target = document.querySelector(".target");
	var container = document.querySelector("#game-area");
	start(target, container);
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

function start(target, container) {
	let count = 0;
	let randomXYGenerator = getRandomXYWithinContainer(container, target);
	let timer = setInterval(function() {
		let random = randomXYGenerator();
		if(count === 10) {
			clearInterval(timer);
		}
		else {
			count++;
			hideTarget(target);
			positionTarget(target, random.x, random.y);
			showTarget(target);
		}
	}, 1000);
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