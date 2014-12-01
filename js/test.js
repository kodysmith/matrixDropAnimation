// example code
var playState=1;
 document.onreadystatechange = function () { 
 	if (document.readyState == "complete") { //document is ready. Do your stuff here } }
 		document.getElementsByTagName('body')[0].addEventListener('click',function(){
		 	if(playState==1){
		 		playState=0;
		 	}else{
		 		playState=1;
		 	}
		 });
 		matrix();
	}
}
function play(){
	setTimeout(function(){
		matrix();
	},1000);
}
		function matrix(){
			setTimeout(function(){
				
				if(playState==1){
					var line = new verticalLine();
					line.display();
			 		matrix();
			 	}else{
			 		play();
			 	}
				
			},Math.floor(Math.random()*100));
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