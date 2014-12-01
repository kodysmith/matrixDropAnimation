// example code
 document.onreadystatechange = function () { 
 	if (document.readyState == "complete") { //document is ready. Do your stuff here } }
		var linesArray = [];
		for (var i = 0; i < 20; i++) {
			var linesArray[i] = new verticalLine();
			setTimeout(function(){
				linesArray[i].display();
			},Math.random()*2000);
		}
	}
}


/*function matrix(lines){

	var linesArray = Array();
	setTimeout(function(){
		linesArray[i] = new verticalLine();
		var randomPosition = Math.floor(Math.random() * 1000);
		var randomSpeed = Math.floor(Math.random() * 1000);
		var randomSize = Math.floor(Math.random());
		linesArray[i].display(randomPosition,randomSize,randomSpeed);
	},Math.floor(Math.random() * 1000));
		
		for(i=0; i<lines; i++){
			linesArray[i] = new verticalLine();
			var randomPosition = Math.floor(Math.random() * 1000);
			var randomSpeed = Math.floor(Math.random() * 1000);
			var randomSize = Math.floor(Math.random());
			linesArray[i].display(randomPosition,randomSize,randomSpeed);

		}
		
	}
*/