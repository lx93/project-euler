var x = 2521;
var found = false;
function _findX(){
	for (var i=11;i<=20;i++){
		var factorial = x%i
		while(factorial!=0){
			x++;
			i=10;
			break;
		}
		
	}
	found = true;
	return x
}


while(!found){console.log(_findX());}
