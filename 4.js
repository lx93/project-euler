function isPalin(n){
	n = n.toString().split('')
	var leftIndex = 0;
	var rightIndex = n.length -1;
	while (rightIndex>=leftIndex){
	
		if (n[leftIndex]!=n[rightIndex]) return false;
		leftIndex++
		rightIndex--
	}
	return true;
}

function findPalin(n)
{
	while (!isPalin(n)) n--;
	var result = checkFactors(n)
	console.log('found palin:'+n+ ', and checkFactors() returns: '+ result)
}

function checkFactors(m)
{
	for (var i=999;i>99&&m/i<1000;i--)
	{	
		if (m%i==0) {
			return i;
		}
		
	}
	findPalin(m-1)
	return false;
}

findPalin(998001)


