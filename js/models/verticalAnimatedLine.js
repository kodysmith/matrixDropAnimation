// this file should contain the model code for vertical animated lines
function randomRange(min, max) {
	return Math.random()*(max-min) + min;
}
var verticalLine = function(position,size,speed){
	var stockCharacterArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(_+-=~`";
	var randomCharacterArray = Array ();
	var element = document.createElement('div');
	var newLetterElement = document.createElement('span');
	    newLetterElement.className = " newLetter";
	var oldLettersElement = document.createElement('span');
	var positionX = Math.floor(Math.random()*1000);
	var positionY = randomRange(window.innerHeight/2, -10);
	var size = Math.floor(Math.random()*1000);
	var speed = randomRange(100, 650);
	function _display(){
		element.className = size;
		element.style.position = "absolute";
		element.style.top = positionY + "px"; 
		element.style.left = positionX + "px";
		element.style.opacity = 1;
		element.className += " verticalColumn";
		element.className += " matrixFont";
		element.appendChild(oldLettersElement);
		element.appendChild(newLetterElement);
		document.body.appendChild(element);
	}
	function _addCharacter(character){
		oldLettersElement.innerHTML+=newLetterElement.innerHTML;
		newLetterElement.innerHTML=character;
	}
	function remove(){

	}

	function _start(speed){
		setTimeout(function(){
			if (element.innerHTML.length < randomRange(20,800)) {
				_addCharacter(stockCharacterArray[Math.round(Math.random()*35)] + " ");
				_start(speed);
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
				document.body.removeChild(element);
				return "";
			}
			stop();
		}, 250);

	}
	
	return {
		display: function(){_display(position,size); _start(speed);},
		addChar: function(character){_addCharacter(character);}
	}
}