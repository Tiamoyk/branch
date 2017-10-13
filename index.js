var box = document.getElementById('box');

box.addEventListener('mousedown',down)

function down(ev){
	
	var disX = ev.clientX-box.offsetLeft;
	var disY = ev.clientY-box.offsetTop;
	
	document.addEventListener('mousemove',move)
	
	function move(ev){
		box.style.left = ev.clientX-disX+'px';
		box.style.top = ev.clientY-disY+'px';
		ev.preventDefault();
	
	}	
	document.addEventListener('mouseup',up);

	function up(){
		document.removeEventListener('mousemove',move);
		removeEventListener('mouseup',up);
		
	}
}


