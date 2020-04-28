
const readline = require('readline-sync');

let iterationCount = readline.questionInt("How many iterations?");
let dp = readline.questionInt("How many dp?");
let pi = calculatePi(iterationCount);
let error = (pi-Math.PI)/Math.PI;

console.log(pi);
console.log((error*100).toFixed(2)+'%');

function roundValue(value, decimalPlaces) {
	return value.toFixed(decimalPlaces);
}

function calculatePi(iterations = 100000) {
	let point = {
		x:0,
		y:0
	};
	let totalPoints = 0;
	
	let pointsInCircle = 0;
	let ratio = 0;
	for (let i = 0; i < iterations; i++) {
		point = getRandomPoint();
		if (point.x ** 2 + point.y ** 2 <= 1) {
			pointsInCircle++;
		}
		totalPoints++;
		ratio = pointsInCircle/totalPoints;

	}
	return 4 * ratio;
	
}

function getRandomPoint() {
	return {
		x:Math.random(), 
		y:Math.random()
	}
}


