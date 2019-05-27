function isPrime(num){
	for (var i=2;i*i<sum;i++){
		if (num%i==0) return false;
	}
	return true;
}

function findNextPrime(num){
	num = num + 1;
	while (!isPrime(num)) num++;
	return num;
}

var sum = 0;
var currentPrime = 2;
while (currentPrime<2000000){
	//console.log(currentPrime)
	sum+=currentPrime;

	currentPrime = findNextPrime(currentPrime)
}

console.log(sum)
