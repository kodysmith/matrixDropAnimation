// this file should contain the model code for vertical animated lines
function randomRange() {
	return Math.random()*(120-20) + 20;
}
var verticalLine = function(position,size,speed){
	var characterArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(_+-=~`";
	var element = document.createElement('div');
	var position = Math.floor(Math.random()*1000);
	var size = Math.floor(Math.random()*1000);
	var speed = Math.floor(Math.random()*1000);
	function _display(){
		element.className = size;
		element.style.position = "absolute"; 
		element.style.left = position + "px";
		element.style.opacity = 1;
		element.className += " verticalColumn";
		element.className += " matrixFont";
		document.body.appendChild(element);
	}
	function _addCharacter(character){
		element.innerHTML+=character;
	}
	function remove(){

	}

	function _start(speed){
		setTimeout(function(){
			if (element.innerHTML.length < randomRange()) {
				_addCharacter(characterArray[Math.round(Math.random()*35)] + " ");
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