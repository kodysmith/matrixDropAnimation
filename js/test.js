// example code
 document.onreadystatechange = function () { 
 	if (document.readyState == "complete") { //document is ready. Do your stuff here } }
		var linesArray = [];
		for (var i = 0; i < 20; i++) {
			var position = Math.floor(Math.random()*1000);
			var size = Math.floor(Math.random()*1000);
			var speed = Math.floor(Math.random()*1000);
			linesArray[i] = new verticalLine();
			setTimeout(function(){
				linesArray[i].display(position, size, speed);
			},Math.random()*2000);
		}
	}
}
