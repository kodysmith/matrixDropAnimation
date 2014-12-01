// example code
 document.onreadystatechange = function () { 
 	if (document.readyState == "complete") { //document is ready. Do your stuff here } }
		function matrix(){
			setTimeout(function(){
				var line = new verticalLine();
				line.display();
				matrix();
			},Math.floor(Math.random()*2000));
			

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