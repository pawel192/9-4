function drawTree(num){
	for(i=num; i>0; i-=2){
		var star = "";
		for(k=i; k>0; k-=2){
			star +=" "
		}
		for(j=i; j<=num; j++){
			star +="*";
		}	
		console.log(star);	
	}
}
drawTree(40);