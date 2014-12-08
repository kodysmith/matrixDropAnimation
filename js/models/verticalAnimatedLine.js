// this file should contain the model code for vertical animated lines
function randomRange(min, max) {
	return Math.random()*(max-min) + min;
}
var verticalLine = function(position,size,speed){
	var options = {
					'animationElement':'divMatrix',
					'depthSizeRange':Array(2,2),
					'maxVerticalLines': 40,
	 				'positionX' : randomRange(window.innerWidth, -10),
		 			'positionY' : randomRange(window.innerHeight/2, -10),
	 				'size' : randomRange(options.depthSizeRange[0],options.depthSizeRange[1]),
	 				'speed' : randomRange(100, 650)
					}
	var stockCharacterArray = "0123456789!@#$%^&*(_+-=~`0123456789!@#$%^&*(_+-=~`0123456789!@#$%^&*(_+-=~`0123456789!@#$%^&*(_+-=~`0123456789!@#$%^&*(_+-=~`";
	var randomCharacterArray = Array ();
	var element = document.createElement('div');
	var newLetterElement = document.createElement('span');
	    newLetterElement.className = " newLetter";
	var oldLettersElement = document.createElement('span');
	function _display(){
		element.style.fontSize = size + "em";
		element.style.width = size*10 + "px"
		element.style.position = "absolute";
		element.style.top = options.positionY + "px"; 
		element.style.left = options.positionX + "px";
		element.style.opacity = 1;
		element.className += " verticalColumn";
		element.className += " matrixFont";
		element.appendChild(oldLettersElement);
		element.appendChild(newLetterElement);
		document.getElementsByClassName(options.animationElement)[0].appendChild(element);
	}
	function _addCharacter(character){
		oldLettersElement.innerHTML+=newLetterElement.innerHTML;
		newLetterElement.innerHTML=character;
	}
	function remove(){

	}

	function _start(speed){
		setTimeout(function(){
			var numberOfLines = element.parentElement.childNodes.length;
			if (numberOfLines > options.maxVerticalLines) {
			if (element.innerHTML.length < randomRange(20,1600)) {
				_addCharacter(stockCharacterArray[Math.floor(randomRange(0,stockCharacterArray.length))] + "\n");
				_start(options.speed);
			}
			else {
				stop();
			}
		},speed);
	}

	function stop(){
		setTimeout(function(){
			element.style.opacity = element.style.opacity -0.05;
			if (element.style.opacity <= 0) {
				element.remove();
				return "";
			}
			stop();
		}, 150);

	}
	
	return {
		display: function(){_display(); _start(options.speed);},
		addChar: function(character){_addCharacter(character);},
		options: options
	}
}
