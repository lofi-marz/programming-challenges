console.log(firstNHappyNumbers(10));

function firstNHappyNumbers(n) {
	happyNumbers = [];
	let i = 1;
	while (happyNumbers.length < n) {
		if (isHappy(i)) {
			happyNumbers.push(i);
		}
		i++;
	}
	return happyNumbers;
}

function isHappy(number) {
	const UNHAPPY_CYCLE = [4,20,42,145,89,58,37,16];
	let happyValue = number;
	while (!(happyValue == 1) && !UNHAPPY_CYCLE.includes(happyValue)) {
		happyValue = nextHappyStep(happyValue);
	}	
	return (happyValue == 1) 
}

function nextHappyStep(number) {
	let happyNum = 0;
	let numberString = number.toString();
	for (let i = 0; i < numberString.length; i++) {
		happyNum += numberString[i] ** 2;
	}	
	return happyNum;
}

