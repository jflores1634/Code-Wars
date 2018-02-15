function insertDash(num) {
   let splitNum = num.toString().split("");
	let results = splitNum[0];
   for (var i=1; i < splitNum.length; i++) {
     if(splitNum[i-1]%2 == 1 && splitNum[i]%2 == 1) {
     results += "-";
     }
     results += splitNum[i];
   }
   return results;
}    
