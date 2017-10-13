
var box = document.getElementById('box');

box.addEventListener('mousedown',down)

function down(ev){
	
	var disX = ev.clientX-this.offsetLeft;
	var disY = ev.clientY.offsetTop;
	
	document.addEventListener('mousemove',move)
	
	function move(ev){
		box.style.left = disx-ev.clientX+'px';
		box.style.top = disY-ev.clientY+'px';
		ev.preventDefault();
	
	}
}