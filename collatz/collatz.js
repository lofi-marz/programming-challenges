const readline = require('readline-sync');
let num = process.argv[2];
console.log(collatz(num));
collatzConjecture(num);
function collatz(n) {
	let count = 0;
	while (n != 1) {
		//console.log(n);
		if (n%2 == 0) {
			n = n/2;
		} else {
			n = 3*n + 1;
		}
		count++;
	}
	console.log("Done!");
	return count;
}


