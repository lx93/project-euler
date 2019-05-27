var largest = 1;
var factors = [];
var target = 600851475143
for (var i=2;i<target; i++){
	if (600851475143%i==0){
	factors.push(i)
	target = 600851475143/i
	factors.push(target)
	};
}
console.log(factors)



function isPrime(n){
	for (var i =2;i<n;i++)
	{
		if (n%i==0) return false;
	}
	return true;
}

var primeFactors = []

for (var i=0;i<factors.length;i++){
	if (isPrime(factors[i])) primeFactors.push(factors[i])
}

console.log(primeFactors)
