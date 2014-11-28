// this file should contain the model code for vertical animated lines
var verticalLine = function(position,size,speed){
	var characterArray = Array('a','b','c','d','e','f','g','h','i','j');
	var element = document.createElement('div');

	function _display(position, size){
		element.className = size;
		element.style="position:absolute; left:"+position;
		element.className += " verticalColumnLarge";
		element.className += " matrixFont";
		document.body.appendChild(element);
	}
	function _addCharacter(character){
		element.innerHTML+=character;
	}
	function remove(){

	}

	function _start(){

	}

	function stop(){

	}
	
	return {
		display: function(position,size,speed){_display(position,size); _start(speed);},
		addChar: function(character){_addCharacter(character);}
	}
}