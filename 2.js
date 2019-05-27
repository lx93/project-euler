var first = 1;
var second = 2;
var arr = [1,2];
var third = 0;
while (third<=4000000)
{
	third=first+second;
	first=second;
	second=third;
	arr.push(third);
}

var sum = 0;

for (var i=0;i<arr.length;i++)
{
	if (arr[i]%2==0)
	{
		sum += arr[i];
	}
}

console.log(sum);
