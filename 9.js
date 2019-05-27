for (var a=1;a<=332;a++){
	for (var b=a+1;b<=498;b++){
		if ((a*a)+(b*b)==(1000-a-b)*(1000-a-b)){
 			console.log(a+'   '+b+'   '+(1000-a-b));
			console.log("a*b*c="+a*b*(1000-a-b))
			break;	
		}
	}
}
