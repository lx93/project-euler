function findFactors(num)
{
	amount = 0;
	i = 1;
	while (i<= num)
	{
		if(num%i==0) 
		{
			//console.log("found a factor! "+i)
			amount++
		}
		i++ 
	}
	if (amount > 300) console.log("the triangle number is: "+num+ "and it has: "+ amount+" factors.")
	return amount
}


function findTriangle(num)
{
	sum = 0
	for (var i=1;i<=num;i++)
	{
		sum+=i		
	}
//	console.log(sum)
	return sum	
}


triangleIndex = 1;

while (findFactors(findTriangle(triangleIndex))<500)
{
	triangleIndex ++	
}

return findTriangle(triangleIndex)

